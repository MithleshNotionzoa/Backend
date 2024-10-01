
# Integration Guide: Frontend with NestJS Backend
Welcome to the guide for integrating the frontend with our NestJS backend. This document will explain the key steps, routes, and patterns to follow for a smooth integration process.

## Table of Contents
1. [Base URL](#base-url)
2. [Authentication](#authentication)
3. [Logging](#logging)
4. [CORS](#cors)
5. [Example Code Snippets](#example-code-snippets)

_________________________________________________________________________________________________

##  Base URL
   The backend is hosted at:
     
   ```
   http://localhost:3000
  ```
   Make sure all API calls from the frontend are directed to this base URL. Append the appropriate route based on the service or functionality you need.

## Authentication   
  **USE GRAPHQL CLIENT**
  - For Sign-up<br>
  
    Call  `createUser`  function<br>
    
    ```
     createUser()
    ```
  - For Log-in<br>
  
    Call  `findOne`  function<br>
    
    ```
     findOne()
    ```

##  Logging
  - Create a log<br>
    Allows creation of a new log.

    URL with Endpoint
  ```
    http://localhost:3000/logs/post
```
- Get all logs<br>

    URL with Endpoint
```
    http://localhost:3000/logs/get
```
- Update/Patch a log<br>

    URL with Endpoint
```
    http://localhost:3000/logs/update/:id
```
- Delete a log<br>

    URL with Endpoint
```
    http://localhost:3000/logs/delete/:id
```
##  CORS
CORS is enabled in the NestJS backend, allowing cross-origin requests from the frontend. Make sure your frontend makes requests to the backend with proper Origin headers.

##  Example Code Snippets
 Posting Data Using `fetch` API (JavaScript)
 ```
fetch('http://localhost:3000/logs/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
body: JSON.stringify({ key1: 'value1', key2: 'value2' }), 
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```
 Posting Data Using `axios` API (JavaScript)
 ```
axios.post('http://localhost:3000/logs/post', 
  { key1: 'value1', key2: 'value2' }, // Data to send
  {
    withCredentials: true, // Include credentials (cookies)
    headers: {
      'Content-Type': 'application/json', // Specify the content type
    },
  }
)
.then(response => console.log(response.data))
.catch(error => console.error('Error:', error));
```


>>>>>>> bb78562fcae26bc80cbf82346fb84bde7890f251

<<<<<<< HEAD
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).