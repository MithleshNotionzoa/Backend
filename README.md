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


