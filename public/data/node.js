export const nodeQuestions = {
    easy: [
        {
            question: "1. What is Node.js?",
            answer: "<code>Node.Js</code> is an open-source, server-side JavaScript runtime environment that allows developers to build scalable and high-performance network applications."
        },
        {
            question: "2. What is npm?",
            answer: "npm stands for Node Package Manager. It is a package manager for Node.js and is used to install, manage, and share packages or libraries of reusable code."
        },
        {
            question: "3. How do you create a server in Node.js?",
            answer: "To create a server in Node.js, you can use the built-in `http` module. Here's an example:\n\n```javascript\nconst http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!');\n});\n\nserver.listen(3000, 'localhost', () => {\n  console.log('Server running at http://localhost:3000/');\n});\n```"
        },
        {
            question: "4. What is the purpose of the `require` function in Node.js?",
            answer: "The `require` function is used to include modules in Node.js. It allows you to import code from other JavaScript files or modules."
        },
        {
            question: "5. What is the purpose of the `module.exports` object?",
            answer: "The `module.exports` object is used in Node.js to expose functions, objects, or values from a module so that other modules can use them."
        },
        {
            question: "6. What is the purpose of the `exports` object?",
            answer: "The `exports` object is a shorthand reference to `module.exports`. You can use it to assign values or functions directly to `exports` or modify its properties."
        },
        {
            question: "7. What is the purpose of the `http` module in Node.js?",
            answer: "The `http` module in Node.js provides functionality for creating HTTP servers and clients. It allows you to handle HTTP requests, send requests to other servers, and interact with HTTP headers and status codes."
        },
        {
            question: "8. What is the purpose of the `fs` module in Node.js?",
            answer: "The fs module in Node.js provides functions for interacting with the file system. It allows you to read from and write to files, create or delete directories, and perform other file-related operations."
        },
        {
            question: "9. How can you handle file uploads in Node.js?",
            answer: "File uploads in Node.js can be handled using middleware like `multer`. Multer allows you to handle multipart/form-data requests and provides easy access to the uploaded files in your application."
        },
        {
            question: "10. What is the purpose of the `path` module in Node.js?",
            answer: "The `path` module in Node.js provides functions for working with file paths. It allows you to manipulate file and directory paths, normalize and resolve paths, extract file extensions, and more."
        }
    ],
    intermediate: [
        {
            question: "11. Explain the concept of middleware in Express.js.",
            answer: "Middleware in Express.js is a series of functions that are invoked for every incoming HTTP request. It provides a way to perform tasks such as request parsing, authentication, logging, and error handling before the final request handler is called."
        },
        {
            question: "12. How can you scale a Node.js application?",
            answer: "Node.js applications can be scaled by using techniques like clustering, load balancing, and vertical scaling. Clustering involves running multiple instances of the application on different cores, while load balancing distributes incoming requests across these instances."
        },
        {
            question: "13. Explain the concept of Promises in Node.js.",
            answer: "Promises in Node.js provide a cleaner way to handle asynchronous code compared to traditional callback functions. A Promise represents the eventual completion or failure of an asynchronous operation and allows you to chain multiple asynchronous operations together using methods like `.then()` and `.catch()`."
        },
        {
            question: "14. Describe the role of EventEmitter in Node.js.",
            answer: "EventEmitter is a class in Node.js that allows you to create and handle custom events. It is used to bind and listen for events and can be extended to create custom event-driven objects."
        },
        {
            question: "15. How can you handle errors in Node.js?",
            answer: "Errors in Node.js can be handled using try-catch blocks, error event handlers, or by using middleware for error handling. Unhandled exceptions can be caught using the `process.on('uncaughtException')` event."
        },
        {
            question: "16. Explain the concept of callback hell and how to avoid it.",
            answer: "Callback hell refers to the situation where multiple asynchronous operations are nested within each other, resulting in deeply nested callbacks. It makes the code hard to read and maintain. To avoid callback hell, you can use techniques like modularization, named functions, Promises, or async/await syntax to handle asynchronous operations in a more readable and organized way."
        },
        {
            question: "17. How does garbage collection work in Node.js?",
            answer: "Node.js uses a mark-and-sweep garbage collector to manage memory. It automatically detects and frees up memory that is no longer referenced by the application. The V8 engine, which powers Node.js, performs garbage collection periodically in the background."
        },
        {
            question: "18. What is the purpose of the cluster module in Node.js?",
            answer: "The cluster module in Node.js allows you to create child processes (workers) to handle incoming requests. It enables you to take advantage of multiple CPU cores and distribute the workload across processes, increasing the application's performance and reliability."
        },
        {
            question: "19. How can you perform unit testing in Node.js?",
            answer: "Node.js supports various testing frameworks like Mocha, Jest, and Jasmine for unit testing. These frameworks provide tools and APIs to write and run tests for your Node.js code, allowing you to ensure the correctness and reliability of your application."
        },
        {
            question: "20. How can you handle authentication and authorization in Node.js?",
            answer: "Authentication and authorization in Node.js can be handled by using libraries like Passport.js or implementing your own authentication middleware. Techniques like session-based authentication, JSON Web Tokens (JWT), or OAuth can be used for secure authentication and authorization."
        },
        {
            question: "21. How can you interact with databases in Node.js?",
            answer: "Node.js can interact with databases using database-specific libraries or ORMs (Object-Relational Mappers) such as Sequelize for SQL databases or Mongoose for MongoDB. These libraries provide convenient methods for querying, inserting, updating, and deleting data."
        },
        {
            question: "22. How do you debug Node.js applications?",
            answer: "Node.js applications can be debugged using tools like the built-in debugger (`node inspect`), the Chrome DevTools with the `--inspect` flag, or using IDEs that support Node.js debugging. These tools allow you to set breakpoints, inspect variables, and step through the code to find and fix issues."
        },
        {
            question: "23. What is the purpose of the crypto module in Node.js?",
            answer: "The crypto module in Node.js provides cryptographic functionality. It allows you to generate secure hashes, encrypt and decrypt data, create digital signatures, and perform other cryptographic operations."
        },
        {
            question: "24. What is the purpose of the util module in Node.js?",
            answer: "The util module in Node.js provides various utility functions that are helpful for debugging, working with objects, formatting strings, and other common tasks. It includes functions like `util.format`, `util.promisify`, and `util.inspect`."
        }
    ],
    advanced: [
        {
            question: "25. Explain the concept of WebSockets and how it differs from HTTP.",
            answer: "WebSockets provide a persistent, full-duplex communication channel between a client and a server. Unlike HTTP, which is stateless and request-response-based, WebSockets allow real-time bidirectional communication, making them suitable for applications that require constant data exchange."
        },
        {
            question: "26. What is the purpose of the `child_process` module in Node.js?",
            answer: "The `child_process` module in Node.js provides functionality for spawning child processes. It allows you to run other programs or scripts from within your Node.js application."
        },
        {
            question: "27. What is clustering in Node.js?",
            answer: "Clustering in Node.js is the process of creating multiple child processes (workers) to handle incoming requests. This allows you to take advantage of multiple CPU cores and distribute the workload across processes, increasing the application's performance and reliability."
        },
        {
            question: "28. What are JSON Web Tokens (JWT)?",
            answer: "JSON Web Tokens (JWT) are a compact and self-contained way to transmit information between parties as a JSON object. They are commonly used for authentication and authorization"
        },
        {
            question: "29. What is the purpose of the `zlib` module in Node.js?",
            answer: "The `zlib` module in Node.js provides compression and decompression functionality. It allows you to compress or decompress data using gzip, deflate, or other compression algorithms."
        },
        {
            question: "30. How can you handle cross-origin resource sharing (CORS) in Node.js?",
            answer: "CORS can be handled in Node.js by using middleware like `cors`. It allows you to set the necessary HTTP headers to enable cross-origin requests from different domains."
        },
        {
            question: "31. What is the Event Loop in Node.js?",
            answer: "The Event Loop is a mechanism in Node.js that allows the runtime to efficiently handle asynchronous operations. It continuously checks for pending events and executes their associated callback functions, ensuring non-blocking I/O operations."
        },
        {
            question: "32. How can you schedule tasks or cron jobs in Node.js?",
            answer: "You can schedule tasks or cron jobs in Node.js using libraries like `node-cron` or `node-schedule`. These libraries provide an easy way to define recurring tasks or schedule jobs at specific times."
        },
        {
            question: "33. What is the purpose of the `net` module in Node.js?",
            answer: "The net module in Node.js provides low-level networking functionality. It allows you to create TCP or UNIX socket servers and clients, handle network connections, and perform socket-level operations."
        },
        {
            question: "34. What is the purpose of the `dgram` module in Node.js?",
            answer: "The `dgram` module in Node.js provides UDP (User  Datagram Protocol) functionality. It allows you to create UDP sockets, send and receive UDP datagrams, and handle UDP multicast or broadcast."
        },
        {
            question: "35. What is the purpose of the `tty` module in Node.js?",
            answer: "The `tty` module in Node.js provides functionality related to terminal input and output. It allows you to interact with the terminal, read input, handle keyboard events, and control the cursor."
        },
        {
            question: "36. What is the purpose of the `os` module in Node.js?",
            answer: "The `os` module in Node.js provides functions for interacting with the operating system. It allows you to get information about the system's architecture, network interfaces, CPU usage, memory, and other system-related details."
        },
        {
            question: "37. What is the purpose of the `querystring` module in Node.js?",
            answer: "The `querystring` module in Node.js provides functions for working with query strings. It allows you to parse query strings, stringify objects into query strings, and perform URL encoding and decoding."
        },
        {
            question: "38. How does Node.js handle caching of modules?",
            answer: "Node.js caches modules upon the first `require()` call. This means that subsequent calls to `require()` for the same module will return the cached module without re-evaluating its code. This caching mechanism improves performance by avoiding redundant module loading."
        },
        {
            question: "39. What is the purpose of the `assert` module in Node.js?",
            answer: "The `assert` module in Node.js provides a set of functions for performing assertions and throwing errors if the conditions are not met. It is commonly used for writing tests and validating assumptions in your code."
        },
        {
            question: "40. How can you secure a Node.js application?",
            answer: "Securing a Node.js application involves practices like validating user input, using secure authentication mechanisms, implementing proper access controls, using encryption for sensitive data, and keeping dependencies up to date to avoid security vulnerabilities."
        },
        {
            question: "41. What is the purpose of the `stream` module in Node.js?",
            answer: "The `stream` module in Node.js provides an API for working with streaming data. It allows you to read and write data in a continuous flow, which is useful for handling large amounts of data efficiently without loading everything into memory at once."
        },
        {
            question: "42. Explain the concept of microservices in Node.js.",
            answer: "Microservices is an architectural style that structures an application as a collection of small, loosely coupled services. In Node.js, microservices can be built using lightweight frameworks and can communicate with each other over HTTP or messaging queues, allowing for scalability and easier maintenance."
        },
        {
            question: "43. What is the purpose of the `vm` module in Node.js?",
            answer: "The `vm` module in Node.js provides a way to compile and run JavaScript code within a V8 virtual machine context. It allows you to create isolated environments for executing code, which can be useful for sandboxing or executing untrusted code."
        },
        {
            question: "44. How can you implement logging in a Node.js application?",
            answer: "Logging in a Node.js application can be implemented using libraries like `winston` or `bunyan`. These libraries provide flexible logging capabilities, allowing you to log messages at different levels (info, warn, error) and output logs to various transports (console, files, remote servers)."
        },
        {
            question: "45. What is the purpose of the `domain` module in Node.js?",
            answer: "The `domain` module in Node.js provides a way to handle multiple I/O operations as a single group. It allows you to manage error handling across asynchronous operations, making it easier to catch errors that occur in callbacks."
        },
        {
            question: "46. How can you implement file streaming in Node.js?",
            answer: "File streaming in Node.js can be implemented using the `fs.createReadStream` and `fs.createWriteStream` methods. These methods allow you to read from and write to files in a streaming manner, which is efficient for handling large files."
        },
        {
            question: "47. What is the purpose of the `http2` module in Node.js?",
            answer: "The `http2` module in Node.js provides support for HTTP/2, which is a major revision of the HTTP network protocol. It allows for multiplexing multiple requests over a single connection, reducing latency and improving performance."
        },
        {
            question: "48. How can you implement internationalization (i18n) in a Node.js application?",
            answer: "Internationalization (i18n) in a Node.js application can be implemented using libraries like `i18next` or `express-i18n`. These libraries provide tools for managing translations and adapting the application to different languages and locales."
        },
        {
            question: "49. What is the purpose of the `performance` module in Node.js?",
            answer: "The `performance` module in Node.js provides an API for measuring the performance of your application. It allows you to track the time taken for various operations, helping you identify bottlenecks and optimize performance."
        },
        {
            question: "50. How can you implement a RESTful API in Node.js?",
            answer: "A RESTful API in Node.js can be implemented using frameworks like Express.js. You define routes for different HTTP methods (GET, POST, PUT, DELETE) and handle requests and responses accordingly, often interacting with a database to manage data."
        },
        {
            question: "51. What is the purpose of the `buffer` module in Node.js?",
            answer: "The `buffer` module in Node.js provides a way to work with binary data. It allows you to create, manipulate, and convert binary data buffers, which is useful for handling raw data streams."
        },
        {
            question: "52. How can you manage environment variables in a Node.js application?",
            answer: "Environment variables in a Node.js application can be managed using the `dotenv` package. This package allows you to load environment variables from a `.env` file into `process.env`, making it easier to manage configuration settings."
        },
        {
            question: "53. What is the purpose of the `assert` module in Node.js?",
            answer: "The `assert` module in Node.js provides a set of functions for performing assertions and throwing errors if the conditions are not met. It is commonly used for writing tests and validating assumptions in your code."
        },
        {
            question: "54. How can you implement session management in a Node.js application?",
            answer: "Session management in a Node.js application can be implemented using middleware like `express-session`. This middleware allows you to store session data on the server and associate it with a unique session ID sent to the client."
        },
        {
            question: "55. What is the purpose of the `multer` middleware in Node.js?",
            answer: "Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files. It simplifies the process of handling file uploads in Express.js applications."
        },
        {
            question: "56. How can you implement pagination in a Node.js application?",
            answer: "Pagination in a Node.js application can be implemented by using query parameters to specify the page number and the number of items per page. You can then query the database accordingly to return only the relevant subset of data."
        },
        {
            question: "57. What is the purpose of the `socket.io` library in Node.js?",
            answer: "The `socket.io` library in Node.js enables real-time, bidirectional communication between clients and servers. It abstracts WebSocket communication and provides fallbacks for older browsers, making it easier to implement real-time features like chat applications."
        },
        {
            question: "58. How can you implement file uploads in a Node.js application?",
            answer: "File uploads in a Node.js application can be handled using middleware like `multer`. Multer allows you to handle multipart/form-data requests and provides easy access to the uploaded files in your application."
        },
        {
            question: "59. What is the purpose of the `compression` middleware in Express.js?",
            answer: "The `compression` middleware in Express.js is used to compress HTTP responses. It reduces the size of the response body, which can improve the performance of your application by decreasing the amount of data sent over the network."
        },
        {
            question: "60. How can you implement a WebSocket server in Node.js?",
            answer: "A WebSocket server in Node.js can be implemented using the `ws` library. You can create a WebSocket server that listens for connections and handles messages from clients, allowing for real-time communication. Here's a simple example:\n\n```javascript\nconst WebSocket = require('ws');\n\nconst wss = new WebSocket.Server({ port: 8080 });\n\nwss.on('connection', (ws) => {\n  ws.on('message', (message) => {\n    console.log('received: %s', message);\n  });\n  ws.send('Hello! Message from server.');\n});\n```"
        },
        {
            question: "61. What is the purpose of the `helmet` middleware in Express.js?",
            answer: "The `helmet` middleware in Express.js helps secure your application by setting various HTTP headers. It can protect against common vulnerabilities like cross-site scripting (XSS), clickjacking, and other attacks by configuring security-related HTTP headers."
        },
        {
            question: "62. How can you implement rate limiting in a Node.js application?",
            answer: "Rate limiting can be implemented in a Node.js application using middleware like `express-rate-limit`. This middleware allows you to limit the number of requests a client can make to your server within a specified time frame, helping to prevent abuse and ensure fair usage."
        },
        {
            question: "63. What is the purpose of the `cors` middleware in Node.js?",
            answer: "The `cors` middleware in Node.js is used to enable Cross-Origin Resource Sharing (CORS). It allows your server to specify which domains are permitted to access resources, helping to prevent security issues related to cross-origin requests."
        },
        {
            question: "64. How can you implement logging in a Node.js application?",
            answer: "Logging in a Node.js application can be implemented using libraries like `winston` or `bunyan`. These libraries provide flexible logging capabilities, allowing you to log messages at different levels (info, warn, error) and output logs to various transports (console, files, remote servers)."
        },
        {
            question: "65. What is the purpose of the `dotenv` package in Node.js?",
            answer: "The `dotenv` package in Node.js is used to load environment variables from a `.env` file into `process.env`. This allows you to manage configuration settings and sensitive information like API keys and database credentials securely."
        },
        {
            question: "66. How can you handle uncaught exceptions in a Node.js application?",
            answer: "Uncaught exceptions in a Node.js application can be handled using the `process.on('uncaughtException')` event. You can listen for this event to log the error and perform cleanup actions before the application exits. However, it's recommended to avoid uncaught exceptions and handle errors properly in your code."
        }
    ]
};