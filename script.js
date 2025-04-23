// import { nodeQuestions } from './data/node.js';
// import { javascriptQuestions } from './data/javascript.js';
// import { mongoDbQuestions } from './data/mongoDB.js'

 const javascriptQuestions = [
    {
        question: "1. What is JavaScript?",
        answer: "JavaScript is a high-level, dynamic, and interpreted programming language primarily used for client-side scripting on the web."
    },
    {
        question: "2. What are the basic data types in JavaScript?",
        answer: "The basic data types in JavaScript are Number, String, Boolean, Null, and Undefined."
    },
    {
        question: "3. What is a variable in JavaScript?",
        answer: "A variable is a container that holds a value. Example: let x = 5;"
    },
    {
        question: "4. What is the difference between let, const, and var?",
        answer: "let and const are block-scoped, while var is function-scoped. Example: var a = 1; let b = 2; const c = 3;"
    },
    {
        question: "5. What is a function in JavaScript?",
        answer: "A function is a block of code that can be executed multiple times. Example: function greet() { console.log('Hello!'); }"
    },
    {
        question: "6. What is the difference between == and ===?",
        answer: "== checks for value equality with type coercion, while === checks for both value and type equality. Example: 1 == '1' // true, 1 === '1' // false"
    },
    {
        question: "7. What is the purpose of the typeof operator?",
        answer: "The typeof operator returns the type of a variable or expression. Example: typeof 'Hello' // 'string'"
    },
    {
        question: "8. What is the purpose of the instanceof operator?",
        answer: "The instanceof operator checks if an object is an instance of a particular constructor. Example: obj instanceof Object"
    },
    {
        question: "9. What is the purpose of the delete operator?",
        answer: "The delete operator removes a property from an object. Example: delete obj.property;"
    },
    {
        question: "10. What is the purpose of the in operator?",
        answer: "The in operator checks if a property exists in an object. Example: 'property' in obj"
    },
    {
        question: "11. What is the purpose of the for...in loop?",
        answer: "The for...in loop iterates over the properties of an object. Example: for (let key in obj) { console.log(key); }"
    },
    {
        question: "12. What is the purpose of the for...of loop?",
        answer: "The for...of loop iterates over the values of an iterable object. Example: for (let value of array) { console.log(value); }"
    },
    {
        question: "13. What is the purpose of the while loop?",
        answer: "The while loop executes a block of code as long as a condition is true. Example: while (i < 5) { i++; }"
    },
    {
        question: "14. What is the purpose of the do...while loop?",
        answer: "The do...while loop executes a block of code once and then repeats the loop as long as a condition is true. Example: do { i++; } while (i < 5);"
    },
    {
        question: "15. What is the purpose of the if statement?",
        answer: "The if statement executes a block of code if a condition is true. Example: if (x > 10) { console.log('x is greater than 10'); }"
    },
    {
        question: "16. What is the purpose of the if...else statement?",
        answer: "The if...else statement executes a block of code if a condition is true and another block if false. Example: if (x > 10) { console.log('x is greater than 10'); } else { console.log('x is 10 or less'); }"
    },
    {
        question: "17. What is the purpose of the switch statement?",
        answer: "The switch statement executes a block of code based on the value of a variable or expression. Example: switch (day) { case 1: console.log('Monday'); break; }"
    },
    {
        question: "18. What is the purpose of the break statement?",
        answer: "The break statement exits a loop or switch statement. Example: for (let i = 0; i < 10; i++) { if (i === 5) break; }"
    },

    {
        question: "19. What is the purpose of the continue statement?",
        answer: "The continue statement skips the rest of the code in a loop and moves on to the next iteration. Example: for (let i = 0; i < 10; i++) { if (i % 2 === 0) continue; console.log(i); }"
    },
    {
        question: "20. What is the purpose of the return statement?",
        answer: "The return statement exits a function and returns a value. Example: function add(a, b) { return a + b; }"
    },
    {
        question: "21. What is a function in JavaScript?",
        answer: "A function is a block of code that can be executed multiple times. Example: function greet() { console.log('Hello!'); }"
    },
    {
        question: "22. What is the difference between a function declaration and a function expression?",
        answer: "A function declaration defines a function with a name, while a function expression defines a function as part of an expression. Example: function declared() { } // declaration; const expressed = function() { } // expression;"
    },
    {
        question: "23. What is the purpose of the function keyword?",
        answer: "The function keyword is used to define a function. Example: function myFunction() { }"
    },
    {
        question: "24. What is the purpose of the return keyword?",
        answer: "The return keyword exits a function and returns a value. Example: function square(x) { return x * x; }"
    },
    {
        question: "25. What is the purpose of the this keyword?",
        answer: "The this keyword refers to the current object in context. Example: const obj = { name: 'Alice', greet: function() { console.log(this.name); } }; obj.greet();"
    },
    {
        question: "26. What is the purpose of the arguments object?",
        answer: "The arguments object is an array-like object that contains the arguments passed to a function. Example: function showArgs() { console.log(arguments); }"
    },
    {
        question: "27. What is the purpose of the call() method?",
        answer: "The call() method calls a function with a specified this value and arguments. Example: function greet() { console.log(this.name); } greet.call({ name: 'Bob' });"
    },
    {
        question: "28. What is the purpose of the apply() method?",
        answer: "The apply() method calls a function with a specified this value and an array of arguments. Example: function sum(a, b) { return a + b; } sum.apply(null, [1, 2]);"
    },
    {
        question: "29. What is the purpose of the bind() method?",
        answer: "The bind() method creates a new function that has the same behavior as the original function, but with a specified this value. Example: const boundGreet = greet.bind(obj); boundGreet();"
    },
    {
        question: "30. What is the purpose of a closure?",
        answer: "A closure is a function that has access to its own scope and the scope of its outer functions. Example: function outer() { let x = 10; return function inner() { console.log(x); }; }"
    },
    {
        question: "31. What is the purpose of the scope chain?",
        answer: "The scope chain is a list of scopes that a function has access to, allowing it to reference variables from its own scope and any outer scopes. Example: function outer() { let x = 10; function inner() { console.log(x); } inner(); }"
    },
    {
        question: "32. What is the purpose of the global object?",
        answer: "The global object is the top-level object in the scope chain, providing access to global variables and functions. Example: In a browser, the global object is window."
    },
    {
        question: "33. What is the purpose of the window object?",
        answer: "The window object represents the browser window and is the global object in a web browser. Example: window.alert('Hello!');"
    },
    {
        question: "34. What is the purpose of the globalThis object?",
        answer: "The globalThis object provides a standard way to access the global object across different environments. Example: console.log(globalThis);"
    },
    {
        question: "35. What is the purpose of the setTimeout function?",
        answer: "The setTimeout function calls a function or executes a code snippet after a specified delay. Example: setTimeout(() => { console.log('Executed after 1 second'); }, 1000);"
    },

    {
        question: "36. What is the purpose of the setInterval function?",
        answer: "The setInterval function repeatedly calls a function or executes a code snippet with a fixed time delay between each call. Example: setInterval(() => { console.log('Executed every 2 seconds'); }, 2000);"
    },
    {
        question: "37. What is the purpose of the clearTimeout function?",
        answer: "The clearTimeout function cancels a timeout previously established by setTimeout. Example: const timeoutId = setTimeout(() => { console.log('This won\'t run'); }, 1000); clearTimeout(timeoutId);"
    },
    {
        question: "38. What is the purpose of the clearInterval function?",
        answer: "The clearInterval function cancels a timed, repeating action set by setInterval. Example: const intervalId = setInterval(() => { console.log('This won\'t run anymore'); }, 1000); clearInterval(intervalId);"
    },
    {
        question: "39. What is the purpose of the Promise object?",
        answer: "The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Example: const myPromise = new Promise((resolve, reject) => { /* async code */ });"
    },
    {
        question: "40. What are async functions in JavaScript?",
        answer: "Async functions are a way to work with asynchronous code using the async and await keywords, allowing for a more synchronous style of writing asynchronous code. Example: async function fetchData() { let response = await fetch(url); }"
    },
    {
        question: "41. What is an object in JavaScript?",
        answer: "An object is a collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type. Example: let obj = { name: 'Alice', age: 25 };"
    },
    {
        question: "42. How do you create an object in JavaScript?",
        answer: "You can create an object using object literals, the new Object() syntax, or constructor functions. Example: let obj = new Object();"
    },
    {
        question: "43. What is an array in JavaScript?",
        answer: "An array is a special type of object used to store multiple values in a single variable. Example: let arr = [1, 2, 3];"
    },
    {
        question: "44. How do you access an object property?",
        answer: "You can access an object property using dot notation or bracket notation. Example: obj.name; // or obj['name']"
    },
    {
        question: "45. How do you add a property to an object?",
        answer: "You can add a property to an object using dot notation or bracket notation. Example: obj.city = 'New York';"
    },
    {
        question: "46. How do you remove a property from an object?",
        answer: "You can remove a property from an object using the delete operator. Example: delete obj.age;"
    },
    {
        question: "47. How do you iterate over an array?",
        answer: "You can iterate over an array using a for loop, forEach method, or for...of loop. Example: arr.forEach(item => console.log(item));"
    },
    {
        question: "48. What is the purpose of the map() method?",
        answer: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. Example: let doubled = arr.map(x => x * 2);"
    },
    {
        question: "49. What is the purpose of the filter() method?",
        answer: "The filter() method creates a new array with all elements that pass the test implemented by the provided function. Example: let evens = arr.filter(x => x % 2 === 0);"
    },
    {
        question: "50. What is the purpose of the reduce() method?",
        answer: "The reduce() method executes a reducer function on each element of the array, resulting in a single output value. Example: let sum = arr.reduce((acc, curr) => acc + curr, 0);"
    },
    {
        question: "51. What is the purpose of the find() method?",
        answer: "The find() method returns the value of the first element in the array that satisfies the provided testing function. Example: let found = arr.find(x => x > 2);"
    },
    {
        question: "52. What is the purpose of the some() method?",
        answer: "The some() method tests whether at least one element in the array passes the test implemented by the provided function. Example: let hasEven = arr.some(x => x % 2 === 0);"
    },
    {
        question: "53. What is the purpose of the every() method?",
        answer: "The every() method tests whether all elements in the array pass the test implemented by the provided function. Example: let allPositive = arr.every(x => x > 0);"
    },
    {
        question: "54. How do you sort an array?",
        answer: "You can sort an array using the sort() method, which sorts the elements of an array in place and returns the sorted array. Example: arr.sort((a, b) => a - b);"
    },
    {
        question: "55. How do you reverse an array?",
        answer: "You can reverse an array using the reverse() method, which reverses the elements of an array in place. Example: arr.reverse();"
    },
    {
        question: "56. How do you concatenate arrays?",
        answer: "You can concatenate arrays using the concat() method or the spread operator. Example: let newArr = arr1.concat(arr2); // or let newArr = [...arr1, ...arr2];"
    },
    {
        question: "57. How do you slice an array?",
        answer: "You can slice an array using the slice() method, which returns a shallow copy of a portion of an array into a new array object. Example: let sliced = arr.slice(1, 3);"
    },
    {
        question: "58. How do you splice an array?",
        answer: "You can splice an array using the splice() method, which changes the contents of an array by removing or replacing existing elements and/or adding new elements. Example: arr.splice(1, 1, 'new');"
    },
    {
        question: "59. What is the purpose of the join() method?",
        answer: "The join() method joins all elements of an array into a string, separated by a specified separator. Example: let str = arr.join(', ');"
    },
    {
        question: "60. How do you check if a variable is an array?",
        answer: "You can check if a variable is an array using the Array.isArray() method. Example: Array.isArray(arr);"
    },
    {
        question: "61. What is a prototype in JavaScript?",
        answer: "A prototype is an object from which other objects inherit properties. Every JavaScript object has a prototype, and it is used to implement inheritance."
    },
    {
        question: "62. What is the purpose of the Object.create() method?",
        answer: "The Object.create() method creates a new object with the specified prototype object and properties. Example: let obj = Object.create(proto);"
    },
    {
        question: "63. What is the purpose of the Object.assign() method?",
        answer: "The Object.assign() method copies the values of all enumerable properties from one or more source objects to a target object. Example: Object.assign(target, source1, source2);"
    },
    {
        question: "64. What is the purpose of the Object.keys() method?",
        answer: "The Object.keys() method returns an array of a given object's own enumerable property names. Example: Object.keys(obj);"
    },
    {
        question: "65. What is the purpose of the Object.values() method?",
        answer: "The Object.values() method returns an array of a given object's own enumerable property values. Example: Object.values(obj);"
    },
    {
        question: "66. What is the purpose of the Object.entries() method?",
        answer: "The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. Example: Object.entries(obj);"
    },
    {
        question: "67. What is the purpose of the JSON.stringify() method?",
        answer: "The JSON.stringify() method converts a JavaScript object or value to a JSON string. Example: JSON.stringify(obj);"
    },
    {
        question: "68. What is the purpose of the JSON.parse() method?",
        answer: "The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. Example: JSON.parse(jsonString);"
    },
    {
        question: "69. What is the purpose of the set and get keywords in JavaScript?",
        answer: "The set and get keywords are used to define setter and getter methods for object properties, allowing for custom behavior when properties are accessed or modified. Example: get value() { return this._value; }"
    },
    {
        question: "70. What is the purpose of the Symbol type?",
        answer: "The Symbol type is a unique and immutable primitive value that can be used as the key of an object property. Example: const sym = Symbol('description');"
    },
    {
        question: "71. What is the purpose of the WeakMap object?",
        answer: "The WeakMap object is a collection of key-value pairs where the keys are objects and the values can be any value. The keys are weakly referenced, meaning they can be garbage collected if there are no other references to them. Example: let weakMap = new WeakMap();"
    },
    {
        question: "72. What is the purpose of the WeakSet object?",
        answer: "The WeakSet object is a collection of objects, where each object is held weakly, allowing for garbage collection if there are no other references. Example: let weakSet = new WeakSet();"
    },
    {
        question: "73. What is the purpose of the Promise.all() method?",
        answer: "The Promise.all() method takes an iterable of promises and returns a single Promise that resolves when all of the promises in the iterable have resolved or when the iterable contains no promises. Example: Promise.all([promise1, promise2]).then(values => { /* handle values */ });"
    },
    {
        question: "74. What is the purpose of the Promise.race() method?",
        answer: "The Promise.race() method returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with its value or reason. Example: Promise.race([promise1, promise2]).then(value => { /* handle value */ });"
    },
    {
        question: "75. What is the purpose of the async/await syntax?",
        answer: "The async/await syntax allows you to write asynchronous code in a more synchronous style, making it easier to read and maintain. Example: async function fetchData() { let response = await fetch(url); }"
    },
    {
        question: "76. What is the purpose of the try...catch statement?",
        answer: "The try...catch statement allows you to test a block of code for errors and handle them gracefully. Example: try { /* code */ } catch (error) { console.error(error); }"
    },
    {
        question: "77. What is the purpose of the finally block?",
        answer: "The finally block is used to execute code after the try and catch blocks, regardless of whether an error was thrown or not. Example: try { /* code */ } catch (error) { /* handle error */ } finally { /* cleanup code */ }"
    },
    {
        question: "78. What is the purpose of the setImmediate() function?",
        answer: "The setImmediate() function executes a single callback after the current event loop cycle, allowing you to defer execution of a function. Example: setImmediate(() => { console.log('Executed immediately'); });"
    },
    {
        question: "79. What is the purpose of the requestAnimationFrame() method?",
        answer: "The requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. Example: requestAnimationFrame(() => { /* animation code */ });"
    },
    {
        question: "80. What is the purpose of the fetch() API?",
        answer: "The fetch() API is used to make network requests to servers. It returns a promise that resolves to the response of the request. Example: fetch(url).then(response => response.json()).then(data => console.log(data));"
    },
    {
        question: "81. What is the Document Object Model (DOM)?",
        answer: "The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing programming languages to manipulate the content, structure, and style of web pages."
    },
    {
        question: "82. How do you select an element by its ID?",
        answer: "You can select an element by its ID using the document.getElementById() method. Example: let element = document.getElementById('myId');"
    },
    {
        question: "83. How do you select elements by class name?",
        answer: "You can select elements by class name using the document.getElementsByClassName() method. Example: let elements = document.getElementsByClassName('myClass');"
    },
    {
        question: "84. How do you select elements by tag name?",
        answer: "You can select elements by tag name using the document.getElementsByTagName() method. Example: let elements = document.getElementsByTagName('div');"
    },
    {
        question: "85. How do you select elements using a CSS selector?",
        answer: "You can select elements using a CSS selector with the document.querySelector() and document.querySelectorAll() methods. Example: let element = document.querySelector('.myClass');"
    },
    {
        question: "86. How do you change the text content of an element?",
        answer: "You can change the text content of an element using the textContent property. Example: element.textContent = 'New Text';"
    },
    {
        question: "87. How do you change the HTML content of an element?",
        answer: "You can change the HTML content of an element using the innerHTML property. Example: element.innerHTML = '<strong>Bold Text</strong>';"
    },
    {
        question: "88. How do you add a class to an element?",
        answer: "You can add a class to an element using the classList.add() method. Example: element.classList.add('newClass');"
    },
    {
        question: "89. How do you remove a class from an element?",
        answer: "You can remove a class from an element using the classList.remove() method. Example: element.classList.remove('oldClass');"
    },
    {
        question: "90. How do you toggle a class on an element?",
        answer: "You can toggle a class on an element using the classList.toggle() method. Example: element.classList.toggle('active');"
    },
    {
        question: "91. How do you add an event listener to an element?",
        answer: "You can add an event listener to an element using the addEventListener() method. Example: element.addEventListener('click', function() { console.log('Clicked!'); });"
    },
    {
        question: "92. How do you remove an event listener from an element?",
        answer: "You can remove an event listener from an element using the removeEventListener() method. Example: element.removeEventListener('click', handlerFunction);"
    },
    {
        question: "93. How do you create a new element?",
        answer: "You can create a new element using the document.createElement() method. Example: let newElement = document.createElement('div');"
    },
    {
        question: "94. How do you append an element to the DOM?",
        answer: "You can append an element to the DOM using the appendChild() method. Example: document.body.appendChild(newElement);"
    },
    {
        question: "95. How do you remove an element from the DOM?",
        answer: "You can remove an element from the DOM using the remove() method. Example: element.remove();"
    },
    {
        question: "96. How do you clone an element?",
        answer: "You can clone an element using the cloneNode() method. Example: let clone = element.cloneNode(true);"
    },
    {
        question: "97. How do you set an attribute on an element?",
        answer: "You can set an attribute on an element using the setAttribute() method. Example: element.setAttribute('data-id', '123');"
    },
    {
        question: "98. How do you get an attribute from an element?",
        answer: "You can get an attribute from an element using the getAttribute() method. Example: let id = element.getAttribute('data-id');"
    },
    {
        question: "99. How do you change the style of an element?",
        answer: "You can change the style of an element using the style property. Example: element.style.color = 'red';"
    },
    {
        question: "100. How do you scroll to an element?",
        answer: "You can scroll to an element using the scrollIntoView() method. Example: element.scrollIntoView();"
    }
]

 const mongoDbQuestions = [
    {
        question: "1. What is MongoDB?",
        answer: "MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents. Example: { 'name': 'John', 'age': 30 }"
    },
    {
        question: "2. What are the main features of MongoDB?",
        answer: "Features include document-oriented storage, dynamic schemas, and horizontal scalability. Example: db.collection.insert({})"
    },
    {
        question: "3. What is a document in MongoDB?",
        answer: "A document is a basic unit of data in MongoDB, represented as a BSON object. Example: { 'key': 'value' }"
    },
    {
        question: "4. What is a collection in MongoDB?",
        answer: "A collection is a group of MongoDB documents, similar to a table in relational databases. Example: db.collectionName.find()"
    },
    {
        question: "5. What is a database in MongoDB?",
        answer: "A database is a container for collections, allowing for data organization. Example: use myDatabase"
    },
    {
        question: "6. What is BSON?",
        answer: "BSON is a binary representation of JSON-like documents, supporting additional data types. Example: { 'date': new Date() }"
    },
    {
        question: "7. How does MongoDB handle data consistency?",
        answer: "MongoDB uses eventual consistency and supports multi-document transactions. Example: session.startTransaction()"
    },
    {
        question: "8. What is a primary key in MongoDB?",
        answer: "The primary key is the _id field, which uniquely identifies each document. Example: { '_id': ObjectId('...') }"
    },
    {
        question: "9. What is an index in MongoDB?",
        answer: "An index improves the speed of data retrieval operations on a collection. Example: db.collection.createIndex({ 'field': 1 })"
    },
    {
        question: "10. What is a replica set in MongoDB?",
        answer: "A replica set is a group of MongoDB servers that maintain the same data set for redundancy. Example: rs.add('hostname:port')"
    },
    {
        question: "11. What is sharding in MongoDB?",
        answer: "Sharding distributes data across multiple servers to ensure horizontal scalability. Example: sh.shardCollection('db.collection', { 'shardKey': 1 })"
    },
    {
        question: "12. What is the aggregation framework in MongoDB?",
        answer: "The aggregation framework processes data and performs operations like filtering and grouping. Example: db.collection.aggregate([{ $group: { _id: '$field' } }])"
    },
    {
        question: "13. What is a MongoDB query?",
        answer: "A MongoDB query retrieves data from a collection using specific criteria. Example: db.collection.find({ 'field': 'value' })"
    },
    {
        question: "14. How do you insert a document in MongoDB?",
        answer: "You can insert a document using insertOne() or insertMany(). Example: db.collection.insertOne({ 'name': 'Alice' })"
    },
    {
        question: "15. How do you update a document in MongoDB?",
        answer: "Update a document using updateOne() or updateMany(). Example: db.collection.updateOne({ 'name': 'Alice' }, { $set: { 'age': 25 } })"
    },
    {
        question: "16. What is the difference between find() and findOne()?",
        answer: "find() returns multiple documents, while findOne() returns a single document. Example: db.collection.find({})"
    },
    {
        question: "17. What is a query operator in MongoDB?",
        answer: "Query operators specify conditions in queries, like $gt or $in. Example: db.collection.find({ 'age': { $gt: 20 } })"
    },
    {
        question: "18. What is a projection in MongoDB?",
        answer: "Projection selects specific fields to return in query results. Example: db.collection.find({}, { 'name': 1 })"
    },
    {
        question: "19. What is the purpose of the aggregate() method?",
        answer: "The aggregate() method performs aggregation operations on a collection. Example: db.collection.aggregate([{ $match: { 'status': 'A' } }])"
    },
    {
        question: "20. What is the difference between upsert and update?",
        answer: "upsert inserts a document if it doesn't exist, while update modifies existing documents. Example: db.collection.update({ 'name': 'Alice' }, { $set: { 'age': 30 } }, { upsert: true })"
    },
    {
        question: "21. What is a schema in MongoDB?",
        answer: "A schema defines the structure of documents in a collection, though MongoDB is schema-less. Example: const userSchema = new Schema({ name: String, age: Number });"
    },
    {
        question: "22. What is Mongoose?",
        answer: "Mongoose is an ODM library for MongoDB and Node.js, providing schema-based data modeling. Example: const mongoose = require('mongoose');"
    },
    {
        question: "23. How do you create a new collection in MongoDB?",
        answer: "Create a new collection using db.createCollection() or by inserting a document. Example: db.newCollection.insert({})"
    },
    {
        question: "24. What is the purpose of the drop() method?",
        answer: "The drop() method removes a collection or database from MongoDB. Example: db.collection.drop()"
    },
    {
        question: "25. What is a MongoDB driver?",
        answer: "A MongoDB driver allows applications to connect and interact with a MongoDB database. Example: const MongoClient = require('mongodb').MongoClient;"
    },
    {
        question: "26. How do you connect to a MongoDB database?",
        answer: "Connect using the MongoDB URI with the driver. Example: MongoClient.connect('mongodb://localhost:27017/mydb')"
    },
    {
        question: "27. What is the findAndModify() method?",
        answer: "The findAndModify() method atomically modifies and returns a document. Example: db.collection.findAndModify({ query: { name: 'Alice' }, update: { $set: { age: 26 } } })"
    },
    {
        question: "28. What is a cursor in MongoDB?",
        answer: "A cursor is a pointer to the result set of a query, allowing iteration over the documents. Example: const cursor = db.collection.find();"
    },
    {
        question: "29. How do you iterate over a cursor in MongoDB?",
        answer: "Use the forEach() method to iterate over cursor results. Example: cursor.forEach(doc => console.log(doc));"
    },
    {
        question: "30. What is the countDocuments() method?",
        answer: "The countDocuments() method counts the number of documents in a collection that match a query. Example: db.collection.countDocuments({ age: { $gt: 20 } })"
    },
    {
        question: "31. What is the distinct() method?",
        answer: "The distinct() method returns an array of distinct values for a specified field. Example: db.collection.distinct('fieldName')"
    },
    {
        question: "32. What is a MongoDB aggregation pipeline?",
        answer: "An aggregation pipeline processes data through a series of stages, transforming the data as it passes through. Example: db.collection.aggregate([{ $match: { status: 'A' } }])"
    },
    {
        question: "33. What is the $match stage in aggregation?",
        answer: "The $match stage filters documents to pass only those that match the specified condition. Example: { $match: { age: { $gte: 18 } } }"
    },
    {
        question: "34. What is the $group stage in aggregation?",
        answer: "The $group stage groups documents by a specified identifier and performs aggregation operations. Example: { $group: { _id: '$age', total: { $sum: 1 } } }"
    },
    {
        question: "35. What is the $sort stage in aggregation?",
        answer: "The $sort stage sorts the documents in the pipeline by specified fields. Example: { $sort: { age: 1 } }"
    },
    {
        question: "36. What is the $project stage in aggregation?",
        answer: "The $project stage reshapes each document in the stream, adding or removing fields. Example: { $project: { name: 1, age: 1 } }"
    },
    {
        question: "37. What is the $limit stage in aggregation?",
        answer: "The $limit stage restricts the number of documents passed to the next stage. Example: { $limit: 5 }"
    },
    {
        question: "38. What is the $skip stage in aggregation?",
        answer: "The $skip stage skips a specified number of documents in the pipeline. Example: { $skip: 10 }"
    },
    {
        question: "39. What is the $unwind stage in aggregation?",
        answer: "The $unwind stage deconstructs an array field from the input documents to output a document for each element. Example: { $unwind: '$arrayField' }"
    },
    {
        question: "40. What is the $lookup stage in aggregation?",
        answer: "The $lookup stage performs a left outer join to an unsharded collection in the same database. Example: { $lookup: { from: 'otherCollection', localField: 'field', foreignField: 'field', as: 'joinedData' } }"
    },
    {
        question: "41. What is the $merge stage in aggregation?",
        answer: "The $merge stage writes the results of the aggregation pipeline to a specified collection. Example: { $merge: { into: 'outputCollection' } }"
    },
    {
        question: "42. What is the $out stage in aggregation?",
        answer: "The $out stage writes the results of the aggregation pipeline to a new collection. Example: { $out: 'outputCollection' }"
    },
    {
        question: "43. What is a MongoDB transaction?",
        answer: "A transaction allows multiple operations to be executed as a single atomic operation. Example: session.startTransaction();"
    },
    {
        question: "44. How do you commit a transaction in MongoDB?",
        answer: "Use the commitTransaction() method to commit a transaction. Example: session.commitTransaction();"
    },
    {
        question: "45. How do you abort a transaction in MongoDB?",
        answer: "Use the abortTransaction() method to abort a transaction. Example: session.abortTransaction();"
    },
    {
        question: "46. What is a MongoDB shard?",
        answer: "A shard is a horizontal partition of data in a MongoDB cluster, allowing for scalability. Example: sh.shardCollection('db.collection', { 'shardKey': 1 })"
    },
    {
        question: "47. What is a MongoDB config server?",
        answer: "A config server stores metadata and configuration settings for a sharded cluster. Example: sh.addShard('shard1')"
    },
    {
        question: "48. What is a MongoDB balancer?",
        answer: "The balancer distributes data evenly across shards in a sharded cluster. Example: sh.startBalancer()"
    },
    {
        question: "49. What is a MongoDB aggregation cursor?",
        answer: "An aggregation cursor is a pointer to the results of an aggregation operation, allowing iteration. Example: const cursor = db.collection.aggregate([{ $group: { _id: '$field' } }]);"
    },
    {
        question: "50. What is the explain() method?",
        answer: "The explain() method provides information on how MongoDB executes a query. Example: db.collection.find({}).explain()"
    },
    {
        question: "51. What is a MongoDB profiler?",
        answer: "A profiler tracks performance and execution statistics for database operations. Example: db.setProfilingLevel(2)"
    },
    {
        question: "52. How do you enable profiling in MongoDB?",
        answer: "Enable profiling by setting the profiling level in the database. Example: db.setProfilingLevel(1, { slowms: 100 })"
    },
    {
        question: "53. What is a MongoDB backup?",
        answer: "A backup is a copy of the database data, used for recovery in case of data loss. Example: mongodump --db mydb"
    },
    {
        question: "54. How do you restore a MongoDB backup?",
        answer: "Restore a backup using the mongorestore command. Example: mongorestore --db mydb dump/mydb"
    },
    {
        question: "55. What is a MongoDB user?",
        answer: "A user is an account that can access and perform operations on a MongoDB database. Example: db.createUser ({ user: 'user', pwd: 'password', roles: ['readWrite'] })"
    },
    {
        question: "56. How do you create a user in MongoDB?",
        answer: "Create a user with specific roles and permissions. Example: db.createUser ({ user: 'admin', pwd: 'admin123', roles: ['dbAdmin'] })"
    },
    {
        question: "57. What is a MongoDB role?",
        answer: "A role defines a set of privileges that a user can perform on a database. Example: { role: 'readWrite', db: 'mydb' }"
    },
    {
        question: "58. How do you grant a role to a user in MongoDB?",
        answer: "Grant a role to a user using db.grantRolesToUser ('user', [{ role: 'readWrite', db: 'mydb' }])"
    },
    {
        question: "59. What is a MongoDB database user authentication?",
        answer: "Authentication verifies the identity of a user attempting to access the database. Example: db.auth('user', 'password')"
    },
    {
        question: "60. What is a MongoDB connection string?",
        answer: "A connection string is a URI that specifies the details needed to connect to a MongoDB database. Example: mongodb://username:password@host:port/dbname"
    },
    {
        question: "61. What is the MongoClient class?",
        answer: "The MongoClient class is used to connect to a MongoDB server and manage database operations. Example: const client = new MongoClient(uri);"
    },
    {
        question: "62. How do you close a MongoDB connection?",
        answer: "Close a connection using the close() method on the client instance. Example: client.close();"
    },
    {
        question: "63. What is a MongoDB aggregation framework?",
        answer: "The aggregation framework processes data and performs operations like filtering and grouping. Example: db.collection.aggregate([{ $group: { _id: '$field' } }])"
    },
    {
        question: "64. What is the bulkWrite() method?",
        answer: "The bulkWrite() method performs multiple write operations in bulk for efficiency. Example: db.collection.bulkWrite([{ insertOne: { document: { name: 'Alice' } } }])"
    },
    {
        question: "65. What is the updateMany() method?",
        answer: "The updateMany() method updates multiple documents that match the specified criteria. Example: db.collection.updateMany({ age: { $gt: 20 } }, { $set: { status: 'adult' } })"
    },
    {
        question: "66. What is the deleteMany() method?",
        answer: "The deleteMany() method removes multiple documents that match the specified criteria. Example: db.collection.deleteMany({ age: { $lt: 18 } })"
    },
    {
        question: "67. What is the findOneAndUpdate() method?",
        answer: "The findOneAndUpdate() method finds a document and updates it in a single operation. Example: db.collection.findOneAndUpdate({ name: 'Alice' }, { $set: { age: 26 } })"
    },
    {
        question: "68. What is the findOneAndDelete() method?",
        answer: "The findOneAndDelete() method finds a document and deletes it in a single operation. Example: db.collection.findOneAndDelete({ name: 'Alice' })"
    },
    {
        question: "69. What is the findOneAndReplace() method?",
        answer: "The findOneAndReplace() method finds a document and replaces it with a new document in a single operation. Example: db.collection.findOneAndReplace({ name: 'Alice' }, { name: 'Alice', age: 30 })"
    },
    {
        question: "70. What is the createIndex() method?",
        answer: "The createIndex() method creates an index on a collection to improve query performance. Example: db.collection.createIndex({ name: 1 })"
    },
    {
        question: "71. What is the dropIndex() method?",
        answer: "The dropIndex() method removes an index from a collection. Example: db.collection.dropIndex('indexName')"
    },
    {
        question: "72. What is the listIndexes() method?",
        answer: "The listIndexes() method returns a cursor to the indexes on a collection. Example: db.collection.listIndexes()"
    },
    {
        question: "73. What is the getCollectionNames() method?",
        answer: "The getCollectionNames() method returns an array of collection names in a database. Example: db.getCollectionNames()"
    },
    {
        question: "74. What is the getDatabaseNames() method?",
        answer: "The getDatabaseNames() method returns an array of database names on the server. Example: db.adminCommand({ listDatabases: 1 })"
    },
    {
        question: "75. What is the dbStats() method?",
        answer: "The dbStats() method provides statistics about the database, including size and document count. Example: db.stats()"
    },
    {
        question: "76. What is the collStats() method?",
        answer: "The collStats() method provides statistics about a specific collection. Example: db.runCommand({ collStats: 'collectionName' })"
    },
    {
        question: "77. What is the serverStatus() method?",
        answer: "The serverStatus() method provides information about the state of the MongoDB server. Example: db.adminCommand({ serverStatus: 1 })"
    },
    {
        question: "78. What is the ping() method?",
        answer: "The ping() method checks the connection to the MongoDB server. Example: db.adminCommand({ ping: 1 })"
    },
    {
        question: "79. What is the isMaster() method?",
        answer: "The isMaster() method provides information about the server's role in a replica set. Example: db.adminCommand({ isMaster: 1 })"
    },
    {
        question: "80. What is the replSetGetStatus() method?",
        answer: "The replSetGetStatus() method returns the status of the replica set, including member states and health. Example: db.runCommand({ replSetGetStatus: 1 })"
    },
    {
        question: "81. What is the replSetInitiate() method?",
        answer: "The replSetInitiate() method initializes a new replica set. Example: rs.initiate()"
    },
    {
        question: "82. What is the replSetAdd() method?",
        answer: "The replSetAdd() method adds a new member to an existing replica set. Example: rs.add('hostname:port')"
    },
    {
        question: "83. What is the replSetRemove() method?",
        answer: "The replSetRemove() method removes a member from a replica set. Example: rs.remove('hostname:port')"
    },
    {
        question: "84. What is the replSetStepDown() method?",
        answer: "The replSetStepDown() method forces the current primary to step down and become a secondary. Example: rs.stepDown()"
    },
    {
        question: "85. What is the replSetReconfig() method?",
        answer: "The replSetReconfig() method reconfigures the replica set settings. Example: rs.reconfig(config)"
    },
    {
        question: "86. What is the getLastError() method?",
        answer: "The getLastError() method returns the status of the last write operation. Example: db.getLastError()"
    },
    {
        question: "87. What is the getLastErrorObj() method?",
        answer: "The getLastErrorObj() method provides detailed information about the last write operation. Example: db.getLastErrorObj()"
    },
    {
        question: "88. What is the setProfilingLevel() method?",
        answer: "The setProfilingLevel() method sets the profiling level for the database. Example: db.setProfilingLevel(1)"
    },
    {
        question: "89. What is the getProfilingStatus() method?",
        answer: "The getProfilingStatus() method returns the current profiling level and slow operation threshold. Example: db.getProfilingStatus()"
    },
    {
        question: "90. What is the getLog() method?",
        answer: "The getLog() method retrieves the contents of the MongoDB log file. Example: db.adminCommand({ getLog: 'global' })"
    },
    {
        question: "91. What is the shutdown() method?",
        answer: "The shutdown() method gracefully shuts down the MongoDB server. Example: db.adminCommand({ shutdown: 1 })"
    }
];

