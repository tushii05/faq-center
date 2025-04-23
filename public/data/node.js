export const nodeQuestions = [
        {
            question: "1. What is Node.js?",
            answer: "<code>Node.Js</code> is an open-source, server-side JavaScript runtime environment that allows developers to build scalable and high-performance network applications."
        },
        {
            question: "2. What is the event-driven, non-blocking I/O model in Node.js?",
            answer: "Node.js follows an event-driven, non-blocking I/O model, which means it operates on a single thread using asynchronous callbacks to handle I/O operations. This allows for efficient utilization of resources and scalability."
        },
        {
            question: "3. How does Node.js handle concurrency?",
            answer: "Node.js achieves concurrency through event looping. It uses a single thread to handle multiple concurrent connections and asynchronously delegates I/O operations to the operating system."
        },
        {
            question: "4. Explain the concept of middleware in Express.js.",
            answer: "Middleware in Express.js is a series of functions that are invoked for every incoming HTTP request. It provides a way to perform tasks such as request parsing, authentication, logging, and error handling before the final request handler is called."
        },
        {
            question: "5. How can you scale a Node.js application?",
            answer: "Node.js applications can be scaled by using techniques like clustering, load balancing, and vertical scaling. Clustering involves running multiple instances of the application on different cores, while load balancing distributes incoming requests across these instances. Vertical scaling involves increasing the resources of the server or hosting environment."
        },
        {
            question: "6. What are streams in Node.js? How are they useful?",
            answer: "Streams in Node.js are objects that allow you to read or write data in a continuous, chunked manner. They are useful for handling large amounts of data, processing file input/output, and implementing efficient network communication."
        },
        {
            question: "7. Explain the purpose of the package.json file in Node.js.",
            answer: "The package.json file in Node.js serves as a manifest for the application. It contains metadata about the project, including dependencies, scripts, and other configurations. It is used by npm for package management and project setup."
        },
        {
            question: "8. How can you handle errors in Node.js?",
            answer: "Errors in Node.js can be handled using try-catch blocks, error event handlers, or by using middleware for error handling. Unhandled exceptions can be caught using the `process.on('uncaughtException')` event."
        },
        {
            question: "9. Describe the difference between process.nextTick and setImmediate.",
            answer: "`process.nextTick` and `setImmediate` are both used to defer the execution of a callback function, but they have different order of execution. `process.nextTick` executes the callback immediately after the current phase of the event loop, whereas `setImmediate` executes the callback in the next iteration of the event loop."
        },
        {
            question: "10. What is the purpose of the REPL in Node.js?",
            answer: "REPL stands for Read-Eval-Print Loop. It is an interactive programming environment that allows you to execute JavaScript code and see the results immediately. The Node.js REPL is useful for prototyping, testing code snippets, and debugging."
        },
        {
            question: "11. How can you handle file uploads in Node.js?",
            answer: "File uploads in Node.js can be handled using middleware like `multer`. Multer allows you to handle multipart/form-data requests and provides easy access to the uploaded files in your application."
        },
        {
            question: "12. Explain the concept of callback hell and how to avoid it.",
            answer: "Callback hell refers to the situation where multiple asynchronous operations are nested within each other, resulting in deeply nested callbacks. It makes the code hard to read and maintain. To avoid callback hell, you can use techniques like modularization, named functions, Promises, or async/await syntax to handle asynchronous operations in a more readable and organized way."
        },
        {
            question: "13. How does garbage collection work in Node.js?",
            answer: "Node.js uses a mark-and-sweep garbage collector to manage memory. It automatically detects and frees up memory that is no longer referenced by the application. The V8 engine, which powers Node.js, performs garbage collection periodically in the background."
        },
        {
            question: "14. What is the purpose of the cluster module in Node.js?",
            answer: "The cluster module in Node.js allows you to create child processes (workers) to handle incoming requests. It enables you to take advantage of multiple CPU cores and distribute the workload across processes, increasing the application's performance and reliability."
        },
        {
            question: "15. How can you perform unit testing in Node.js?",
            answer: "Node.js supports various testing frameworks like Mocha, Jest, and Jasmine for unit testing. These frameworks provide tools and APIs to write and run tests for your Node.js code, allowing you to ensure the correctness and reliability of your application."
        },
        {
            question: "16. Explain the concept of Promises in Node.js.",
            answer: "Promises in Node.js provide a cleaner way to handle asynchronous code compared to traditional callback functions. A Promise represents the eventual completion or failure of an asynchronous operation and allows you to chain multiple asynchronous operations together using methods like `.then()` and `.catch()`."
        },
        {
            question: "17. Describe the role of EventEmitter in Node.js.",
            answer: "EventEmitter is a class in Node.js that allows you to create and handle custom events. It is used to bind and listen for events and can be extended to create custom event-driven objects."
        },
        {
            question: "18. How can you secure a Node.js application?",
            answer: "Securing a Node.js application involves practices like validating user input, using secure authentication mechanisms, implementing proper access controls, using encryption for sensitive data, and keeping dependencies up to date to avoid security vulnerabilities."
        },
        {
            question: "19. Explain the purpose of the Buffer class in Node.js.",
            answer: "The Buffer class in Node.js is used to handle binary data. It provides methods for creating, reading, and manipulating data in raw binary format. Buffers are commonly used for handling network data, file streams, and other I/O operations."
        },
        {
            question: "20. How does Node.js handle caching of modules?",
            answer: "Node.js caches modules upon the first `require()` call. This means that subsequent calls to `require()` for the same module will return the cached module without re-evaluating its code. This caching mechanism improves performance by avoiding redundant module loading."
        },
        {
            question: "21. What is the purpose of the process object in Node.js?",
            answer: "The process object in Node.js provides information and control over the current Node.js process. It allows you to access command-line arguments, environment variables, stdin/stdout, and provides methods to exit the process or handle uncaught exceptions."
        },
        {
            question: "22. Describe the purpose of the fs module in Node.js.",
            answer: "The fs module in Node.js provides functions for interacting with the file system. It allows you to read from and write to files, create or delete directories, manipulate file permissions, and perform other file-related operations."
        },
        {
            question: "23. Explain the concept of template engines in Node.js.",
            answer: "Template engines in Node.js allow you to dynamically generate HTML or other types of documents by combining templates with data. Engines like EJS, Pug (formerly Jade), and Handlebars provide syntax and functionality to generate dynamic content."
        },
        {
            question: "24. How can you handle authentication and authorization in Node.js?",
            answer: "Authentication and authorization in Node.js can be handled by using libraries like Passport.js or implementing your own authentication middleware. Techniques like session-based authentication, JSON Web Tokens (JWT), or OAuth can be used for secure authentication and authorization."
        },
        {
            question: "25. What is the purpose of the util module in Node.js?",
            answer: "The util module in Node.js provides various utility functions that are helpful for debugging, working with objects, formatting strings, and other common tasks. It includes functions like `util.format`, `util.promisify`, and `util.inspect`."
        },
        {
            question: "26. Explain the concept of a WebSocket and how it differs from HTTP.",
            answer: "WebSockets provide a persistent, full-duplex communication channel between a client and a server. Unlike HTTP, which is stateless and request-response-based, WebSockets allow real-time bidirectional communication, making them suitable for applications that require constant data exchange."
        },
        {
            question: "27. What is the purpose of the crypto module in Node.js?",
            answer: "The crypto module in Node.js provides cryptographic functionality. It allows you to generate secure hashes, encrypt and decrypt data, create digital signatures, and perform other cryptographic operations."
        },
        {
            question: "28. How can you interact with databases in Node.js?",
            answer: "Node.js can interact with databases using database-specific libraries or ORMs (Object-Relational Mappers) such as Sequelize for SQL databases or Mongoose for MongoDB. These libraries provide convenient methods for querying, inserting, updating, and deleting data."
        },
        {
            question: "29. Describe the purpose of the net module in Node.js.",
            answer: "The net module in Node.js provides low-level networking functionality. It allows you to create TCP or UNIX socket servers and clients, handle network connections, and perform socket-level operations."
        },
        {
            question: "30. How can you handle cross-origin resource sharing (CORS) in Node.js?",
            answer: "CORS can be handled in Node.js by using middleware like `cors`. It allows you to set the necessary HTTP headers to enable cross-origin requests from different domains."
        },
        {
            question: "31. How do you debug Node.js applications?",
            answer: "Node.js applications can be debugged using tools like the built-in debugger (`node inspect`), the Chrome DevTools with the `--inspect` flag, or using IDEs that support Node.js debugging. These tools allow you to set breakpoints, inspect variables, and step through the code to find and fix issues."
        },
        {
            question: "32. What is npm?",
            answer: "npm stands for Node Package Manager. It is a package manager for Node.js and is used to install, manage, and share packages or libraries of reusable code."
        },
        {
            question: "33. What is the difference between Node.js and JavaScript?",
            answer: "Node.js is a runtime environment that allows JavaScript to run on the server-side, while JavaScript is a programming language used for both client-side and server-side scripting."
        },
        {
            question: "34. How do you create a server in Node.js?",
            answer: "To create a server in Node.js, you can use the built-in `http` module. Here's an example:\n\n```javascript\nconst http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!');\n});\n\nserver.listen(3000, 'localhost', () => {\n  console.log('Server running at http://localhost:3000/');\n});\n```"
        },
        {
            question: "35. What is an Event Emitter in Node.js?",
            answer: "Event Emitter is a class in Node.js that allows you to create and handle custom events. It is used to bind and listen for events and can be extended to create custom event-driven objects."
        },
        {
            question: "36. What is the purpose of the `require` function in Node.js?",
            answer: "The `require` function is used to include modules in Node.js. It allows you to import code from other JavaScript files or modules."
        },
        {
            question: "37. What is the purpose of the `module.exports` object?",
            answer: "The `module.exports` object is used in Node.js to expose functions, objects, or values from a module so that other modules can use them. It is the main way to create reusable code in Node.js."
        },
        {
            question: "38. What is the purpose of the `exports` object?",
            answer: "The `exports` object is a shorthand reference to `module.exports`. You can use it to assign values or functions directly to `exports` or modify its properties. However, you cannot reassign `exports` itself."
        },
        {
            question: "39. What is a middleware in Express.js?",
            answer: "Middleware functions in Express.js are functions that have access to the request and response objects and can perform actions before or after the main request-handling function. They can be used to add additional functionality to the application, such as logging, authentication, or error handling."
        },
        {
            question: "40. How do you handle form data in Express.js?",
            answer: "In Express.js, you can use the `body-parser` middleware to handle form data. It allows you to access form data submitted via POST requests through the `req.body` object."
        },
        {
            question: "41. What is the purpose of the `next` function in Express.js middleware?",
            answer: "The `next` function is used in Express.js middleware to pass control to the next middleware function in the stack. It is typically called at the end of a middleware function to allow the request to continue to the next matching route or middleware."
        },
        {
            question: "42. What is a Promise in Node.js?",
            answer: "A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises provide a cleaner way to handle asynchronous code compared to traditional callback functions."
        },
        {
            question: "43. How do you handle asynchronous operations with Promises in Node.js?",
            answer: "You can use the `then` and `catch` methods to handle the success and error cases of a Promise. Additionally, you can use `async/await` syntax to write asynchronous code in a more synchronous style."
        },
        {
            question: "44. What is the difference between readable and writable streams?",
            answer: "A readable stream is used to read data from a source, while a writable stream is used to write data to a destination. Both streams can be used together to process data in a streaming fashion."
        },
        {
            question: "45. What is an ORM?",
            answer: "ORM stands for Object-Relational Mapper. It is a technique that allows you to interact with relational databases using objects instead of writing raw SQL queries. ORMs handle the mapping between objects and database tables, making database operations easier and more object-oriented."
        },
        {
            question: "46. What is callback-based style in Node.js?",
            answer: "Callback-based style is a programming pattern commonly used in Node.js, where asynchronous operations are handled by passing callback functions as arguments to other functions. The callback function is called when the asynchronous operation completes."
        },
        {
            question: "47. What is the Event Loop in Node.js?",
            answer: "The Event Loop is a mechanism in Node.js that allows the runtime to efficiently handle asynchronous operations. It continuously checks for pending events and executes their associated callback functions, ensuring non-blocking I/O operations."
        },
        {
            question: "48. What is clustering in Node.js?",
            answer: "Clustering in Node.js is the process of creating multiple child processes (workers) to handle incoming requests. This allows you to take advantage of multiple CPU cores and distribute the workload across processes, increasing the application's performance and reliability."
        },
        {
            question: "49. What are JSON Web Tokens (JWT)?",
            answer: "JSON Web Tokens (JWT) are a compact and self-contained way to transmit information between parties as a JSON object. They are commonly used for authentication and authorization purposes in web applications."
        },
        {
            question: "50. What is the purpose of the `assert` module in Node.js?",
            answer: "The `assert` module in Node.js provides a set of functions for performing assertions and throwing errors if the conditions are not met. It is commonly used for writing tests and validating assumptions in your code."
        },
        {
            question: "51. What is the purpose of the `path` module in Node.js?",
            answer: "The `path` module in Node.js provides functions for working with file paths. It allows you to manipulate file and directory paths, normalize and resolve paths, extract file extensions, and more."
        },
        {
            question: "52. How can you handle environment variables in Node.js?",
            answer: "You can handle environment variables in Node.js using the `process.env` object. It provides access to the environment variables defined in the operating system."
        },
        {
            question: "53. What is event-driven programming in Node.js?",
            answer: "Event-driven programming is a programming paradigm where the flow of the program is determined by events. In Node.js, many operations are based on asynchronous events, and event-driven programming allows you to respond to these events efficiently."
        },
        {
            question: "54. What is a buffer in Node.js?",
            answer: "A buffer is a temporary storage area in memory that allows you to read, manipulate, and write binary data. It is commonly used in Node.js for handling network data, file streams, and other I/O operations."
        },
        {
            question: "55. How do you handle sessions in Node.js?",
            answer: "To handle sessions in Node.js, you can use libraries like `express-session`. This allows you to store session data on the server and associate it with a client's session ID."
        },
        {
            question: "56. What is the purpose of the `child_process` module in Node.js?",
            answer: "The `child_process` module in Node.js provides functionality for spawning child processes. It allows you to run other programs or scripts from within your Node.js application."
        },
        {
            question: "57. How can you handle asynchronous control flow in Node.js?",
            answer: "You can handle asynchronous control flow in Node.js using techniques like callbacks, Promises, async/await, or control flow libraries like `async` or `q`. These help to manage the order of execution and handle dependencies between asynchronous tasks."
        },
        {
            question: "58. What is the purpose of the `url` module in Node.js?",
            answer: "The `url` module in Node.js provides functions for working with URLs. It allows you to parse URLs, extract components like hostname or query parameters, and construct or format URLs."
        },
        {
            question: "59. What is the purpose of the `os` module in Node.js?",
            answer: "The `os` module in Node.js provides functions for interacting with the operating system. It allows you to get information about the system's architecture, network interfaces, CPU usage, memory, and other system-related details."
        },
        {
            question: "60. How can you schedule tasks or cron jobs in Node.js?",
            answer: "You can schedule tasks or cron jobs in Node.js using libraries like `node-cron` or `node-schedule`. These libraries provide an easy way to define recurring tasks or schedule jobs at specific times."
        },
        {
            question: "61. What is the purpose of the `querystring` module in Node.js?",
            answer: "The `querystring` module in Node.js provides functions for working with query strings. It allows you to parse query strings, stringify objects into query strings, and perform URL encoding and decoding."
        },
        {
            question: "62. What is the purpose of the `http` module in Node.js?",
            answer: "The `http` module in Node.js provides functionality for creating HTTP servers and clients. It allows you to handle HTTP requests, send requests to other servers, and interact with HTTP headers and status codes."
        },
        {
            question: "63. What is the purpose of the `https` module in Node.js?",
            answer: "The `https` module in Node.js provides similar functionality as the `http` module but for HTTPS (HTTP over SSL/TLS) connections. It allows you to create HTTPS servers and clients, handle secure communication, and work with SSL/TLS certificates."
        },
        {
            question: "64. What is the purpose of the `zlib` module in Node.js?",
            answer: "The `zlib` module in Node.js provides compression and decompression functionality. It allows you to compress or decompress data using gzip, deflate, or other compression algorithms."
        },
        {
            question: "65. What is the purpose of the `dgram` module in Node.js?",
            answer: "The `dgram` module in Node.js provides UDP (User Datagram Protocol) functionality. It allows you to create UDP sockets, send and receive UDP datagrams, and handle UDP multicast or broadcast."
        },
        {
            question: "66. What is the purpose of the `tty` module in Node.js?",
            answer: "The `tty` module in Node.js provides functionality related to terminal input and output. It allows you to interact with the terminal, read input, handle keyboard events, and control the cursor."
        },
        {
            question: "67. Difference between Winston and morgan?",
            answer: "Use Winston for general logging needs, where you need flexible and customizable logging capabilities for different parts of your application. Use Morgan when you want to specifically log HTTP requests in an Express.js application."
        }
];
