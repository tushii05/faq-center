export const architectureQuestions = [

    {
        question: "1. What is Monolithic Architecture?",
        answer: "Monolithic Architecture is a traditional model where all application components (UI, business logic, and data access) are combined into a single program and run as a single service. It's simpler to develop initially but becomes difficult to scale and maintain as the application grows."
    },
    {
        question: "2. What is Microservices Architecture?",
        answer: "Microservices Architecture is a modern design approach where an application is structured as a collection of loosely coupled, independently deployable services. Each service handles a specific business function and can be developed, deployed, and scaled independently."
    },
    {
        question: "3. What are the key differences between Monolithic and Microservices Architecture?",
        answer: "Key differences include: \n1. Monolithic uses a single codebase and deployment, while microservices use multiple independent services. \n2. Monolithic apps are tightly coupled, while microservices are loosely coupled. \n3. Scaling a monolith involves scaling the whole app; microservices allow independent scaling. \n4. Monoliths typically use a shared database, whereas microservices often use separate databases."
    },
    {
        question: "4. What are the benefits of Monolithic Architecture?",
        answer: "Benefits include: \n1. Easier to start with and deploy. \n2. Simpler development for small teams. \n3. Less operational overhead. \n4. Unified logging and debugging."
    },
    {
        question: "5. What are the benefits of Microservices Architecture?",
        answer: "Benefits include: \n1. Independent scaling and deployment. \n2. Better fault isolation. \n3. Flexibility to use different tech stacks. \n4. Easier for large teams to work in parallel on different services."
    },
    {
        question: "6. What are some important components or features of Microservices Architecture?",
        answer: "Important features include: \n1. API Gateway for routing requests. \n2. Service discovery tools (e.g., Consul, Eureka). \n3. Independent databases. \n4. Containerization (e.g., Docker). \n5. CI/CD pipelines. \n6. Asynchronous messaging systems like RabbitMQ or Kafka. \n7. Circuit breakers for resilience (e.g., Hystrix)."
    },
    {
        question: "7. In what scenarios should Monolithic Architecture be preferred?",
        answer: "Monolithic Architecture is preferred for small or simple applications, early-stage startups, projects with small teams, and when rapid prototyping is needed without the complexity of managing multiple services."
    },
    {
        question: "8. In what scenarios should Microservices Architecture be preferred?",
        answer: "Microservices should be used for large-scale applications with complex domains, when different parts of the application need to scale independently, when teams work in parallel, or when there's a need to use different technologies for different components."
    },
    {
        question: "9. What are some common interview questions about Monolithic and Microservices Architecture?",
        answer: "1. What are the pros and cons of monolithic architecture? \n2. What challenges have you faced while working with microservices? \n3. How does service communication work in microservices? \n4. How do you handle deployment and CI/CD in a microservice setup? \n5. What is service discovery and why is it important? \n6. How do you manage databases in microservices?"
    }
]