const nodeQuestions = [
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


const faqList = document.getElementById("faqList");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const tabButtons = document.querySelectorAll(".tab-btn");

const questions = {
    node: nodeQuestions,
    javascript: javascriptQuestions,
    mongoDb: mongoDbQuestions
};

let currentTopic = "node";

function renderFAQ(topic, filter = "") {
    faqList.innerHTML = "";
    const filtered = questions[topic].filter(q =>
        q.question.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        faqList.innerHTML = `<li class="no-results">No questions found.</li>`;
        return;
    }

    filtered.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("question-item");
        li.innerHTML = `
            <button class="question-btn">${item.question}</button>
            <div class="answer-box">
                <div class="answer-content">${item.answer}</div>
            </div>
        `;
        faqList.appendChild(li);
    });

    setupToggle();
}

function setupToggle() {
    const buttons = document.querySelectorAll(".question-btn");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const parent = btn.parentElement;
            const answer = parent.querySelector(".answer-box");

            document.querySelectorAll(".question-item").forEach(item => {
                if (item !== parent) {
                    item.classList.remove("active");
                    item.querySelector(".answer-box").classList.remove("active");
                }
            });

            parent.classList.toggle("active");
            answer.classList.toggle("active");
        });
    });
}

searchInput.addEventListener("input", () => {
    renderFAQ(currentTopic, searchInput.value);
    clearSearch.style.display = searchInput.value ? "inline" : "none";
});

clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    clearSearch.style.display = "none";
    renderFAQ(currentTopic);
});

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentTopic = btn.dataset.topic;
        searchInput.value = "";
        clearSearch.style.display = "none";
        renderFAQ(currentTopic);
    });
});

renderFAQ(currentTopic);


// Back to Top Button Logic
const backToTopBtn = document.getElementById("backToTop");

// Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block"; // Show button
    } else {
        backToTopBtn.style.display = "none"; // Hide button
    }
};

// Scroll to the top of the page when the button is clicked
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
