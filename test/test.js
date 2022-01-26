require('dotenv').config();
const { FASTIFY_PORT, FASTIFY_ADDRESS } = process.env;
const url = 'http://' + FASTIFY_ADDRESS + ':' + FASTIFY_PORT;
const requests = require('supertest')(url);
const config = require('../axiomconfig.json');
const comicQty = config.XKCD.TOTAL_RECORDS;
const chai = require('chai');
const should = chai.should();

describe('Sample unit test case for XKCD service', function () {
    it('should return random XKCD comic attribute', (done) => {
        requests.get('/api/xkcd')
            .expect("Content-type", /json/)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                res.status.should.equal(200);
                res.body.should.be.a('array');
                res.body.length.should.equal(comicQty);
                done();
            })
    });

});
