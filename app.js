'use strict'

require('dotenv').config()
const path = require('path')
const AutoLoad = require('fastify-autoload')
const swagger = require('./src/config/swagger')

const fastify = require('fastify')({
    bodyLimit: 12485760 // === 10MB
  //  logger: true
})

const db = require('./src/models')

const axiomRoutes= require('./src/routes/xkcdapi');

const { FASTIFY_PORT, FASTIFY_ADDRESS } = process.env
db.sequelize.sync()


fastify.register(require('fastify-cors'), {
    // put your options here
})

// To load fastify swagger files.
fastify.register(require('fastify-swagger'), swagger.options)


/*axiomRoutes.forEach((routes, index) => {
    routes.forEach((route, index) => {
    fastify.route(route)
  })
})*/
axiomRoutes.forEach((route, index) => {
    fastify.route(route)
})

fastify.ready((err) => {
    if (err) {
        //  console.error("swagger ", err);
        throw err
    }
    console.log('server started')
    //fastify.log.info(`server listening on ${fastify.server.address().port}`)
    fastify.swagger()
})

fastify.listen(FASTIFY_PORT, FASTIFY_ADDRESS, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})
