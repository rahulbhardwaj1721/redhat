exports.getXkcdData = {
    description: 'Get random comics data from XKCD API',
    tags: ['xkcdApi'],
    summary: 'Get random comics data from XKCD API',
    response: {
      200: {
        description: 'Successful response',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            comic: {
              type: 'string',
            },
           
              comic_meta: {
                type: 'object',
                properties: {
                  alt_text: {
                    type: 'string',
                  },
                  number: {
                    type: 'string',
                  },
                  link: {
                    type: 'string',
                  },
                  image: {
                    type: 'string',
                  },
                  image_link: {
                    type: 'string',
                  }
                }
              }
          }
        }
      }
    }
  }