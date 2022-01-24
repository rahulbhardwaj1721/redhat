const documentation = require('./documentation/xkcdapi')
const xkcdApi = require('../services/xkcdApi')
const xkcdApiRoutes = [
  {
    method: 'GET',
    url: '/api/xkcd',
   schema: documentation.getXkcdData,
    handler: xkcdApi.getXkcdData
  },

  
]

module.exports = xkcdApiRoutes
