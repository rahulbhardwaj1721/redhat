generate
fastify-cli can also help with generating some project scaffolding to kickstart the development of your next Fastify application. To use it:

1. fastify generate <yourapp> ##No need to execute this as it has been already generated.
2. cd yourapp ## your are in your current directory. To make sure the current directory is right one, it should have package.json as sibling. 
3. Need to install Node and NPM.(To check the version of node : node -v , To check the version of npm : npm -v )
4. npm install ## just run this and all dependencies will be install. Make sure you have internet connection.
5. The application can be started in different ways:
-- For production start with => npm start
-- For developement you can start with => npm run dev
                     OR
   npx nodemon --exec npm run dev [recommended]. By this command you don't need to start the server on making any changes.
6. Main Structure is like this

     src
      |
      |-----config
      |       |-------config.json[database configuration file.Please use own database credentials in this file]
      |       |-------swagger.js[provides swagger url path and all api details]
      |
      |-----models[Should contains SQL query builder for any api]
      |       
      |-----routes[Should contains the api path]
      |       |-------documentation[Should contains the api documentation of all rest services.]
      |       |            |---------xkcdapi[this contains the documentation of all the rest services of xkcd]
      |       |            
      |       |
      |       |-------xkcdapi[this will contains all the rest api details]
      |		
      |-----services[Should act as a service to communicate with model for getting the required data]
      |       |
      |
      |
     Test
      |
      |------test.js[Unit test cases should be written with the help of chai/mocha.To run the test case simple run : npm test]
      |   
##Change in .env to run the application with below environment.
NODE_ENV =  development  
NODE_ENV =  production
In development mode logging is enabled 
In production mode logging is disabled 



7. Application hosted on localhost with port 8065.you can change it with .env file.
8. Db script : Install Mysql locally and then run the create db command(CREATE DATABASE xkcd;) and thats all, create table and dependency of model will handle by the application.
9. For the documentation of API : swagger is integrated (URL : http://localhost:8065/swagger/) 
10. For calling of services or verify the result of services you can call with the help of postman or swagger interface it self.
     as a curl command we can call also call the  XKCD service api : 
     curl -X GET "http://localhost:8065/api/xkcd" -H "accept: application/json"
     result will display in console as well as on the the client calling api.

11. Note : As per the implementaion of API we inserting the value into the XKCD table after calling the api.
           As of now always calling the XKCD api not fetching with DB assuming that changes do occur in the existing xkcd comics api.(https://xkcd.com/1/info.0.json)   