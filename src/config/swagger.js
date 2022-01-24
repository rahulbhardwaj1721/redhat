const {FASTIFY_PORT,FASTIFY_ADDRESS}=process.env;
exports.options = {
  routePrefix: '/swagger',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Rest API',
      description: 'Getting all the API details',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: FASTIFY_ADDRESS+':'+FASTIFY_PORT,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}
