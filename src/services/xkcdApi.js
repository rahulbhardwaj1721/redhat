'use strict';
const db = require("../models");
const config = require('../../axiomconfig.json');
const fetch = require('node-fetch');
const comicQty = config.XKCD.TOTAL_RECORDS;
const randomNumbs = require('./randomNumber');
// Get xkcd info Data
exports.getXkcdData = async (req, reply) => {
  try {
    var result = [];
    let imgArray = [];
    let link = '';

    const rNumbers = randomNumbs();

    for (let i = 0; i < comicQty; i++) {

      await fetch(`https://xkcd.com/${rNumbers[i]}/info.0.json`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(responseData => {

          imgArray = responseData.img !== '' ? responseData.img.split("/", 5) : '';

          link = responseData.link !== '' ? responseData.link : `https://xkcd.com/${responseData.num}`;

          result[i] = {
            comic: responseData.title,
            comic_meta: { alt_text: responseData.alt, number: responseData.num, link: link, image: imgArray[4], image_link: responseData.img }
          };

          let resultComic = db.xkcd.findOne({ where: { id: result[i].comic_meta.number } });

          resultComic.then((comic) => {
            if (comic === null) {
              db.xkcd.create({
                id: result[i].comic_meta.number,
                name: result[i].comic,
                altext: result[i].comic_meta.alt_text,
                imagelink: result[i].comic_meta.image_link
              }).catch(err => {
                console.error(`Insertion failed--> `, err);
                reply.send(err);
              });
            }
          }).catch(err => {
            console.error(`Select failed --> `, err);
            reply.send(err);
          });

        })
        .catch(err => {
          console.error(`fetchComics --> `, err);
          reply.send(err);
        });
    }
    console.log(result);
    reply.send(result);

  } catch (err) {
    console.error(`fetchComics --> `, err);
    reply.send(err);
  }
}