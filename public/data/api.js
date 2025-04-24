export const apiQuestions = {
    easy: [
        {
            question: "1. What is an API?",
            answer: "API (Application Programming Interface) allows two systems to talk to each other by sending and receiving data."
        },
        {
            question: "2. What is REST API?",
            answer: "REST API uses HTTP methods to access resources via URLs. It follows stateless communication and supports CRUD operations."
        },
        {
            question: "3. What are common HTTP status codes?",
            answer: "200: OK, 201: Created, 400: Bad Request, 401: Unauthorized, 404: Not Found, 500: Server Error."
        },
        {
            question: "4. What is authentication and authorization?",
            answer: "Authentication verifies identity, Authorization defines access rights after successful authentication."
        },
        {
            question: "5. What is JSON?",
            answer: "JSON (JavaScript Object Notation) is a lightweight data format used for storing and transporting data in APIs."
        },
        {
            question: "6. What is a query parameter?",
            answer: "Query parameters are key-value pairs in URL used to send extra data with GET requests, like <code>?page=2</code>."
        },
        {
            question: "7. What is a request body?",
            answer: "Request body is used to send data to the server in POST, PUT, or PATCH requests, usually in JSON format."
        },
        {
            question: "8. How does a GET differ from POST?",
            answer: "GET is used to retrieve data, POST is used to send data to the server for creation or processing."
        },
        {
            question: "9. What is the use of headers?",
            answer: "Headers provide metadata like content type, authentication tokens, and API version information."
        },
        {
            question: "10. Difference between public and private APIs?",
            answer: "Public APIs are open to all developers, private APIs are restricted to internal or authorized users only."
        }
    ],
    intermediate: [
        {
            question: "11. Difference between PUT and PATCH?",
            answer: "PUT replaces the entire resource, while PATCH updates only specific fields in the resource."
        },
        {
            question: "12. What is CORS?",
            answer: "CORS (Cross-Origin Resource Sharing) controls access to resources from different domains to enhance security."
        },
        {
            question: "13. What is a middleware in API?",
            answer: "Middleware functions run before the final request handler, useful for authentication, logging, etc."
        },
        {
            question: "14. What is rate limiting?",
            answer: "Rate limiting controls how many requests a client can make in a specific time to avoid overloading the server."
        },
        {
            question: "15. What is JWT?",
            answer: "JWT (JSON Web Token) is a secure way to transmit information between parties as a JSON object, commonly used for authentication."
        },
        {
            question: "16. What is OAuth2?",
            answer: "OAuth2 is an authorization framework that allows third-party applications to access user data without exposing credentials."
        },
        {
            question: "17. What is the difference between REST and GraphQL?",
            answer: "REST uses fixed endpoints and multiple calls, GraphQL uses a single endpoint and lets clients request specific data they need."
        },
        {
            question: "18. How to secure an API?",
            answer: "Use HTTPS, authentication (JWT/OAuth), input validation, rate limiting, API keys, and CORS policies."
        },
        {
            question: "19. What is throttling in APIs?",
            answer: "Throttling limits the number of requests a user can make to prevent abuse and manage traffic efficiently."
        },
        {
            question: "20. What is the difference between synchronous and asynchronous APIs?",
            answer: "Synchronous APIs wait for a response before continuing. Asynchronous APIs allow other tasks while waiting for a response."
        },
        {
            question: "21. What do you use for HTTP logging in APIs?",
            answer: "For HTTP logging in APIs, popular tools include middleware like <code>morgan</code> in Node.js or logging libraries like <code>winston</code> for logging request and response details."
        },
        {
            question: "22. What is HATEOAS in REST API?",
            answer: "HATEOAS (Hypermedia as the Engine of Application State) provides dynamic links with responses to guide client interactions."
        }
    ],
    advanced: [
        {
            question: "23. How does API gateway work?",
            answer: "An API Gateway acts as a reverse proxy, routing client requests to the right services and handling cross-cutting concerns like logging, auth, and throttling."
        },
        {
            question: "24. What is an idempotent method?",
            answer: "An idempotent HTTP method (like GET, PUT, DELETE) returns the same result even if called multiple times."
        },
        {
            question: "25. Why do we need different HTTP methods if we can use POST for everything?",
            answer: "Different HTTP methods (GET, POST, PUT, DELETE) follow RESTful principles. They help organize and standardize APIs, improving clarity, security, and maintainability."
        },
        {
            question: "26. What is the difference between request params, query, and body in an API?",
            answer: "Params are used in the URL (e.g., /users/{id}), query parameters are appended to the URL (e.g., <code>?search=abc</code>), and body contains data sent with the HTTP request."
        },
        {
            question: "27. How do you update data from a third-party API in your project?",
            answer: "To update data from a third-party API, you first call their endpoint using HTTP requests (GET/POST/PUT) and then update your database with the response data."
        },
        {
            question: "28. How to reduce API response time?",
            answer: "Optimize database queries, use caching, compress data, reduce payload size, use load balancing, and implement pagination for large datasets."
        },
        {
            question: "29. What are the common strategies for handling third-party API errors?",
            answer: "Implement retries, fallback mechanisms, logging, and graceful error handling. Use circuit breakers to prevent cascading failures."
        },
        {
            question: "30. How to handle rate limiting in an API?",
            answer: "Implement rate limiting by setting request limits per minute/hour for each user or IP. Return appropriate 429 Too Many Requests status when the limit is exceeded."
        },
        {
            question: "31. What is the importance of API versioning?",
            answer: "API versioning ensures backward compatibility by allowing developers to make updates without breaking existing clients. Methods include URL versioning (e.g., /api/v1) or header versioning."
        },
        {
            question: "32. What is the role of caching in API performance?",
            answer: "Caching reduces response time and load on the server by storing frequently accessed data. Common strategies include in-memory caching (Redis) or CDN caching."
        },
        {
            question: "33. What is the role of API documentation?",
            answer: "API documentation provides developers with detailed information on how to interact with the API. It includes endpoints, request parameters, expected responses, and error codes."
        },
        {
            question: "34. How do you handle pagination in APIs?",
            answer: "Pagination is handled by providing parameters like 'limit' and 'offset' or 'page' in the query. This allows the client to request smaller chunks of data, reducing server load."
        },
        {
            question: "35. How do you ensure API reliability and uptime?",
            answer: "API reliability is ensured by using redundant infrastructure, load balancing, automatic failover, monitoring tools, and proper error handling."
        }
    ]
};