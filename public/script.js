import { nodeQuestions } from './data/node.js';
import { javascriptQuestions } from './data/javascript';
import { mongoDbQuestions } from './data/mongoDB.js';
import { mySQLQuestions } from './data/mySql.js';
import { apiQuestions } from './data/api.js';
import { reactQuestions } from './data/react.js';
import { javaQuestions } from './data/java.js';

// const javascriptQuestions = [
//     {
//         question: "1. What is JavaScript?",
//         answer: "JavaScript is a high-level, dynamic, and interpreted programming language primarily used for client-side scripting on the web."
//     },
//     {
//         question: "2. What are the basic data types in JavaScript?",
//         answer: "The basic data types in JavaScript are Number, String, Boolean, Null, and Undefined."
//     },
//     {
//         question: "3. What is a variable in JavaScript?",
//         answer: "A variable is a container that holds a value. Example: let x = 5;"
//     },
//     {
//         question: "4. What is the difference between let, const, and var?",
//         answer: `
//         <ul>
//             <li><strong>var</strong> is function-scoped. It will be available inside the entire function, regardless of where it's declared.</li>
//             <li><strong>let</strong> and <strong>const</strong> are block-scoped. They will only be accessible inside the block (like inside an if statement or for loop) where they are declared.</li>
//             <li><strong>const</strong> also means the variable cannot be reassigned once it's been given a value. However, if it's an object or array, the contents can still be modified.</li>
//         </ul>`
//     },
//     {
//         question: "5. What is a function in JavaScript?",
//         answer: "A function is a block of code that can be executed multiple times. Example: function greet() { console.log('Hello!'); }"
//     },
//     {
//         question: "6. What is the difference between == and ===?",
//         answer: "== checks for value equality with type coercion, while === checks for both value and type equality. Example: 1 == '1' // true, 1 === '1' // false"
//     },
//     {
//         question: "7. What is the purpose of the typeof operator?",
//         answer: "The typeof operator returns the type of a variable or expression. Example: typeof 'Hello' // 'string'"
//     },
//     {
//         question: "8. What is the purpose of the instanceof operator?",
//         answer: "The instanceof operator checks if an object is an instance of a particular constructor. Example: obj instanceof Object"
//     },
//     {
//         question: "9. What is the purpose of the delete operator?",
//         answer: "The delete operator removes a property from an object. Example: delete obj.property;"
//     },
//     {
//         question: "10. What is the purpose of the in operator?",
//         answer: "The in operator checks if a property exists in an object. Example: 'property' in obj"
//     },
//     {
//         question: "11. What is the purpose of the for...in loop?",
//         answer: "The for...in loop iterates over the properties of an object. Example: for (let key in obj) { console.log(key); }"
//     },
//     {
//         question: "12. What is the purpose of the for...of loop?",
//         answer: "The for...of loop iterates over the values of an iterable object. Example: for (let value of array) { console.log(value); }"
//     },
//     {
//         question: "13. What is the purpose of the while loop?",
//         answer: "The while loop executes a block of code as long as a condition is true. Example: while (i < 5) { i++; }"
//     },
//     {
//         question: "14. What is the purpose of the do...while loop?",
//         answer: "The do...while loop executes a block of code once and then repeats the loop as long as a condition is true. Example: do { i++; } while (i < 5);"
//     },
//     {
//         question: "15. What is the purpose of the if statement?",
//         answer: "The if statement executes a block of code if a condition is true. Example: if (x > 10) { console.log('x is greater than 10'); }"
//     },
//     {
//         question: "16. What is the purpose of the if...else statement?",
//         answer: "The if...else statement executes a block of code if a condition is true and another block if false. Example: if (x > 10) { console.log('x is greater than 10'); } else { console.log('x is 10 or less'); }"
//     },
//     {
//         question: "17. What is the purpose of the switch statement?",
//         answer: "The switch statement executes a block of code based on the value of a variable or expression. Example: switch (day) { case 1: console.log('Monday'); break; }"
//     },
//     {
//         question: "18. What is the purpose of the break statement?",
//         answer: "The break statement exits a loop or switch statement. Example: for (let i = 0; i < 10; i++) { if (i === 5) break; }"
//     },

//     {
//         question: "19. What is the purpose of the continue statement?",
//         answer: "The continue statement skips the rest of the code in a loop and moves on to the next iteration. Example: for (let i = 0; i < 10; i++) { if (i % 2 === 0) continue; console.log(i); }"
//     },
//     {
//         question: "20. What is the purpose of the return statement?",
//         answer: "The return statement exits a function and returns a value. Example: function add(a, b) { return a + b; }"
//     },
//     {
//         question: "21. What is a function in JavaScript?",
//         answer: "A function is a block of code that can be executed multiple times. Example: function greet() { console.log('Hello!'); }"
//     },
//     {
//         question: "22. What is the difference between a function declaration and a function expression?",
//         answer: "A function declaration defines a function with a name, while a function expression defines a function as part of an expression. Example: function declared() { } // declaration; const expressed = function() { } // expression;"
//     },
//     {
//         question: "23. What is the purpose of the function keyword?",
//         answer: "The function keyword is used to define a function. Example: function myFunction() { }"
//     },
//     {
//         question: "24. What is the purpose of the return keyword?",
//         answer: "The return keyword exits a function and returns a value. Example: function square(x) { return x * x; }"
//     },
//     {
//         question: "25. What is the purpose of the this keyword?",
//         answer: "The this keyword refers to the current object in context. Example: const obj = { name: 'Alice', greet: function() { console.log(this.name); } }; obj.greet();"
//     },
//     {
//         question: "26. What is the purpose of the arguments object?",
//         answer: "The arguments object is an array-like object that contains the arguments passed to a function. Example: function showArgs() { console.log(arguments); }"
//     },
//     {
//         question: "27. What is the purpose of the call() method?",
//         answer: "The call() method calls a function with a specified this value and arguments. Example: function greet() { console.log(this.name); } greet.call({ name: 'Bob' });"
//     },
//     {
//         question: "28. What is the purpose of the apply() method?",
//         answer: "The apply() method calls a function with a specified this value and an array of arguments. Example: function sum(a, b) { return a + b; } sum.apply(null, [1, 2]);"
//     },
//     {
//         question: "29. What is the purpose of the bind() method?",
//         answer: "The bind() method creates a new function that has the same behavior as the original function, but with a specified this value. Example: const boundGreet = greet.bind(obj); boundGreet();"
//     },
//     {
//         question: "30. What is the purpose of a closure?",
//         answer: "A closure is a function that has access to its own scope and the scope of its outer functions. Example: function outer() { let x = 10; return function inner() { console.log(x); }; }"
//     },
//     {
//         question: "31. What is the purpose of the scope chain?",
//         answer: "The scope chain is a list of scopes that a function has access to, allowing it to reference variables from its own scope and any outer scopes. Example: function outer() { let x = 10; function inner() { console.log(x); } inner(); }"
//     },
//     {
//         question: "32. What is the purpose of the global object?",
//         answer: "The global object is the top-level object in the scope chain, providing access to global variables and functions. Example: In a browser, the global object is window."
//     },
//     {
//         question: "33. What is the purpose of the window object?",
//         answer: "The window object represents the browser window and is the global object in a web browser. Example: window.alert('Hello!');"
//     },
//     {
//         question: "34. What is the purpose of the globalThis object?",
//         answer: "The globalThis object provides a standard way to access the global object across different environments. Example: console.log(globalThis);"
//     },
//     {
//         question: "35. What is the purpose of the setTimeout function?",
//         answer: "The setTimeout function calls a function or executes a code snippet after a specified delay. Example: setTimeout(() => { console.log('Executed after 1 second'); }, 1000);"
//     },

//     {
//         question: "36. What is the purpose of the setInterval function?",
//         answer: "The setInterval function repeatedly calls a function or executes a code snippet with a fixed time delay between each call. Example: setInterval(() => { console.log('Executed every 2 seconds'); }, 2000);"
//     },
//     {
//         question: "37. What is the purpose of the clearTimeout function?",
//         answer: "The clearTimeout function cancels a timeout previously established by setTimeout. Example: const timeoutId = setTimeout(() => { console.log('This won\'t run'); }, 1000); clearTimeout(timeoutId);"
//     },
//     {
//         question: "38. What is the purpose of the clearInterval function?",
//         answer: "The clearInterval function cancels a timed, repeating action set by setInterval. Example: const intervalId = setInterval(() => { console.log('This won\'t run anymore'); }, 1000); clearInterval(intervalId);"
//     },
//     {
//         question: "39. What is the purpose of the Promise object?",
//         answer: "The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Example: const myPromise = new Promise((resolve, reject) => { /* async code */ });"
//     },
//     {
//         question: "40. What are async functions in JavaScript?",
//         answer: "Async functions are a way to work with asynchronous code using the async and await keywords, allowing for a more synchronous style of writing asynchronous code. Example: async function fetchData() { let response = await fetch(url); }"
//     },
//     {
//         question: "41. What is an object in JavaScript?",
//         answer: "An object is a collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type. Example: let obj = { name: 'Alice', age: 25 };"
//     },
//     {
//         question: "42. How do you create an object in JavaScript?",
//         answer: "You can create an object using object literals, the new Object() syntax, or constructor functions. Example: let obj = new Object();"
//     },
//     {
//         question: "43. What is an array in JavaScript?",
//         answer: "An array is a special type of object used to store multiple values in a single variable. Example: let arr = [1, 2, 3];"
//     },
//     {
//         question: "44. How do you access an object property?",
//         answer: "You can access an object property using dot notation or bracket notation. Example: obj.name; // or obj['name']"
//     },
//     {
//         question: "45. How do you add a property to an object?",
//         answer: "You can add a property to an object using dot notation or bracket notation. Example: obj.city = 'New York';"
//     },
//     {
//         question: "46. How do you remove a property from an object?",
//         answer: "You can remove a property from an object using the delete operator. Example: delete obj.age;"
//     },
//     {
//         question: "47. How do you iterate over an array?",
//         answer: "You can iterate over an array using a for loop, forEach method, or for...of loop. Example: arr.forEach(item => console.log(item));"
//     },
//     {
//         question: "48. What is the purpose of the map() method?",
//         answer: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. Example: let doubled = arr.map(x => x * 2);"
//     },
//     {
//         question: "49. What is the purpose of the filter() method?",
//         answer: "The filter() method creates a new array with all elements that pass the test implemented by the provided function. Example: let evens = arr.filter(x => x % 2 === 0);"
//     },
//     {
//         question: "50. What is the purpose of the reduce() method?",
//         answer: "The reduce() method executes a reducer function on each element of the array, resulting in a single output value. Example: let sum = arr.reduce((acc, curr) => acc + curr, 0);"
//     },
//     {
//         question: "51. What is the purpose of the find() method?",
//         answer: "The find() method returns the value of the first element in the array that satisfies the provided testing function. Example: let found = arr.find(x => x > 2);"
//     },
//     {
//         question: "52. What is the purpose of the some() method?",
//         answer: "The some() method tests whether at least one element in the array passes the test implemented by the provided function. Example: let hasEven = arr.some(x => x % 2 === 0);"
//     },
//     {
//         question: "53. What is the purpose of the every() method?",
//         answer: "The every() method tests whether all elements in the array pass the test implemented by the provided function. Example: let allPositive = arr.every(x => x > 0);"
//     },
//     {
//         question: "54. How do you sort an array?",
//         answer: "You can sort an array using the sort() method, which sorts the elements of an array in place and returns the sorted array. Example: arr.sort((a, b) => a - b);"
//     },
//     {
//         question: "55. How do you reverse an array?",
//         answer: "You can reverse an array using the reverse() method, which reverses the elements of an array in place. Example: arr.reverse();"
//     },
//     {
//         question: "56. How do you concatenate arrays?",
//         answer: "You can concatenate arrays using the concat() method or the spread operator. Example: let newArr = arr1.concat(arr2); // or let newArr = [...arr1, ...arr2];"
//     },
//     {
//         question: "57. How do you slice an array?",
//         answer: "You can slice an array using the slice() method, which returns a shallow copy of a portion of an array into a new array object. Example: let sliced = arr.slice(1, 3);"
//     },
//     {
//         question: "58. How do you splice an array?",
//         answer: "You can splice an array using the splice() method, which changes the contents of an array by removing or replacing existing elements and/or adding new elements. Example: arr.splice(1, 1, 'new');"
//     },
//     {
//         question: "59. What is the purpose of the join() method?",
//         answer: "The join() method joins all elements of an array into a string, separated by a specified separator. Example: let str = arr.join(', ');"
//     },
//     {
//         question: "60. How do you check if a variable is an array?",
//         answer: "You can check if a variable is an array using the Array.isArray() method. Example: Array.isArray(arr);"
//     },
//     {
//         question: "61. What is a prototype in JavaScript?",
//         answer: "A prototype is an object from which other objects inherit properties. Every JavaScript object has a prototype, and it is used to implement inheritance."
//     },
//     {
//         question: "62. What is the purpose of the Object.create() method?",
//         answer: "The Object.create() method creates a new object with the specified prototype object and properties. Example: let obj = Object.create(proto);"
//     },
//     {
//         question: "63. What is the purpose of the Object.assign() method?",
//         answer: "The Object.assign() method copies the values of all enumerable properties from one or more source objects to a target object. Example: Object.assign(target, source1, source2);"
//     },
//     {
//         question: "64. What is the purpose of the Object.keys() method?",
//         answer: "The Object.keys() method returns an array of a given object's own enumerable property names. Example: Object.keys(obj);"
//     },
//     {
//         question: "65. What is the purpose of the Object.values() method?",
//         answer: "The Object.values() method returns an array of a given object's own enumerable property values. Example: Object.values(obj);"
//     },
//     {
//         question: "66. What is the purpose of the Object.entries() method?",
//         answer: "The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. Example: Object.entries(obj);"
//     },
//     {
//         question: "67. What is the purpose of the JSON.stringify() method?",
//         answer: "The JSON.stringify() method converts a JavaScript object or value to a JSON string. Example: JSON.stringify(obj);"
//     },
//     {
//         question: "68. What is the purpose of the JSON.parse() method?",
//         answer: "The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. Example: JSON.parse(jsonString);"
//     },
//     {
//         question: "69. What is the purpose of the set and get keywords in JavaScript?",
//         answer: "The set and get keywords are used to define setter and getter methods for object properties, allowing for custom behavior when properties are accessed or modified. Example: get value() { return this._value; }"
//     },
//     {
//         question: "70. What is the purpose of the Symbol type?",
//         answer: "The Symbol type is a unique and immutable primitive value that can be used as the key of an object property. Example: const sym = Symbol('description');"
//     },
//     {
//         question: "71. What is the purpose of the WeakMap object?",
//         answer: "The WeakMap object is a collection of key-value pairs where the keys are objects and the values can be any value. The keys are weakly referenced, meaning they can be garbage collected if there are no other references to them. Example: let weakMap = new WeakMap();"
//     },
//     {
//         question: "72. What is the purpose of the WeakSet object?",
//         answer: "The WeakSet object is a collection of objects, where each object is held weakly, allowing for garbage collection if there are no other references. Example: let weakSet = new WeakSet();"
//     },
//     {
//         question: "73. What is the purpose of the Promise.all() method?",
//         answer: "The Promise.all() method takes an iterable of promises and returns a single Promise that resolves when all of the promises in the iterable have resolved or when the iterable contains no promises. Example: Promise.all([promise1, promise2]).then(values => { /* handle values */ });"
//     },
//     {
//         question: "74. What is the purpose of the Promise.race() method?",
//         answer: "The Promise.race() method returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with its value or reason. Example: Promise.race([promise1, promise2]).then(value => { /* handle value */ });"
//     },
//     {
//         question: "75. What is the purpose of the async/await syntax?",
//         answer: "The async/await syntax allows you to write asynchronous code in a more synchronous style, making it easier to read and maintain. Example: async function fetchData() { let response = await fetch(url); }"
//     },
//     {
//         question: "76. What is the purpose of the try...catch statement?",
//         answer: "The try...catch statement allows you to test a block of code for errors and handle them gracefully. Example: try { /* code */ } catch (error) { console.error(error); }"
//     },
//     {
//         question: "77. What is the purpose of the finally block?",
//         answer: "The finally block is used to execute code after the try and catch blocks, regardless of whether an error was thrown or not. Example: try { /* code */ } catch (error) { /* handle error */ } finally { /* cleanup code */ }"
//     },
//     {
//         question: "78. What is the purpose of the setImmediate() function?",
//         answer: "The setImmediate() function executes a single callback after the current event loop cycle, allowing you to defer execution of a function. Example: setImmediate(() => { console.log('Executed immediately'); });"
//     },
//     {
//         question: "79. What is the purpose of the requestAnimationFrame() method?",
//         answer: "The requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. Example: requestAnimationFrame(() => { /* animation code */ });"
//     },
//     {
//         question: "80. What is the purpose of the fetch() API?",
//         answer: "The fetch() API is used to make network requests to servers. It returns a promise that resolves to the response of the request. Example: fetch(url).then(response => response.json()).then(data => console.log(data));"
//     },
//     {
//         question: "81. What is the Document Object Model (DOM)?",
//         answer: "The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing programming languages to manipulate the content, structure, and style of web pages."
//     },
//     {
//         question: "82. How do you select an element by its ID?",
//         answer: "You can select an element by its ID using the document.getElementById() method. Example: let element = document.getElementById('myId');"
//     },
//     {
//         question: "83. How do you select elements by class name?",
//         answer: "You can select elements by class name using the document.getElementsByClassName() method. Example: let elements = document.getElementsByClassName('myClass');"
//     },
//     {
//         question: "84. How do you select elements by tag name?",
//         answer: "You can select elements by tag name using the document.getElementsByTagName() method. Example: let elements = document.getElementsByTagName('div');"
//     },
//     {
//         question: "85. How do you select elements using a CSS selector?",
//         answer: "You can select elements using a CSS selector with the document.querySelector() and document.querySelectorAll() methods. Example: let element = document.querySelector('.myClass');"
//     },
//     {
//         question: "86. How do you change the text content of an element?",
//         answer: "You can change the text content of an element using the textContent property. Example: element.textContent = 'New Text';"
//     },
//     {
//         question: "87. How do you change the HTML content of an element?",
//         answer: "You can change the HTML content of an element using the innerHTML property. Example: element.innerHTML = '<strong>Bold Text</strong>';"
//     },
//     {
//         question: "88. How do you add a class to an element?",
//         answer: "You can add a class to an element using the classList.add() method. Example: element.classList.add('newClass');"
//     },
//     {
//         question: "89. How do you remove a class from an element?",
//         answer: "You can remove a class from an element using the classList.remove() method. Example: element.classList.remove('oldClass');"
//     },
//     {
//         question: "90. How do you toggle a class on an element?",
//         answer: "You can toggle a class on an element using the classList.toggle() method. Example: element.classList.toggle('active');"
//     },
//     {
//         question: "91. How do you add an event listener to an element?",
//         answer: "You can add an event listener to an element using the addEventListener() method. Example: element.addEventListener('click', function() { console.log('Clicked!'); });"
//     },
//     {
//         question: "92. How do you remove an event listener from an element?",
//         answer: "You can remove an event listener from an element using the removeEventListener() method. Example: element.removeEventListener('click', handlerFunction);"
//     },
//     {
//         question: "93. How do you create a new element?",
//         answer: "You can create a new element using the document.createElement() method. Example: let newElement = document.createElement('div');"
//     },
//     {
//         question: "94. How do you append an element to the DOM?",
//         answer: "You can append an element to the DOM using the appendChild() method. Example: document.body.appendChild(newElement);"
//     },
//     {
//         question: "95. How do you remove an element from the DOM?",
//         answer: "You can remove an element from the DOM using the remove() method. Example: element.remove();"
//     },
//     {
//         question: "96. How do you clone an element?",
//         answer: "You can clone an element using the cloneNode() method. Example: let clone = element.cloneNode(true);"
//     },
//     {
//         question: "97. How do you set an attribute on an element?",
//         answer: "You can set an attribute on an element using the setAttribute() method. Example: element.setAttribute('data-id', '123');"
//     },
//     {
//         question: "98. How do you get an attribute from an element?",
//         answer: "You can get an attribute from an element using the getAttribute() method. Example: let id = element.getAttribute('data-id');"
//     },
//     {
//         question: "99. How do you change the style of an element?",
//         answer: "You can change the style of an element using the style property. Example: element.style.color = 'red';"
//     },
//     {
//         question: "100. How do you scroll to an element?",
//         answer: "You can scroll to an element using the scrollIntoView() method. Example: element.scrollIntoView();"
//     },
//     {
//         question: "101. What is the purpose of the forEach method?",
//         answer: "The forEach method is used to iterate over each item in an array and perform a specified action on each element. Example: array.forEach((item) => console.log(item));"
//     },
// ]

// const mongoDbQuestions = [
//     {
//         question: "1. What is MongoDB?",
//         answer: "MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents. Example: { 'name': 'John', 'age': 30 }"
//     },
//     {
//         question: "2. What are the main features of MongoDB?",
//         answer: "Features include document-oriented storage, dynamic schemas, and horizontal scalability. Example: db.collection.insert({})"
//     },
//     {
//         question: "3. What is a document in MongoDB?",
//         answer: "A document is a basic unit of data in MongoDB, represented as a BSON object. Example: { 'key': 'value' }"
//     },
//     {
//         question: "4. What is a collection in MongoDB?",
//         answer: "A collection is a group of MongoDB documents, similar to a table in relational databases. Example: db.collectionName.find()"
//     },
//     {
//         question: "5. What is a database in MongoDB?",
//         answer: "A database is a container for collections, allowing for data organization. Example: use myDatabase"
//     },
//     {
//         question: "6. What is BSON?",
//         answer: "BSON is a binary representation of JSON-like documents, supporting additional data types. Example: { 'date': new Date() }"
//     },
//     {
//         question: "7. How does MongoDB handle data consistency?",
//         answer: "MongoDB uses eventual consistency and supports multi-document transactions. Example: session.startTransaction()"
//     },
//     {
//         question: "8. What is a primary key in MongoDB?",
//         answer: "The primary key is the _id field, which uniquely identifies each document. Example: { '_id': ObjectId('...') }"
//     },
//     {
//         question: "9. What is an index in MongoDB?",
//         answer: "An index improves the speed of data retrieval operations on a collection. Example: db.collection.createIndex({ 'field': 1 })"
//     },
//     {
//         question: "10. What is a replica set in MongoDB?",
//         answer: "A replica set is a group of MongoDB servers that maintain the same data set for redundancy. Example: rs.add('hostname:port')"
//     },
//     {
//         question: "11. What is sharding in MongoDB?",
//         answer: "Sharding distributes data across multiple servers to ensure horizontal scalability. Example: sh.shardCollection('db.collection', { 'shardKey': 1 })"
//     },
//     {
//         question: "12. What is the aggregation framework in MongoDB?",
//         answer: "The aggregation framework processes data and performs operations like filtering and grouping. Example: db.collection.aggregate([{ $group: { _id: '$field' } }])"
//     },
//     {
//         question: "13. What is a MongoDB query?",
//         answer: "A MongoDB query retrieves data from a collection using specific criteria. Example: db.collection.find({ 'field': 'value' })"
//     },
//     {
//         question: "14. How do you insert a document in MongoDB?",
//         answer: "You can insert a document using insertOne() or insertMany(). Example: db.collection.insertOne({ 'name': 'Alice' })"
//     },
//     {
//         question: "15. How do you update a document in MongoDB?",
//         answer: "Update a document using updateOne() or updateMany(). Example: db.collection.updateOne({ 'name': 'Alice' }, { $set: { 'age': 25 } })"
//     },
//     {
//         question: "16. What is the difference between find() and findOne()?",
//         answer: "find() returns multiple documents, while findOne() returns a single document. Example: db.collection.find({})"
//     },
//     {
//         question: "17. What is a query operator in MongoDB?",
//         answer: "Query operators specify conditions in queries, like $gt or $in. Example: db.collection.find({ 'age': { $gt: 20 } })"
//     },
//     {
//         question: "18. What is a projection in MongoDB?",
//         answer: "Projection selects specific fields to return in query results. Example: db.collection.find({}, { 'name': 1 })"
//     },
//     {
//         question: "19. What is the purpose of the aggregate() method?",
//         answer: "The aggregate() method performs aggregation operations on a collection. Example: db.collection.aggregate([{ $match: { 'status': 'A' } }])"
//     },
//     {
//         question: "20. What is the difference between upsert and update?",
//         answer: "upsert inserts a document if it doesn't exist, while update modifies existing documents. Example: db.collection.update({ 'name': 'Alice' }, { $set: { 'age': 30 } }, { upsert: true })"
//     },
//     {
//         question: "21. What is a schema in MongoDB?",
//         answer: "A schema defines the structure of documents in a collection, though MongoDB is schema-less. Example: const userSchema = new Schema({ name: String, age: Number });"
//     },
//     {
//         question: "22. What is Mongoose?",
//         answer: "Mongoose is an ODM library for MongoDB and Node.js, providing schema-based data modeling. Example: const mongoose = require('mongoose');"
//     },
//     {
//         question: "23. How do you create a new collection in MongoDB?",
//         answer: "Create a new collection using db.createCollection() or by inserting a document. Example: db.newCollection.insert({})"
//     },
//     {
//         question: "24. What is the purpose of the drop() method?",
//         answer: "The drop() method removes a collection or database from MongoDB. Example: db.collection.drop()"
//     },
//     {
//         question: "25. What is a MongoDB driver?",
//         answer: "A MongoDB driver allows applications to connect and interact with a MongoDB database. Example: const MongoClient = require('mongodb').MongoClient;"
//     },
//     {
//         question: "26. How do you connect to a MongoDB database?",
//         answer: "Connect using the MongoDB URI with the driver. Example: MongoClient.connect('mongodb://localhost:27017/mydb')"
//     },
//     {
//         question: "27. What is the findAndModify() method?",
//         answer: "The findAndModify() method atomically modifies and returns a document. Example: db.collection.findAndModify({ query: { name: 'Alice' }, update: { $set: { age: 26 } } })"
//     },
//     {
//         question: "28. What is a cursor in MongoDB?",
//         answer: "A cursor is a pointer to the result set of a query, allowing iteration over the documents. Example: const cursor = db.collection.find();"
//     },
//     {
//         question: "29. How do you iterate over a cursor in MongoDB?",
//         answer: "Use the forEach() method to iterate over cursor results. Example: cursor.forEach(doc => console.log(doc));"
//     },
//     {
//         question: "30. What is the countDocuments() method?",
//         answer: "The countDocuments() method counts the number of documents in a collection that match a query. Example: db.collection.countDocuments({ age: { $gt: 20 } })"
//     },
//     {
//         question: "31. What is the distinct() method?",
//         answer: "The distinct() method returns an array of distinct values for a specified field. Example: db.collection.distinct('fieldName')"
//     },
//     {
//         question: "32. What is a MongoDB aggregation pipeline?",
//         answer: "An aggregation pipeline processes data through a series of stages, transforming the data as it passes through. Example: db.collection.aggregate([{ $match: { status: 'A' } }])"
//     },
//     {
//         question: "33. What is the $match stage in aggregation?",
//         answer: "The $match stage filters documents to pass only those that match the specified condition. Example: { $match: { age: { $gte: 18 } } }"
//     },
//     {
//         question: "34. What is the $group stage in aggregation?",
//         answer: "The $group stage groups documents by a specified identifier and performs aggregation operations. Example: { $group: { _id: '$age', total: { $sum: 1 } } }"
//     },
//     {
//         question: "35. What is the $sort stage in aggregation?",
//         answer: "The $sort stage sorts the documents in the pipeline by specified fields. Example: { $sort: { age: 1 } }"
//     },
//     {
//         question: "36. What is the $project stage in aggregation?",
//         answer: "The $project stage reshapes each document in the stream, adding or removing fields. Example: { $project: { name: 1, age: 1 } }"
//     },
//     {
//         question: "37. What is the $limit stage in aggregation?",
//         answer: "The $limit stage restricts the number of documents passed to the next stage. Example: { $limit: 5 }"
//     },
//     {
//         question: "38. What is the $skip stage in aggregation?",
//         answer: "The $skip stage skips a specified number of documents in the pipeline. Example: { $skip: 10 }"
//     },
//     {
//         question: "39. What is the $unwind stage in aggregation?",
//         answer: "The $unwind stage deconstructs an array field from the input documents to output a document for each element. Example: { $unwind: '$arrayField' }"
//     },
//     {
//         question: "40. What is the $lookup stage in aggregation?",
//         answer: "The $lookup stage performs a left outer join to an unsharded collection in the same database. Example: { $lookup: { from: 'otherCollection', localField: 'field', foreignField: 'field', as: 'joinedData' } }"
//     },
//     {
//         question: "41. What is the $merge stage in aggregation?",
//         answer: "The $merge stage writes the results of the aggregation pipeline to a specified collection. Example: { $merge: { into: 'outputCollection' } }"
//     },
//     {
//         question: "42. What is the $out stage in aggregation?",
//         answer: "The $out stage writes the results of the aggregation pipeline to a new collection. Example: { $out: 'outputCollection' }"
//     },
//     {
//         question: "43. What is a MongoDB transaction?",
//         answer: "A transaction allows multiple operations to be executed as a single atomic operation. Example: session.startTransaction();"
//     },
//     {
//         question: "44. How do you commit a transaction in MongoDB?",
//         answer: "Use the commitTransaction() method to commit a transaction. Example: session.commitTransaction();"
//     },
//     {
//         question: "45. How do you abort a transaction in MongoDB?",
//         answer: "Use the abortTransaction() method to abort a transaction. Example: session.abortTransaction();"
//     },
//     {
//         question: "46. What is a MongoDB shard?",
//         answer: "A shard is a horizontal partition of data in a MongoDB cluster, allowing for scalability. Example: sh.shardCollection('db.collection', { 'shardKey': 1 })"
//     },
//     {
//         question: "47. What is a MongoDB config server?",
//         answer: "A config server stores metadata and configuration settings for a sharded cluster. Example: sh.addShard('shard1')"
//     },
//     {
//         question: "48. What is a MongoDB balancer?",
//         answer: "The balancer distributes data evenly across shards in a sharded cluster. Example: sh.startBalancer()"
//     },
//     {
//         question: "49. What is a MongoDB aggregation cursor?",
//         answer: "An aggregation cursor is a pointer to the results of an aggregation operation, allowing iteration. Example: const cursor = db.collection.aggregate([{ $group: { _id: '$field' } }]);"
//     },
//     {
//         question: "50. What is the explain() method?",
//         answer: "The explain() method provides information on how MongoDB executes a query. Example: db.collection.find({}).explain()"
//     },
//     {
//         question: "51. What is a MongoDB profiler?",
//         answer: "A profiler tracks performance and execution statistics for database operations. Example: db.setProfilingLevel(2)"
//     },
//     {
//         question: "52. How do you enable profiling in MongoDB?",
//         answer: "Enable profiling by setting the profiling level in the database. Example: db.setProfilingLevel(1, { slowms: 100 })"
//     },
//     {
//         question: "53. What is a MongoDB backup?",
//         answer: "A backup is a copy of the database data, used for recovery in case of data loss. Example: mongodump --db mydb"
//     },
//     {
//         question: "54. How do you restore a MongoDB backup?",
//         answer: "Restore a backup using the mongorestore command. Example: mongorestore --db mydb dump/mydb"
//     },
//     {
//         question: "55. What is a MongoDB user?",
//         answer: "A user is an account that can access and perform operations on a MongoDB database. Example: db.createUser ({ user: 'user', pwd: 'password', roles: ['readWrite'] })"
//     },
//     {
//         question: "56. How do you create a user in MongoDB?",
//         answer: "Create a user with specific roles and permissions. Example: db.createUser ({ user: 'admin', pwd: 'admin123', roles: ['dbAdmin'] })"
//     },
//     {
//         question: "57. What is a MongoDB role?",
//         answer: "A role defines a set of privileges that a user can perform on a database. Example: { role: 'readWrite', db: 'mydb' }"
//     },
//     {
//         question: "58. How do you grant a role to a user in MongoDB?",
//         answer: "Grant a role to a user using db.grantRolesToUser ('user', [{ role: 'readWrite', db: 'mydb' }])"
//     },
//     {
//         question: "59. What is a MongoDB database user authentication?",
//         answer: "Authentication verifies the identity of a user attempting to access the database. Example: db.auth('user', 'password')"
//     },
//     {
//         question: "60. What is a MongoDB connection string?",
//         answer: "A connection string is a URI that specifies the details needed to connect to a MongoDB database. Example: mongodb://username:password@host:port/dbname"
//     },
//     {
//         question: "61. What is the MongoClient class?",
//         answer: "The MongoClient class is used to connect to a MongoDB server and manage database operations. Example: const client = new MongoClient(uri);"
//     },
//     {
//         question: "62. How do you close a MongoDB connection?",
//         answer: "Close a connection using the close() method on the client instance. Example: client.close();"
//     },
//     {
//         question: "63. What is a MongoDB aggregation framework?",
//         answer: "The aggregation framework processes data and performs operations like filtering and grouping. Example: db.collection.aggregate([{ $group: { _id: '$field' } }])"
//     },
//     {
//         question: "64. What is the bulkWrite() method?",
//         answer: "The bulkWrite() method performs multiple write operations in bulk for efficiency. Example: db.collection.bulkWrite([{ insertOne: { document: { name: 'Alice' } } }])"
//     },
//     {
//         question: "65. What is the updateMany() method?",
//         answer: "The updateMany() method updates multiple documents that match the specified criteria. Example: db.collection.updateMany({ age: { $gt: 20 } }, { $set: { status: 'adult' } })"
//     },
//     {
//         question: "66. What is the deleteMany() method?",
//         answer: "The deleteMany() method removes multiple documents that match the specified criteria. Example: db.collection.deleteMany({ age: { $lt: 18 } })"
//     },
//     {
//         question: "67. What is the findOneAndUpdate() method?",
//         answer: "The findOneAndUpdate() method finds a document and updates it in a single operation. Example: db.collection.findOneAndUpdate({ name: 'Alice' }, { $set: { age: 26 } })"
//     },
//     {
//         question: "68. What is the findOneAndDelete() method?",
//         answer: "The findOneAndDelete() method finds a document and deletes it in a single operation. Example: db.collection.findOneAndDelete({ name: 'Alice' })"
//     },
//     {
//         question: "69. What is the findOneAndReplace() method?",
//         answer: "The findOneAndReplace() method finds a document and replaces it with a new document in a single operation. Example: db.collection.findOneAndReplace({ name: 'Alice' }, { name: 'Alice', age: 30 })"
//     },
//     {
//         question: "70. What is the createIndex() method?",
//         answer: "The createIndex() method creates an index on a collection to improve query performance. Example: db.collection.createIndex({ name: 1 })"
//     },
//     {
//         question: "71. What is the dropIndex() method?",
//         answer: "The dropIndex() method removes an index from a collection. Example: db.collection.dropIndex('indexName')"
//     },
//     {
//         question: "72. What is the listIndexes() method?",
//         answer: "The listIndexes() method returns a cursor to the indexes on a collection. Example: db.collection.listIndexes()"
//     },
//     {
//         question: "73. What is the getCollectionNames() method?",
//         answer: "The getCollectionNames() method returns an array of collection names in a database. Example: db.getCollectionNames()"
//     },
//     {
//         question: "74. What is the getDatabaseNames() method?",
//         answer: "The getDatabaseNames() method returns an array of database names on the server. Example: db.adminCommand({ listDatabases: 1 })"
//     },
//     {
//         question: "75. What is the dbStats() method?",
//         answer: "The dbStats() method provides statistics about the database, including size and document count. Example: db.stats()"
//     },
//     {
//         question: "76. What is the collStats() method?",
//         answer: "The collStats() method provides statistics about a specific collection. Example: db.runCommand({ collStats: 'collectionName' })"
//     },
//     {
//         question: "77. What is the serverStatus() method?",
//         answer: "The serverStatus() method provides information about the state of the MongoDB server. Example: db.adminCommand({ serverStatus: 1 })"
//     },
//     {
//         question: "78. What is the ping() method?",
//         answer: "The ping() method checks the connection to the MongoDB server. Example: db.adminCommand({ ping: 1 })"
//     },
//     {
//         question: "79. What is the isMaster() method?",
//         answer: "The isMaster() method provides information about the server's role in a replica set. Example: db.adminCommand({ isMaster: 1 })"
//     },
//     {
//         question: "80. What is the replSetGetStatus() method?",
//         answer: "The replSetGetStatus() method returns the status of the replica set, including member states and health. Example: db.runCommand({ replSetGetStatus: 1 })"
//     },
//     {
//         question: "81. What is the replSetInitiate() method?",
//         answer: "The replSetInitiate() method initializes a new replica set. Example: rs.initiate()"
//     },
//     {
//         question: "82. What is the replSetAdd() method?",
//         answer: "The replSetAdd() method adds a new member to an existing replica set. Example: rs.add('hostname:port')"
//     },
//     {
//         question: "83. What is the replSetRemove() method?",
//         answer: "The replSetRemove() method removes a member from a replica set. Example: rs.remove('hostname:port')"
//     },
//     {
//         question: "84. What is the replSetStepDown() method?",
//         answer: "The replSetStepDown() method forces the current primary to step down and become a secondary. Example: rs.stepDown()"
//     },
//     {
//         question: "85. What is the replSetReconfig() method?",
//         answer: "The replSetReconfig() method reconfigures the replica set settings. Example: rs.reconfig(config)"
//     },
//     {
//         question: "86. What is the getLastError() method?",
//         answer: "The getLastError() method returns the status of the last write operation. Example: db.getLastError()"
//     },
//     {
//         question: "87. What is the getLastErrorObj() method?",
//         answer: "The getLastErrorObj() method provides detailed information about the last write operation. Example: db.getLastErrorObj()"
//     },
//     {
//         question: "88. What is the setProfilingLevel() method?",
//         answer: "The setProfilingLevel() method sets the profiling level for the database. Example: db.setProfilingLevel(1)"
//     },
//     {
//         question: "89. What is the getProfilingStatus() method?",
//         answer: "The getProfilingStatus() method returns the current profiling level and slow operation threshold. Example: db.getProfilingStatus()"
//     },
//     {
//         question: "90. What is the getLog() method?",
//         answer: "The getLog() method retrieves the contents of the MongoDB log file. Example: db.adminCommand({ getLog: 'global' })"
//     },
//     {
//         question: "91. What is the shutdown() method?",
//         answer: "The shutdown() method gracefully shuts down the MongoDB server. Example: db.adminCommand({ shutdown: 1 })"
//     },
//     {
//         question: "92. What is the difference between MongoDB and MySQL?",
//         answer: "MongoDB is a NoSQL database that stores data as flexible JSON-like documents, great for unstructured or semi-structured data. MySQL is a relational database with a fixed schema and structured tables, ideal for applications needing strict data integrity like banking systems."
//     }

// ];

// const nodeQuestions = [
//     {
//         question: "1. What is Node.js?",
//         answer: "<code>Node.Js</code> is an open-source, server-side JavaScript runtime environment that allows developers to build scalable and high-performance network applications."
//     },
//     {
//         question: "2. What is the event-driven, non-blocking I/O model in Node.js?",
//         answer: "Node.js follows an event-driven, non-blocking I/O model, which means it operates on a single thread using asynchronous callbacks to handle I/O operations. This allows for efficient utilization of resources and scalability."
//     },
//     {
//         question: "3. How does Node.js handle concurrency?",
//         answer: "Node.js achieves concurrency through event looping. It uses a single thread to handle multiple concurrent connections and asynchronously delegates I/O operations to the operating system."
//     },
//     {
//         question: "4. Explain the concept of middleware in Express.js.",
//         answer: "Middleware in Express.js is a series of functions that are invoked for every incoming HTTP request. It provides a way to perform tasks such as request parsing, authentication, logging, and error handling before the final request handler is called."
//     },
//     {
//         question: "5. How can you scale a Node.js application?",
//         answer: "Node.js applications can be scaled by using techniques like clustering, load balancing, and vertical scaling. Clustering involves running multiple instances of the application on different cores, while load balancing distributes incoming requests across these instances. Vertical scaling involves increasing the resources of the server or hosting environment."
//     },
//     {
//         question: "6. What are streams in Node.js? How are they useful?",
//         answer: "Streams in Node.js are objects that allow you to read or write data in a continuous, chunked manner. They are useful for handling large amounts of data, processing file input/output, and implementing efficient network communication."
//     },
//     {
//         question: "7. Explain the purpose of the package.json file in Node.js.",
//         answer: "The package.json file in Node.js serves as a manifest for the application. It contains metadata about the project, including dependencies, scripts, and other configurations. It is used by npm for package management and project setup."
//     },
//     {
//         question: "8. How can you handle errors in Node.js?",
//         answer: "Errors in Node.js can be handled using try-catch blocks, error event handlers, or by using middleware for error handling. Unhandled exceptions can be caught using the `process.on('uncaughtException')` event."
//     },
//     {
//         question: "9. Describe the difference between process.nextTick and setImmediate.",
//         answer: "`process.nextTick` and `setImmediate` are both used to defer the execution of a callback function, but they have different order of execution. `process.nextTick` executes the callback immediately after the current phase of the event loop, whereas `setImmediate` executes the callback in the next iteration of the event loop."
//     },
//     {
//         question: "10. What is the purpose of the REPL in Node.js?",
//         answer: "REPL stands for Read-Eval-Print Loop. It is an interactive programming environment that allows you to execute JavaScript code and see the results immediately. The Node.js REPL is useful for prototyping, testing code snippets, and debugging."
//     },
//     {
//         question: "11. How can you handle file uploads in Node.js?",
//         answer: "File uploads in Node.js can be handled using middleware like `multer`. Multer allows you to handle multipart/form-data requests and provides easy access to the uploaded files in your application."
//     },
//     {
//         question: "12. Explain the concept of callback hell and how to avoid it.",
//         answer: "Callback hell refers to the situation where multiple asynchronous operations are nested within each other, resulting in deeply nested callbacks. It makes the code hard to read and maintain. To avoid callback hell, you can use techniques like modularization, named functions, Promises, or async/await syntax to handle asynchronous operations in a more readable and organized way."
//     },
//     {
//         question: "13. How does garbage collection work in Node.js?",
//         answer: "Node.js uses a mark-and-sweep garbage collector to manage memory. It automatically detects and frees up memory that is no longer referenced by the application. The V8 engine, which powers Node.js, performs garbage collection periodically in the background."
//     },
//     {
//         question: "14. What is the purpose of the cluster module in Node.js?",
//         answer: "The cluster module in Node.js allows you to create child processes (workers) to handle incoming requests. It enables you to take advantage of multiple CPU cores and distribute the workload across processes, increasing the application's performance and reliability."
//     },
//     {
//         question: "15. How can you perform unit testing in Node.js?",
//         answer: "Node.js supports various testing frameworks like Mocha, Jest, and Jasmine for unit testing. These frameworks provide tools and APIs to write and run tests for your Node.js code, allowing you to ensure the correctness and reliability of your application."
//     },
//     {
//         question: "16. Explain the concept of Promises in Node.js.",
//         answer: "Promises in Node.js provide a cleaner way to handle asynchronous code compared to traditional callback functions. A Promise represents the eventual completion or failure of an asynchronous operation and allows you to chain multiple asynchronous operations together using methods like `.then()` and `.catch()`."
//     },
//     {
//         question: "17. Describe the role of EventEmitter in Node.js.",
//         answer: "EventEmitter is a class in Node.js that allows you to create and handle custom events. It is used to bind and listen for events and can be extended to create custom event-driven objects."
//     },
//     {
//         question: "18. How can you secure a Node.js application?",
//         answer: "Securing a Node.js application involves practices like validating user input, using secure authentication mechanisms, implementing proper access controls, using encryption for sensitive data, and keeping dependencies up to date to avoid security vulnerabilities."
//     },
//     {
//         question: "19. Explain the purpose of the Buffer class in Node.js.",
//         answer: "The Buffer class in Node.js is used to handle binary data. It provides methods for creating, reading, and manipulating data in raw binary format. Buffers are commonly used for handling network data, file streams, and other I/O operations."
//     },
//     {
//         question: "20. How does Node.js handle caching of modules?",
//         answer: "Node.js caches modules upon the first `require()` call. This means that subsequent calls to `require()` for the same module will return the cached module without re-evaluating its code. This caching mechanism improves performance by avoiding redundant module loading."
//     },
//     {
//         question: "21. What is the purpose of the process object in Node.js?",
//         answer: "The process object in Node.js provides information and control over the current Node.js process. It allows you to access command-line arguments, environment variables, stdin/stdout, and provides methods to exit the process or handle uncaught exceptions."
//     },
//     {
//         question: "22. Describe the purpose of the fs module in Node.js.",
//         answer: "The fs module in Node.js provides functions for interacting with the file system. It allows you to read from and write to files, create or delete directories, manipulate file permissions, and perform other file-related operations."
//     },
//     {
//         question: "23. Explain the concept of template engines in Node.js.",
//         answer: "Template engines in Node.js allow you to dynamically generate HTML or other types of documents by combining templates with data. Engines like EJS, Pug (formerly Jade), and Handlebars provide syntax and functionality to generate dynamic content."
//     },
//     {
//         question: "24. How can you handle authentication and authorization in Node.js?",
//         answer: "Authentication and authorization in Node.js can be handled by using libraries like Passport.js or implementing your own authentication middleware. Techniques like session-based authentication, JSON Web Tokens (JWT), or OAuth can be used for secure authentication and authorization."
//     },
//     {
//         question: "25. What is the purpose of the util module in Node.js?",
//         answer: "The util module in Node.js provides various utility functions that are helpful for debugging, working with objects, formatting strings, and other common tasks. It includes functions like `util.format`, `util.promisify`, and `util.inspect`."
//     },
//     {
//         question: "26. Explain the concept of a WebSocket and how it differs from HTTP.",
//         answer: "WebSockets provide a persistent, full-duplex communication channel between a client and a server. Unlike HTTP, which is stateless and request-response-based, WebSockets allow real-time bidirectional communication, making them suitable for applications that require constant data exchange."
//     },
//     {
//         question: "27. What is the purpose of the crypto module in Node.js?",
//         answer: "The crypto module in Node.js provides cryptographic functionality. It allows you to generate secure hashes, encrypt and decrypt data, create digital signatures, and perform other cryptographic operations."
//     },
//     {
//         question: "28. How can you interact with databases in Node.js?",
//         answer: "Node.js can interact with databases using database-specific libraries or ORMs (Object-Relational Mappers) such as Sequelize for SQL databases or Mongoose for MongoDB. These libraries provide convenient methods for querying, inserting, updating, and deleting data."
//     },
//     {
//         question: "29. Describe the purpose of the net module in Node.js.",
//         answer: "The net module in Node.js provides low-level networking functionality. It allows you to create TCP or UNIX socket servers and clients, handle network connections, and perform socket-level operations."
//     },
//     {
//         question: "30. How can you handle cross-origin resource sharing (CORS) in Node.js?",
//         answer: "CORS can be handled in Node.js by using middleware like `cors`. It allows you to set the necessary HTTP headers to enable cross-origin requests from different domains."
//     },
//     {
//         question: "31. How do you debug Node.js applications?",
//         answer: "Node.js applications can be debugged using tools like the built-in debugger (`node inspect`), the Chrome DevTools with the `--inspect` flag, or using IDEs that support Node.js debugging. These tools allow you to set breakpoints, inspect variables, and step through the code to find and fix issues."
//     },
//     {
//         question: "32. What is npm?",
//         answer: "npm stands for Node Package Manager. It is a package manager for Node.js and is used to install, manage, and share packages or libraries of reusable code."
//     },
//     {
//         question: "33. What is the difference between Node.js and JavaScript?",
//         answer: "Node.js is a runtime environment that allows JavaScript to run on the server-side, while JavaScript is a programming language used for both client-side and server-side scripting."
//     },
//     {
//         question: "34. How do you create a server in Node.js?",
//         answer: "To create a server in Node.js, you can use the built-in `http` module. Here's an example:\n\n```javascript\nconst http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!');\n});\n\nserver.listen(3000, 'localhost', () => {\n  console.log('Server running at http://localhost:3000/');\n});\n```"
//     },
//     {
//         question: "35. What is an Event Emitter in Node.js?",
//         answer: "Event Emitter is a class in Node.js that allows you to create and handle custom events. It is used to bind and listen for events and can be extended to create custom event-driven objects."
//     },
//     {
//         question: "36. What is the purpose of the `require` function in Node.js?",
//         answer: "The `require` function is used to include modules in Node.js. It allows you to import code from other JavaScript files or modules."
//     },
//     {
//         question: "37. What is the purpose of the `module.exports` object?",
//         answer: "The `module.exports` object is used in Node.js to expose functions, objects, or values from a module so that other modules can use them. It is the main way to create reusable code in Node.js."
//     },
//     {
//         question: "38. What is the purpose of the `exports` object?",
//         answer: "The `exports` object is a shorthand reference to `module.exports`. You can use it to assign values or functions directly to `exports` or modify its properties. However, you cannot reassign `exports` itself."
//     },
//     {
//         question: "39. What is a middleware in Express.js?",
//         answer: "Middleware functions in Express.js are functions that have access to the request and response objects and can perform actions before or after the main request-handling function. They can be used to add additional functionality to the application, such as logging, authentication, or error handling."
//     },
//     {
//         question: "40. How do you handle form data in Express.js?",
//         answer: "In Express.js, you can use the `body-parser` middleware to handle form data. It allows you to access form data submitted via POST requests through the `req.body` object."
//     },
//     {
//         question: "41. What is the purpose of the `next` function in Express.js middleware?",
//         answer: "The `next` function is used in Express.js middleware to pass control to the next middleware function in the stack. It is typically called at the end of a middleware function to allow the request to continue to the next matching route or middleware."
//     },
//     {
//         question: "42. What is a Promise in Node.js?",
//         answer: "A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises provide a cleaner way to handle asynchronous code compared to traditional callback functions."
//     },
//     {
//         question: "43. How do you handle asynchronous operations with Promises in Node.js?",
//         answer: "You can use the `then` and `catch` methods to handle the success and error cases of a Promise. Additionally, you can use `async/await` syntax to write asynchronous code in a more synchronous style."
//     },
//     {
//         question: "44. What is the difference between readable and writable streams?",
//         answer: "A readable stream is used to read data from a source, while a writable stream is used to write data to a destination. Both streams can be used together to process data in a streaming fashion."
//     },
//     {
//         question: "45. What is an ORM?",
//         answer: "ORM stands for Object-Relational Mapper. It is a technique that allows you to interact with relational databases using objects instead of writing raw SQL queries. ORMs handle the mapping between objects and database tables, making database operations easier and more object-oriented."
//     },
//     {
//         question: "46. What is callback-based style in Node.js?",
//         answer: "Callback-based style is a programming pattern commonly used in Node.js, where asynchronous operations are handled by passing callback functions as arguments to other functions. The callback function is called when the asynchronous operation completes."
//     },
//     {
//         question: "47. What is the Event Loop in Node.js?",
//         answer: "The Event Loop is a mechanism in Node.js that allows the runtime to efficiently handle asynchronous operations. It continuously checks for pending events and executes their associated callback functions, ensuring non-blocking I/O operations."
//     },
//     {
//         question: "48. What is clustering in Node.js?",
//         answer: "Clustering in Node.js is the process of creating multiple child processes (workers) to handle incoming requests. This allows you to take advantage of multiple CPU cores and distribute the workload across processes, increasing the application's performance and reliability."
//     },
//     {
//         question: "49. What are JSON Web Tokens (JWT)?",
//         answer: "JSON Web Tokens (JWT) are a compact and self-contained way to transmit information between parties as a JSON object. They are commonly used for authentication and authorization purposes in web applications."
//     },
//     {
//         question: "50. What is the purpose of the `assert` module in Node.js?",
//         answer: "The `assert` module in Node.js provides a set of functions for performing assertions and throwing errors if the conditions are not met. It is commonly used for writing tests and validating assumptions in your code."
//     },
//     {
//         question: "51. What is the purpose of the `path` module in Node.js?",
//         answer: "The `path` module in Node.js provides functions for working with file paths. It allows you to manipulate file and directory paths, normalize and resolve paths, extract file extensions, and more."
//     },
//     {
//         question: "52. How can you handle environment variables in Node.js?",
//         answer: "You can handle environment variables in Node.js using the `process.env` object. It provides access to the environment variables defined in the operating system."
//     },
//     {
//         question: "53. What is event-driven programming in Node.js?",
//         answer: "Event-driven programming is a programming paradigm where the flow of the program is determined by events. In Node.js, many operations are based on asynchronous events, and event-driven programming allows you to respond to these events efficiently."
//     },
//     {
//         question: "54. What is a buffer in Node.js?",
//         answer: "A buffer is a temporary storage area in memory that allows you to read, manipulate, and write binary data. It is commonly used in Node.js for handling network data, file streams, and other I/O operations."
//     },
//     {
//         question: "55. How do you handle sessions in Node.js?",
//         answer: "To handle sessions in Node.js, you can use libraries like `express-session`. This allows you to store session data on the server and associate it with a client's session ID."
//     },
//     {
//         question: "56. What is the purpose of the `child_process` module in Node.js?",
//         answer: "The `child_process` module in Node.js provides functionality for spawning child processes. It allows you to run other programs or scripts from within your Node.js application."
//     },
//     {
//         question: "57. How can you handle asynchronous control flow in Node.js?",
//         answer: "You can handle asynchronous control flow in Node.js using techniques like callbacks, Promises, async/await, or control flow libraries like `async` or `q`. These help to manage the order of execution and handle dependencies between asynchronous tasks."
//     },
//     {
//         question: "58. What is the purpose of the `url` module in Node.js?",
//         answer: "The `url` module in Node.js provides functions for working with URLs. It allows you to parse URLs, extract components like hostname or query parameters, and construct or format URLs."
//     },
//     {
//         question: "59. What is the purpose of the `os` module in Node.js?",
//         answer: "The `os` module in Node.js provides functions for interacting with the operating system. It allows you to get information about the system's architecture, network interfaces, CPU usage, memory, and other system-related details."
//     },
//     {
//         question: "60. How can you schedule tasks or cron jobs in Node.js?",
//         answer: "You can schedule tasks or cron jobs in Node.js using libraries like `node-cron` or `node-schedule`. These libraries provide an easy way to define recurring tasks or schedule jobs at specific times."
//     },
//     {
//         question: "61. What is the purpose of the `querystring` module in Node.js?",
//         answer: "The `querystring` module in Node.js provides functions for working with query strings. It allows you to parse query strings, stringify objects into query strings, and perform URL encoding and decoding."
//     },
//     {
//         question: "62. What is the purpose of the `http` module in Node.js?",
//         answer: "The `http` module in Node.js provides functionality for creating HTTP servers and clients. It allows you to handle HTTP requests, send requests to other servers, and interact with HTTP headers and status codes."
//     },
//     {
//         question: "63. What is the purpose of the `https` module in Node.js?",
//         answer: "The `https` module in Node.js provides similar functionality as the `http` module but for HTTPS (HTTP over SSL/TLS) connections. It allows you to create HTTPS servers and clients, handle secure communication, and work with SSL/TLS certificates."
//     },
//     {
//         question: "64. What is the purpose of the `zlib` module in Node.js?",
//         answer: "The `zlib` module in Node.js provides compression and decompression functionality. It allows you to compress or decompress data using gzip, deflate, or other compression algorithms."
//     },
//     {
//         question: "65. What is the purpose of the `dgram` module in Node.js?",
//         answer: "The `dgram` module in Node.js provides UDP (User Datagram Protocol) functionality. It allows you to create UDP sockets, send and receive UDP datagrams, and handle UDP multicast or broadcast."
//     },
//     {
//         question: "66. What is the purpose of the `tty` module in Node.js?",
//         answer: "The `tty` module in Node.js provides functionality related to terminal input and output. It allows you to interact with the terminal, read input, handle keyboard events, and control the cursor."
//     },
//     {
//         question: "67. Difference between Winston and morgan?",
//         answer: "Use Winston for general logging needs, where you need flexible and customizable logging capabilities for different parts of your application. Use Morgan when you want to specifically log HTTP requests in an Express.js application."
//     }
// ];

// const apiQuestions = [
//     {
//         question: "1. What is an API?",
//         answer: "API (Application Programming Interface) allows two systems to talk to each other by sending and receiving data."
//     },
//     {
//         question: "2. What is REST API?",
//         answer: "REST API uses HTTP methods to access resources via URLs. It follows stateless communication and supports CRUD operations."
//     },
//     {
//         question: "3. Difference between PUT and PATCH?",
//         answer: "PUT replaces the entire resource, while PATCH updates only specific fields in the resource."
//     },
//     {
//         question: "4. What are common HTTP status codes?",
//         answer: "200: OK, 201: Created, 400: Bad Request, 401: Unauthorized, 404: Not Found, 500: Server Error."
//     },
//     {
//         question: "5. What is authentication and authorization?",
//         answer: "Authentication verifies identity, Authorization defines access rights after successful authentication."
//     },
//     {
//         question: "6. What is CORS?",
//         answer: "CORS (Cross-Origin Resource Sharing) controls access to resources from different domains to enhance security."
//     },
//     {
//         question: "7. What is a middleware in API?",
//         answer: "Middleware functions run before the final request handler, useful for authentication, logging, etc."
//     },
//     {
//         question: "8. What is rate limiting?",
//         answer: "Rate limiting controls how many requests a client can make in a specific time to avoid overloading the server."
//     },
//     {
//         question: "9. What is the use of headers?",
//         answer: "Headers provide metadata like content type, authentication tokens, and API version information."
//     },
//     {
//         question: "10. Difference between public and private APIs?",
//         answer: "Public APIs are open to all developers, private APIs are restricted to internal or authorized users only."
//     },
//     {
//         question: "11. What is JSON?",
//         answer: "JSON (JavaScript Object Notation) is a lightweight data format used for storing and transporting data in APIs."
//     },
//     {
//         question: "12. Why use versioning in API?",
//         answer: "API versioning allows backward compatibility when changes are made to the API structure or response format."
//     },
//     {
//         question: "13. What is a query parameter?",
//         answer: "Query parameters are key-value pairs in URL used to send extra data with GET requests, like <code>?page=2</code>."
//     },
//     {
//         question: "14. What is a request body?",
//         answer: "Request body is used to send data to the server in POST, PUT, or PATCH requests, usually in JSON format."
//     },
//     {
//         question: "15. How does a GET differ from POST?",
//         answer: "GET is used to retrieve data, POST is used to send data to the server for creation or processing."
//     },
//     {
//         question: "16. What is JWT?",
//         answer: "JWT (JSON Web Token) is a secure way to transmit information between parties as a JSON object, commonly used for authentication."
//     },
//     {
//         question: "17. What is OAuth2?",
//         answer: "OAuth2 is an authorization framework that allows third-party applications to access user data without exposing credentials."
//     },
//     {
//         question: "18. What is the difference between REST and GraphQL?",
//         answer: "REST uses fixed endpoints and multiple calls, GraphQL uses a single endpoint and lets clients request specific data they need."
//     },
//     {
//         question: "19. How to secure an API?",
//         answer: "Use HTTPS, authentication (JWT/OAuth), input validation, rate limiting, API keys, and CORS policies."
//     },
//     {
//         question: "20. What is throttling in APIs?",
//         answer: "Throttling limits the number of requests a user can make to prevent abuse and manage traffic efficiently."
//     },
//     {
//         question: "21. What is the difference between synchronous and asynchronous APIs?",
//         answer: "Synchronous APIs wait for a response before continuing. Asynchronous APIs allow other tasks while waiting for a response."
//     },
//     {
//         question: "22. What do you use for HTTP logging in APIs?",
//         answer: "For HTTP logging in APIs, popular tools include middleware like <code>morgan</code> in Node.js or logging libraries like <code>winston</code> for logging request and response details, which helps in monitoring and debugging API performance and errors."
//     },
//     {
//         question: "23. What is HATEOAS in REST API?",
//         answer: "HATEOAS (Hypermedia as the Engine of Application State) provides dynamic links with responses to guide client interactions."
//     },
//     {
//         question: "24. How does API gateway work?",
//         answer: "An API Gateway acts as a reverse proxy, routing client requests to the right services and handling cross-cutting concerns like logging, auth, and throttling."
//     },
//     {
//         question: "25. What is an idempotent method?",
//         answer: "An idempotent HTTP method (like GET, PUT, DELETE) returns the same result even if called multiple times."
//     },
//     {
//         question: "26. Why do we need different HTTP methods if we can use POST for everything?",
//         answer: "Different HTTP methods (GET, POST, PUT, DELETE) follow RESTful principles. They help organize and standardize APIs. For example: GET is used to retrieve data, POST to create, PUT to update, and DELETE to remove. Using them correctly improves clarity, security, and code maintainability."
//     },
//     {
//         question: "27. What is the difference between request params, query, and body in an API?",
//         answer: "Params are used in the URL (e.g., /users/{id}), query parameters are appended to the URL (e.g., <code>?search=abc</code>), and body contains data sent with the HTTP request, often used for POST or PUT methods."
//     },
//     {
//         question: "28. How do you update data from a third-party API in your project?",
//         answer: "To update data from a third-party API, you first call their endpoint using HTTP requests (GET/POST/PUT) and then update your database with the response data."
//     },
//     {
//         question: "29. How to reduce API response time?",
//         answer: "Optimize database queries, use caching, compress data, reduce payload size, use load balancing, and implement pagination for large datasets."
//     },
//     {
//         question: "30. What are the common strategies for handling third-party API errors?",
//         answer: "Implement retries, fallback mechanisms, logging, and graceful error handling. Use circuit breakers to prevent cascading failures."
//     },
//     {
//         question: "31. How to handle rate limiting in an API?",
//         answer: "Implement rate limiting by setting request limits per minute/hour for each user or IP. Return appropriate 429 Too Many Requests status when the limit is exceeded."
//     },
//     {
//         question: "32. What is the difference between synchronous and asynchronous communication with APIs?",
//         answer: "Synchronous communication waits for the API response before continuing the process. Asynchronous communication doesn't block and proceeds while waiting for the response, often using callbacks or Promises."
//     },
//     {
//         question: "33. What is the importance of API versioning?",
//         answer: "API versioning ensures backward compatibility by allowing developers to make updates without breaking existing clients. Methods include URL versioning (e.g., /api/v1) or header versioning."
//     },
//     {
//         question: "34. What is the role of caching in API performance?",
//         answer: "Caching reduces response time and load on the server by storing frequently accessed data. Common strategies include in-memory caching (Redis) or CDN caching."
//     },
//     {
//         question: "35. What is the role of API documentation?",
//         answer: "API documentation provides developers with detailed information on how to interact with the API. It includes endpoints, request parameters, expected responses, and error codes."
//     },
//     {
//         question: "36. How do you handle pagination in APIs?",
//         answer: "Pagination is handled by providing parameters like 'limit' and 'offset' or 'page' in the query. This allows the client to request smaller chunks of data, reducing server load."
//     },
//     {
//         question: "37. How do you ensure API reliability and uptime?",
//         answer: "API reliability is ensured by using redundant infrastructure, load balancing, automatic failover, monitoring tools, and proper error handling."
//     }
// ]

// const reactQuestions = [
//     {
//         question: "1. What is React?",
//         answer: "React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create large web applications that can change data without reloading the page."
//     },
//     {
//         question: "2. What are components in React?",
//         answer: "Components are the building blocks of a React application. They are reusable pieces of UI that can be composed to create complex interfaces."
//     },
//     {
//         question: "3. What is JSX?",
//         answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML elements in JavaScript and place them in the DOM without using functions like createElement."
//     },
//     {
//         question: "4. What is the difference between a functional component and a class component?",
//         answer: "Functional components are simpler and are defined as JavaScript functions, while class components are ES6 classes that extend React.Component and can hold state and lifecycle methods."
//     },
//     {
//         question: "5. What is state in React?",
//         answer: "State is a built-in object that stores property values that belong to a component. When the state changes, the component re-renders."
//     },
//     {
//         question: "6. What is props in React?",
//         answer: "Props (short for properties) are read-only attributes passed from a parent component to a child component. They allow data to flow through the component tree."
//     },
//     {
//         question: "7. What is the virtual DOM?",
//         answer: "The virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize rendering by only updating parts of the DOM that have changed."
//     },
//     {
//         question: "8. What is the purpose of keys in React?",
//         answer: "Keys help React identify which items have changed, are added, or are removed. They should be unique among siblings to ensure efficient updates."
//     },
//     {
//         question: "9. What is lifting state up in React?",
//         answer: "Lifting state up is a technique where you move the state from a child component to a parent component to share data between sibling components."
//     },
//     {
//         question: "10. What are controlled components?",
//         answer: "Controlled components are form elements whose value is controlled by React state. The component's state is the single source of truth for the input value."
//     },
//     {
//         question: "11. How do you create a React component?",
//         answer: "There are two ways to create components: Functional Component: function Greeting(props) { return <h1>Hello, {props.name}</h1>; } Class Component: class Greeting extends React.Component { render() { return <h1>Hello, {this.props.name}</h1>; } }"
//     },
//     {
//         question: "12. What are React lifecycle methods?",
//         answer: "Class components have lifecycle methods that run at specific times: Mounting: constructor(), render(), componentDidMount() Updating: shouldComponentUpdate(), render(), componentDidUpdate() Unmounting: componentWillUnmount()"
//     },
//     {
//         question: "13. How do you handle events in React?",
//         answer: "React events are named using camelCase and you pass functions as event handlers: function Button() { function handleClick() { alert('Button clicked'); } return (<button onClick={handleClick}>Click me</button>); }"
//     },
//     {
//         question: "14. What are keys in React and why are they important?",
//         answer: "Keys help React identify which items have changed, are added, or are removed. They should be given to elements inside arrays: function List(props) { const items = props.items.map((item) => <li key={item.id}>{item.name}</li>); return <ul>{items}</ul>; }"
//     },
//     {
//         question: "15. How do you conditionally render in React?",
//         answer: "Several ways to conditionally render: If statement: function Greeting({ isLoggedIn }) { if (isLoggedIn) { return <User Greeting />; } return <GuestGreeting />; } Ternary operator: {isLoggedIn ? <User Greeting /> : <GuestGreeting />} Logical && operator: {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}"
//     },
//     {
//         question: "16. What is the purpose of the useState hook?",
//         answer: "The useState hook allows you to add state to functional components. It returns an array with the current state and a function to update it."
//     },
//     {
//         question: "17. What is the useEffect hook?",
//         answer: "The useEffect hook allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM."
//     },
//     {
//         question: "18. What is the difference between useEffect and useLayoutEffect?",
//         answer: "useEffect runs after the render is committed to the screen, while useLayoutEffect runs synchronously after all DOM mutations. Use useLayoutEffect for reading layout from the DOM and synchronously re-rendering."
//     },
//     {
//         question: "19. What is the useRef hook?",
//         answer: "The useRef hook returns a mutable ref object whose current property is initialized to the passed argument. It can be used to access DOM elements directly."
//     },
//     {
//         question: "20. What is the purpose of the useContext hook?",
//         answer: "The useContext hook allows you to access the context value directly in functional components without needing to wrap them in a Context.Consumer."
//     },
//     {
//         question: "21. What is the Context API?",
//         answer: "The Context API provides a way to pass data through the component tree without manually passing props down at every level. It is useful for global data like themes or user authentication."
//     },
//     {
//         question: "22. How do you create a context?",
//         answer: "const MyContext = React.createContext(defaultValue);"
//     },
//     {
//         question: "23. How do you provide a context value?",
//         answer: "<MyContext.Provider value={/* some value */}> {/* children */} </MyContext.Provider>"
//     },
//     {
//         question: "24. How do you consume a context value?",
//         answer: "const value = useContext(MyContext);"
//     },
//     {
//         question: "25. What is prop drilling?",
//         answer: "Prop drilling is the process of passing data from a parent component to a deeply nested child component through multiple layers of components, which can make the code harder to maintain."
//     },
//     {
//         question: "26. What is a higher-order component (HOC)?",
//         answer: "A higher-order component is a function that takes a component and returns a new component, allowing you to reuse component logic."
//     },
//     {
//         question: "27. How do you create a higher-order component?",
//         answer: "function withExtraInfo(WrappedComponent) { return function EnhancedComponent(props) { return <WrappedComponent {...props} extraProp='value' />; }; }"
//     },
//     {
//         question: "28. What is the purpose of the React.Fragment?",
//         answer: "React.Fragment allows you to group multiple elements without adding extra nodes to the DOM. It can be used to return multiple elements from a component."
//     },
//     {
//         question: "29. What is the purpose of the key prop in lists?",
//         answer: "The key prop helps React identify which items have changed, are added, or are removed. It should be unique among siblings to ensure efficient updates."
//     },
//     {
//         question: "30. How do you handle forms in React?",
//         answer: "Forms in React can be handled using controlled components, where the form data is managed by the component's state. You can use the onChange event to update the state."
//     },
//     {
//         question: "31. What is the purpose of the shouldComponentUpdate lifecycle method?",
//         answer: "The shouldComponentUpdate method allows you to optimize performance by preventing unnecessary re-renders. It returns a boolean indicating whether the component should update."
//     },
//     {
//         question: "32. What is the purpose of the componentDidMount lifecycle method?",
//         answer: "The componentDidMount method is called after a component is mounted. It is commonly used for data fetching or setting up subscriptions."
//     },
//     {
//         question: "33. What is the purpose of the componentDidUpdate lifecycle method?",
//         answer: "The componentDidUpdate method is called after a component updates. It can be used to perform actions based on changes in props or state."
//     },
//     {
//         question: "34. What is the purpose of the componentWillUnmount lifecycle method?",
//         answer: "The componentWillUnmount method is called just before a component is unmounted and destroyed. It is used for cleanup, such as canceling network requests or removing event listeners."
//     },
//     {
//         question: "35. What is the purpose of the getDerivedStateFromProps lifecycle method?",
//         answer: "The getDerivedStateFromProps method allows you to update the state based on changes in props. It is called right before rendering and can return an object to update the state."
//     },
//     {
//         question: "36. What is the purpose of the getSnapshotBeforeUpdate lifecycle method?",
//         answer: "The getSnapshotBeforeUpdate method allows you to capture some information from the DOM (e.g., scroll position) before it is potentially changed. It returns a value that can be passed to componentDidUpdate."
//     },
//     {
//         question: "37. What is the purpose of error boundaries in React?",
//         answer: "Error boundaries are components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app."
//     },
//     {
//         question: "38. How do you create an error boundary?",
//         answer: "class ErrorBoundary extends React.Component { constructor(props) { super(props); this.state = { hasError: false }; } static getDerivedStateFromError(error) { return { hasError: true }; } componentDidCatch(error, info) { console.log(error, info); } render() { if (this.state.hasError) { return <h1>Something went wrong.</h1>; } return this.props.children; } }"
//     },
//     {
//         question: "39. What is the purpose of React.StrictMode?",
//         answer: "React.StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants, helping to identify unsafe lifecycles, legacy API usage, and other issues."
//     },
//     {
//         question: "40. What is the purpose of React DevTools?",
//         answer: "React DevTools is a browser extension that allows you to inspect the React component hierarchy, view props and state, and debug performance issues in your React applications."
//     },
//     {
//         question: "41. What are the rules of Hooks?",
//         answer: "Two main rules: 1. Only call Hooks at the top level (not inside loops, conditions, or nested functions) 2. Only call Hooks from React function components or custom Hooks. React relies on the order in which Hooks are called, so they must be called consistently."
//     },
//     {
//         question: "42. How to use useEffect for data fetching?",
//         answer: "function UserProfile({ userId }) { const [user, setUser ] = useState(null); const [loading, setLoading] = useState(true); useEffect(() => { async function fetchUser () { const response = await fetch(`/api/users/${userId}`); const data = await response.json(); setUser (data); setLoading(false); } fetchUser (); return () => { /* Cleanup function */ }; }, [userId]); if (loading) return <div>Loading...</div>; return <div>{user.name}</div>; }"
//     },
//     {
//         question: "43. How to create a custom Hook?",
//         answer: "A custom Hook is a JavaScript function whose name starts with 'use' and may call other Hooks: function useLocalStorage(key, initialValue) { const [value, setValue] = useState(() => { const storedValue = localStorage.getItem(key); return storedValue !== null ? JSON.parse(storedValue) : initialValue; }); useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]); return [value, setValue]; }"
//     },
//     {
//         question: "44. What is the useCallback hook?",
//         answer: "The useCallback hook returns a memoized callback function. It is useful for optimizing performance by preventing unnecessary re-creations of functions on every render."
//     },
//     {
//         question: "45. What is the useMemo hook?",
//         answer: "The useMemo hook returns a memoized value. It is useful for optimizing performance by preventing expensive calculations on every render."
//     },
//     {
//         question: "46. How do you manage side effects in functional components?",
//         answer: "Side effects in functional components can be managed using the useEffect hook. It allows you to perform operations like data fetching, subscriptions, or manually changing the DOM after the component renders."
//     },
//     {
//         question: "47. What is the purpose of the useImperativeHandle hook?",
//         answer: "The useImperativeHandle hook customizes the instance value that is exposed when using ref in parent components. It is used with forwardRef to control the instance value."
//     },
//     {
//         question: "48. How do you handle multiple state variables in a functional component?",
//         answer: "You can use multiple useState hooks to manage different state variables independently: const [count, setCount] = useState(0); const [name, setName] = useState('');"
//     },
//     {
//         question: "49. What is the purpose of the useDebugValue hook?",
//         answer: "The useDebugValue hook is used to display a label for custom hooks in React DevTools, helping developers understand the state of the hook during debugging."
//     },
//     {
//         question: "50. How do you optimize performance in React applications?",
//         answer: "Performance can be optimized by using techniques such as memoization with React.memo, useMemo, and useCallback, as well as code-splitting and lazy loading components."
//     },
//     {
//         question: "51. What is the purpose of the React Router?",
//         answer: "React Router is a library for routing in React applications. It allows you to create single-page applications with navigation and dynamic routing."
//     },
//     {
//         question: "52. How do you set up React Router?",
//         answer: "import { BrowserRouter, Route, Switch } from 'react-router-dom'; function App() { return (<BrowserRouter><Switch><Route path='/' component={Home} /><Route path='/about' component={About} /></Switch></BrowserRouter>); }"
//     },
//     {
//         question: "53. What is the purpose of the Switch component in React Router?",
//         answer: "The Switch component renders the first child Route that matches the location. It is used to group Route components and ensure that only one route is rendered at a time."
//     },
//     {
//         question: "54. How do you create a dynamic route in React Router?",
//         answer: "<Route path='/user/:id' component={User } /> You can access the dynamic segment using props.match.params.id in the component."
//     },
//     {
//         question: "55. How do you redirect in React Router?",
//         answer: "import { Redirect } from 'react-router-dom'; function MyComponent() { return <Redirect to='/login' />; }"
//     },
//     {
//         question: "56. What is the purpose of the Link component in React Router?",
//         answer: "The Link component is used to create navigational links in React Router. It allows you to navigate to different routes without reloading the page."
//     },
//     {
//         question: "57. How do you pass props to a route component in React Router?",
//         answer: "<Route path='/user' render={(props) => <User  {...props} extraProp='value' />} />"
//     },
//     {
//         question: "58. What is the purpose of the useHistory hook?",
//         answer: "The useHistory hook gives you access to the history instance used by React Router. It allows you to programmatically navigate, go back, or go forward in the history stack."
//     },
//     {
//         question: "59. How do you handle 404 pages in React Router?",
//         answer: "<Route component={NotFound} /> Place this route at the end of your routes to catch all unmatched paths."
//     },
//     {
//         question: "60. What is Redux?",
//         answer: "Redux is a state management library for JavaScript applications. It provides a centralized store for managing application state and follows a unidirectional data flow."
//     },
//     {
//         question: "61. What are the core principles of Redux?",
//         answer: "1. Single source of truth: The state of your whole application is stored in an object tree within a single store. 2. State is read-only: The only way to change the state is to emit an action, an object describing what happened. 3. Changes are made with pure functions: To specify how the state tree is transformed by actions, you write pure reducers."
//     },
//     {
//         question: "62. How do you create a Redux store?",
//         answer: "import { createStore } from 'redux'; const store = createStore(rootReducer);"
//     },
//     {
//         question: "63. What is an action in Redux?",
//         answer: "An action is a plain JavaScript object that describes a change in the application state. It must have a type property that indicates the type of action being performed."
//     },
//     {
//         question: "64. What is a reducer in Redux?",
//         answer: "A reducer is a pure function that takes the previous state and an action as arguments and returns the next state. It specifies how the application's state changes in response to actions."
//     },
//     {
//         question: "65. How do you dispatch an action in Redux?",
//         answer: "store.dispatch(action);"
//     },
//     {
//         question: "66. How do you connect a React component to Redux?",
//         answer: "You can use the connect function from react-redux to connect a React component to the Redux store."
//     },
//     {
//         question: "67. What is the purpose of the Provider component in Redux?",
//         answer: "The Provider component makes the Redux store available to any nested components that need to access the Redux store. It should wrap your application at the top level."
//     },
//     {
//         question: "68. What is middleware in Redux?",
//         answer: "Middleware is a way to extend Redux with custom functionality. It provides a third-party extension point between dispatching an action and the moment it reaches the reducer."
//     },
//     {
//         question: "69. How do you apply middleware in Redux?",
//         answer: "import { applyMiddleware, createStore } from 'redux'; const store = createStore(rootReducer, applyMiddleware(thunk));"
//     },
//     {
//         question: "70. What is Redux Thunk?",
//         answer: "Redux Thunk is a middleware that allows you to write action creators that return a function instead of an action. This is useful for handling asynchronous actions."
//     },
//     {
//         question: "71. How do you handle asynchronous actions in Redux?",
//         answer: "const fetchData = () => { return async (dispatch) => { const response = await fetch('/api/data'); const data = await response.json(); dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data }); }; };"
//     },
//     {
//         question: "72. What is the purpose of the combineReducers function in Redux?",
//         answer: "The combineReducers function is used to combine multiple reducers into a single reducer function. This allows you to manage different parts of the state tree separately."
//     },
//     {
//         question: "73. What is the purpose of the Redux DevTools?",
//         answer: "Redux DevTools is a browser extension that allows you to inspect every action and state change in your Redux store. It helps in debugging and tracking the state of your application."
//     },
//     {
//         question: "74. How do you enable Redux DevTools in your application?",
//         answer: "const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());"
//     },
//     {
//         question: "75. What is the purpose of the connect function in Redux?",
//         answer: "The connect function connects a React component to the Redux store. It allows you to map state and dispatch to the component's props."
//     },
//     {
//         question: "76. What is the purpose of the mapStateToProps function?",
//         answer: "The mapStateToProps function allows you to specify which pieces of the Redux state you want to pass as props to your component. It takes the entire state as an argument and returns an object containing the desired state properties."
//     },
//     {
//         question: "77. What is the purpose of the mapDispatchToProps function?",
//         answer: "The mapDispatchToProps function allows you to specify which action creators you want to expose as props to your component. It can return an object or a function."
//     },
//     {
//         question: "78. What is the purpose of the Redux Toolkit?",
//         answer: "The Redux Toolkit is the official, recommended way to write Redux logic. It provides a set of tools and best practices to simplify the process of writing Redux applications."
//     },
//     {
//         question: "79. How do you create a slice in Redux Toolkit?",
//         answer: "import { createSlice } from '@reduxjs/toolkit'; const counterSlice = createSlice({ name: 'counter', initialState: { count: 0 }, reducers: { increment: state => { state.count += 1; }, decrement: state => { state.count -= 1; }, }, }); export const { increment, decrement } = counterSlice.actions; export default counterSlice.reducer;"
//     },
//     {
//         question: "80. How do you optimize rendering performance in React?",
//         answer: "To optimize rendering performance, you can use techniques such as React.memo, useMemo, useCallback, and code-splitting. Additionally, avoid unnecessary state updates and re-renders."
//     },
//     {
//         question: "81. How does React.memo work?",
//         answer: "React.memo is a higher-order component that memoizes the rendered output. It prevents unnecessary re-renders when props haven't changed."
//     },
//     {
//         question: "82. When to use useMemo?",
//         answer: "useMemo memoizes expensive calculations. Use it when you need to optimize expensive calculations that don't need to run on every render."
//     },
//     {
//         question: "83. When to use useCallback?",
//         answer: "useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed."
//     },
//     {
//         question: "84. What is the purpose of the React Profiler?",
//         answer: "The React Profiler is a tool that helps you measure the performance of your React application. It allows you to see how often a component renders and what causes it to render."
//     },
//     {
//         question: "85. How do you optimize rendering performance in React?",
//         answer: "To optimize rendering performance, you can use techniques such as React.memo, useMemo, useCallback, and code-splitting. Additionally, avoid unnecessary state updates and re-renders."
//     },
//     {
//         question: "86. What is code-splitting in React?",
//         answer: "Code-splitting is a technique that allows you to split your code into smaller chunks, which can be loaded on demand. This improves the initial load time of your application."
//     },
//     {
//         question: "87. How do you implement lazy loading in React?",
//         answer: "const LazyComponent = React.lazy(() => import('./LazyComponent')); function App() { return (<React.Suspense fallback={<div>Loading...</div>}><LazyComponent /></React.Suspense>); }"
//     },
//     {
//         question: "88. What is the purpose of React.StrictMode?",
//         answer: "React.StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants, helping to identify unsafe lifecycles, legacy API usage, and other issues."
//     },
//     {
//         question: "89. How do you measure performance in React?",
//         answer: "You can measure performance using the React Profiler, which provides insights into component rendering times, or by using browser performance tools to analyze load times and rendering performance."
//     },
//     {
//         question: "90. What is the purpose of the useTransition hook?",
//         answer: "The useTransition hook allows you to mark updates as transitions, enabling React to keep the UI responsive during state updates that may take longer to process."
//     },
//     {
//         question: "91. What is the purpose of the useDeferredValue hook?",
//         answer: "The useDeferredValue hook allows you to defer updating a value until the browser is idle, which can help keep the UI responsive during heavy updates."
//     },
//     {
//         question: "92. How do you handle performance issues in React applications?",
//         answer: "Performance issues can be handled by profiling components, optimizing rendering with memoization, using lazy loading, and minimizing unnecessary re-renders."
//     },
//     {
//         question: "93. What is the purpose of the React Profiler API?",
//         answer: "The React Profiler API allows you to measure the performance of your React application by tracking how often a component renders and what causes it to render."
//     },
//     {
//         question: "94. How do you use the Profiler component?",
//         answer: "import { Profiler } from 'react'; function onRender(id, phase, actualDuration) { console.log({ id, phase, actualDuration }); } function App() { return (<Profiler id='App' onRender={onRender}>{/* Your components */}</Profiler>); }"
//     },
//     {
//         question: "95. What is the purpose of the React.memo function?",
//         answer: "React.memo is a higher-order component that memoizes the rendered output of a component, preventing unnecessary re-renders when the props have not changed."
//     },
//     {
//         question: "96. How do you optimize images in a React application?",
//         answer: "Images can be optimized by using formats like WebP, lazy loading images, and using responsive images with the srcset attribute or picture element."
//     },
//     {
//         question: "97. What is the purpose of the useLayoutEffect hook?",
//         answer: "The useLayoutEffect hook is similar to useEffect, but it runs synchronously after all DOM mutations. It is useful for reading layout from the DOM and synchronously re-rendering."
//     },
//     {
//         question: "98. How do you prevent memory leaks in React?",
//         answer: "Memory leaks can be prevented by cleaning up subscriptions, timers, and event listeners in the useEffect cleanup function or in the componentWillUnmount lifecycle method."
//     },
//     {
//         question: "99. What is the purpose of the useDebugValue hook?",
//         answer: "The useDebugValue hook is used to display a label for custom hooks in React DevTools, helping developers understand the state of the hook during debugging."
//     },
//     {
//         question: "100. How do you handle errors in React applications?",
//         answer: "Errors can be handled using error boundaries, try-catch blocks, and by implementing global error handling strategies to catch and log errors."
//     },
// ]

// const javaQuestions = [
//     {
//         question: "1. What is Java?",
//         answer: "Java is a high-level, object-oriented programming language developed by Sun Microsystems. It is designed to be platform-independent, allowing developers to write code once and run it anywhere."
//     },
//     {
//         question: "2. What are the main features of Java?",
//         answer: "The main features of Java include platform independence, object-oriented, robust, secure, multithreaded, and high performance."
//     },
//     {
//         question: "3. What is the Java Virtual Machine (JVM)?",
//         answer: "The JVM is an abstract machine that enables a computer to run Java programs. It converts Java bytecode into machine code."
//     },
//     {
//         question: "4. What is the difference between JDK, JRE, and JVM?",
//         answer: "JDK (Java Development Kit) is a software development kit for developing Java applications. JRE (Java Runtime Environment) is a part of the JDK that provides the libraries and JVM to run Java applications. JVM (Java Virtual Machine) is the engine that executes Java bytecode."
//     },
//     {
//         question: "5. What is a class in Java?",
//         answer: "A class in Java is a blueprint for creating objects. It defines the properties (attributes) and behaviors (methods) that the objects created from the class will have."
//     },
//     {
//         question: "6. What is an object in Java?",
//         answer: "An object is an instance of a class. It contains state (attributes) and behavior (methods) defined by its class."
//     },
//     {
//         question: "7. What is inheritance in Java?",
//         answer: "Inheritance is a mechanism in Java where one class can inherit the properties and methods of another class. It promotes code reusability."
//     },
//     {
//         question: "8. What is polymorphism in Java?",
//         answer: "Polymorphism is the ability of an object to take on many forms. In Java, it can be achieved through method overloading and method overriding."
//     },
//     {
//         question: "9. What is encapsulation in Java?",
//         answer: "Encapsulation is the bundling of data (attributes) and methods that operate on that data into a single unit, or class. It restricts direct access to some of the object's components."
//     },
//     {
//         question: "10. What is abstraction in Java?",
//         answer: "Abstraction is the concept of hiding the complex implementation details and showing only the essential features of an object."
//     },
//     {
//         question: "11. What is an interface in Java?",
//         answer: "An interface in Java is a reference type that can contain only constants, method signatures, default methods, static methods, and nested types. Interfaces cannot contain instance fields."
//     },
//     {
//         question: "12. What is an abstract class in Java?",
//         answer: "An abstract class is a class that cannot be instantiated and may contain abstract methods (methods without a body) as well as concrete methods."
//     },
//     {
//         question: "13. What is the difference between an interface and an abstract class?",
//         answer: "An interface can only contain method signatures and final variables, while an abstract class can have method implementations and instance variables. A class can implement multiple interfaces but can inherit from only one abstract class."
//     },
//     {
//         question: "14. What is method overloading?",
//         answer: "Method overloading is a feature that allows a class to have more than one method with the same name, as long as the parameter lists are different."
//     },
//     {
//         question: "15. What is method overriding?",
//         answer: "Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass."
//     },
//     {
//         question: "16. What is the 'final' keyword in Java?",
//         answer: "The 'final' keyword is used to declare constants, prevent method overriding, and prevent inheritance of classes."
//     },
//     {
//         question: "17. What is the 'static' keyword in Java?",
//         answer: "The 'static' keyword is used to indicate that a particular member belongs to the class rather than instances of the class. Static members can be accessed without creating an instance of the class."
//     },
//     {
//         question: "18. What is a constructor in Java?",
//         answer: "A constructor is a special method that is called when an object is instantiated. It initializes the object's attributes."
//     },
//     {
//         question: "19. What is the difference between a constructor and a method?",
//         answer: "A constructor is called when an object is created and does not have a return type, while a method is called to perform a specific task and has a return type."
//     },
//     {
//         question: "20. What is the 'this' keyword in Java?",
//         answer: "The 'this' keyword is a reference to the current object in a method or constructor. It is used to differentiate between instance variables and parameters with the same name."
//     },
//     {
//         question: "21. What is the purpose of the 'super' keyword?",
//         answer: "The 'super' keyword is used to refer to the superclass of the current object. It can be used to call superclass methods and constructors."
//     },
//     {
//         question: "22. What is exception handling in Java?",
//         answer: "Exception handling is a mechanism to handle runtime errors, allowing the program to continue its normal flow. It is done using try, catch, and finally blocks."
//     },
//     {
//         question: "23. What is the difference between checked and unchecked exceptions?",
//         answer: "Checked exceptions are exceptions that are checked at compile-time, while unchecked exceptions are checked at runtime. Checked exceptions must be declared in the method signature."
//     },
//     {
//         question: "24. What is the 'finally' block?",
//         answer: "The 'finally' block is used to execute important code such as closing resources, regardless of whether an exception is thrown or not."
//     },
//     {
//         question: "25. What is the purpose of the 'throw' keyword?",
//         answer: "The 'throw' keyword is used to explicitly throw an exception in Java."
//     },
//     {
//         question: "26. What is the purpose of the 'throws' keyword?",
//         answer: "The 'throws' keyword is used in method signatures to declare that a method may throw one or more exceptions."
//     },
//     {
//         question: "27. What is a Java package?",
//         answer: "A package is a namespace that organizes a set of related classes and interfaces. It helps avoid naming conflicts and can control access with protected and default access levels."
//     },
//     {
//         question: "28. How do you create a package in Java?",
//         answer: "To create a package, use the 'package' keyword at the top of your Java file, followed by the package name. For example: 'package com.example.myapp;'"
//     },
//     {
//         question: "29. What is the purpose of the 'import' statement?",
//         answer: "The 'import' statement is used to bring other classes or entire packages into visibility, allowing you to use them without fully qualifying their names."
//     },
//     {
//         question: "30. What is the Java Collections Framework?",
//         answer: "The Java Collections Framework is a set of classes and interfaces that implement commonly reusable collection data structures, such as lists, sets, and maps."
//     },
//     {
//         question: "31. What is the difference between List and Set?",
//         answer: "A List allows duplicate elements and maintains the order of insertion, while a Set does not allow duplicates and does not guarantee any specific order."
//     },
//     {
//         question: "32. What is the difference between ArrayList and LinkedList?",
//         answer: "ArrayList is backed by a dynamic array and provides fast random access, while LinkedList is backed by a doubly linked list and provides faster insertions and deletions."
//     },
//     {
//         question: "33. What is a Map in Java?",
//         answer: "A Map is an object that maps keys to values. It cannot contain duplicate keys, and each key can map to at most one value."
//     },
//     {
//         question: "34. What is the difference between HashMap and TreeMap?",
//         answer: "HashMap is an unordered collection that allows null values and is faster for lookups, while TreeMap is ordered and sorted based on the natural ordering of its keys."
//     },
//     {
//         question: "35. What is the purpose of the Iterator interface?",
//         answer: "The Iterator interface provides a way to traverse a collection without exposing its underlying representation. It allows you to iterate over elements in a collection."
//     },
//     {
//         question: "36. How do you sort a List in Java?",
//         answer: "You can sort a List using the Collections.sort() method. For example: Collections.sort(myList);"
//     },
//     {
//         question: "37. What is the purpose of the Comparable interface?",
//         answer: "The Comparable interface is used to define a natural ordering for objects. Classes that implement this interface must override the compareTo() method."
//     },
//     {
//         question: "38. What is the purpose of the Comparator interface?",
//         answer: "The Comparator interface is used to define a custom ordering for objects. It allows you to create multiple ways to compare objects by implementing the compare() method."
//     },
//     {
//         question: "39. What is a lambda expression in Java?",
//         answer: "A lambda expression is a concise way to represent an anonymous function that can be passed around as an argument or used to create functional interfaces."
//     },
//     {
//         question: "40. What is a functional interface?",
//         answer: "A functional interface is an interface that contains exactly one abstract method. It can have multiple default or static methods. Examples include Runnable and Callable."
//     },
//     {
//         question: "41. What is the Stream API in Java?",
//         answer: "The Stream API is a feature introduced in Java 8 that allows you to process sequences of elements (like collections) in a functional style, enabling operations like filtering, mapping, and reducing."
//     },
//     {
//         question: "42. How do you create a stream from a collection?",
//         answer: "You can create a stream from a collection using the stream() method. For example: myList.stream();"
//     },
//     {
//         question: "43. What is the purpose of the Optional class?",
//         answer: "The Optional class is a container object that may or may not contain a non-null value. It is used to avoid null references and provide a more expressive way to handle optional values."
//     },
//     {
//         question: "44. How do you handle null values using Optional?",
//         answer: "You can use methods like isPresent(), ifPresent(), or orElse() to handle values in an Optional. For example: Optional.ofNullable(value).ifPresent(v -> System.out.println(v));"
//     },
//     {
//         question: "45. What is the purpose of the synchronized keyword?",
//         answer: "The synchronized keyword is used to control access to a block of code or an object by multiple threads, ensuring that only one thread can execute the synchronized block at a time."
//     },
//     {
//         question: "46. What is a thread in Java?",
//         answer: "A thread is a lightweight process that can run concurrently with other threads. It is the smallest unit of processing that can be scheduled by the operating system."
//     },
//     {
//         question: "47. How do you create a thread in Java?",
//         answer: "You can create a thread by either extending the Thread class or implementing the Runnable interface. For example: new Thread(new MyRunnable()).start();"
//     },
//     {
//         question: "48. What is the difference between the start() and run() methods in a thread?",
//         answer: "The start() method creates a new thread and calls the run() method in that thread, while the run() method is just a normal method that can be called directly, which does not create a new thread."
//     },
//     {
//         question: "49. What is a deadlock in Java?",
//         answer: "A deadlock is a situation in which two or more threads are blocked forever, waiting for each other to release resources. It occurs when there is a circular dependency on resources."
//     },
//     {
//         question: "50. What is the purpose of the wait() and notify() methods?",
//         answer: "The wait() method causes the current thread to wait until another thread invokes notify() or notifyAll() on the same object, allowing for inter-thread communication."
//     },
//     {
//         question: "51. What is the Executor framework in Java?",
//         answer: "The Executor framework provides a high-level API for managing and controlling thread execution. It simplifies the process of creating and managing threads."
//     },
//     {
//         question: "52. What is the difference between Callable and Runnable?",
//         answer: "Runnable is a functional interface that does not return a result and cannot throw checked exceptions, while Callable can return a result and can throw checked exceptions."
//     },
//     {
//         question: "53. What is the purpose of the Future interface?",
//         answer: "The Future interface represents the result of an asynchronous computation. It provides methods to check if the computation is complete, retrieve the result, and cancel the computation."
//     },
//     {
//         question: "54. What is the Java Memory Model?",
//         answer: "The Java Memory Model defines how threads interact through memory and what behaviors are allowed in concurrent programming. It specifies how variables are read and written in a multithreaded environment."
//     },
//     {
//         question: "55. What is garbage collection in Java?",
//         answer: "Garbage collection is the process of automatically identifying and reclaiming memory that is no longer in use, helping to prevent memory leaks."
//     },
//     {
//         question: "56. What are the different types of garbage collectors in Java?",
//         answer: "Java has several types of garbage collectors, including the Serial Garbage Collector, Parallel Garbage Collector, Concurrent Mark-Sweep (CMS) Collector, and G1 Garbage Collector. Each has its own advantages and use cases."
//     },
//     {
//         question: "57. What is the purpose of the finalize() method?",
//         answer: "The finalize() method is called by the garbage collector before an object is reclaimed. It can be overridden to perform cleanup operations, but its use is generally discouraged in favor of try-with-resources."
//     },
//     {
//         question: "58. What is the difference between String, StringBuilder, and StringBuffer?",
//         answer: "String is immutable, meaning its value cannot be changed after creation. StringBuilder is mutable and not synchronized, making it faster for single-threaded operations. StringBuffer is also mutable but synchronized, making it thread-safe."
//     },
//     {
//         question: "59. How do you convert a String to an integer in Java?",
//         answer: `You can convert a String to an integer using the Integer.parseInt() method. For example: int number = Integer.parseInt("123");`
//     },
//     {
//         question: "60. What is the purpose of the 'static' block?",
//         answer: "A static block is used for static initialization of a class. It runs when the class is loaded and can be used to initialize static variables."
//     },
//     {
//         question: "61. What is the difference between == and .equals() in Java?",
//         answer: "The '==' operator checks for reference equality (whether two references point to the same object), while the .equals() method checks for value equality (whether two objects are logically equivalent)."
//     },
//     {
//         question: "62. What is the purpose of the 'volatile' keyword?",
//         answer: "The 'volatile' keyword is used to indicate that a variable's value will be modified by different threads. It ensures that the most recent value is always read from and written to the main memory."
//     },
//     {
//         question: "63. What is the purpose of the 'transient' keyword?",
//         answer: "The 'transient' keyword is used to indicate that a field should not be serialized when the object is converted to a byte stream. It is useful for sensitive information that should not be saved."
//     },
//     {
//         question: "64. What is serialization in Java?",
//         answer: "Serialization is the process of converting an object into a byte stream for storage or transmission. Deserialization is the reverse process of converting a byte stream back into an object."
//     },
//     {
//         question: "65. How do you implement serialization in Java?",
//         answer: "To implement serialization, a class must implement the Serializable interface. For example: public class MyClass implements Serializable { ... }"
//     },
//     {
//         question: "66. What is the purpose of the 'instanceof' operator?",
//         answer: "The 'instanceof' operator is used to test whether an object is an instance of a specific class or interface. It returns true or false."
//     },
//     {
//         question: "67. What is the difference between a shallow copy and a deep copy?",
//         answer: "A shallow copy creates a new object but copies references to the original object's fields, while a deep copy creates a new object and recursively copies all objects referenced by the original object."
//     },
//     {
//         question: "68. What is the purpose of the 'default' keyword in interfaces?",
//         answer: "The 'default' keyword allows you to define a default implementation for a method in an interface. This enables you to add new methods to interfaces without breaking existing implementations."
//     },
//     {
//         question: "69. What is the purpose of the 'static' method in an interface?",
//         answer: "Static methods in an interface can be called without an instance of the interface. They are used to provide utility methods related to the interface."
//     },
//     {
//         question: "70. What is the purpose of the 'native' keyword?",
//         answer: "The 'native' keyword is used to indicate that a method is implemented in native code, typically in C or C++, rather than in Java."
//     },
//     {
//         question: "71. What is the purpose of the 'assert' keyword?",
//         answer: "The 'assert' keyword is used to create an assertion, which is a statement that checks a condition at runtime. If the condition is false, an AssertionError is thrown."
//     },
//     {
//         question: "72. What is the purpose of the 'enum' keyword?",
//         answer: "The 'enum' keyword is used to define a set of named constants. Enums provide a way to define a variable that can hold a set of predefined values."
//     },
//     {
//         question: "73. What is the purpose of the 'synchronized' block?",
//         answer: "The 'synchronized' block is used to restrict access to a block of code or an object by multiple threads, ensuring that only one thread can execute the synchronized block at a time."
//     },
//     {
//         question: "74. What is the difference between a HashSet and a TreeSet?",
//         answer: "HashSet is an unordered collection that allows null values and is backed by a hash table, while TreeSet is a sorted collection that does not allow null values and is backed by a red-black tree."
//     },
//     {
//         question: "75. What is the purpose of the 'break' statement?",
//         answer: "The 'break' statement is used to exit a loop or switch statement prematurely."
//     },
//     {
//         question: "76. What is the purpose of the 'continue' statement?",
//         answer: "The 'continue' statement is used to skip the current iteration of a loop and proceed to the next iteration."
//     },
//     {
//         question: "77. What is the purpose of the 'return' statement?",
//         answer: "The 'return' statement is used to exit a method and optionally return a value to the caller."
//     },
//     {
//         question: "78. What is the purpose of the 'try-with-resources' statement?",
//         answer: "The 'try-with-resources' statement is used to automatically close resources such as files or database connections when they are no longer needed, ensuring proper resource management."
//     },
//     {
//         question: "79. What is the purpose of the 'switch' statement?",
//         answer: "The 'switch' statement is used to execute one block of code among multiple options based on the value of a variable."
//     },
//     {
//         question: "80. What is the purpose of the 'for-each' loop?",
//         answer: "The 'for-each' loop is used to iterate over elements in an array or collection without needing an index variable."
//     },
//     {
//         question: "81. What is the purpose of the 'static import' statement?",
//         answer: "The 'static import' statement allows you to access static members (fields and methods) of a class without qualifying them with the class name."
//     },
//     {
//         question: "82. What is the purpose of the 'volatile' keyword?",
//         answer: "The 'volatile' keyword indicates that a variable's value will be modified by different threads, ensuring that the most recent value is always read from and written to the main memory."
//     },
//     {
//         question: "83. What is the purpose of the 'synchronized' keyword?",
//         answer: "The 'synchronized' keyword is used to control access to a method or block of code by multiple threads, ensuring that only one thread can execute it at a time."
//     },
//     {
//         question: "84. What is the purpose of the 'assert' keyword?",
//         answer: "The 'assert' keyword is used to create assertions, which are conditions that you expect to be true during execution. If the condition is false, an AssertionError is thrown."
//     },
//     {
//         question: "85. What is the purpose of the 'instanceof' operator?",
//         answer: "The 'instanceof' operator is used to test whether an object is an instance of a specific class or interface, returning true or false."
//     },
//     {
//         question: "86. What is the purpose of the 'finalize()' method?",
//         answer: "The 'finalize()' method is called by the garbage collector before an object is reclaimed. It can be overridden to perform cleanup operations, but its use is generally discouraged."
//     },
//     {
//         question: "87. What is the purpose of the 'native' keyword?",
//         answer: "The 'native' keyword indicates that a method is implemented in native code, typically in C or C++, rather than in Java."
//     },
//     {
//         question: "88. What is the purpose of the 'default' keyword in interfaces?",
//         answer: "The 'default' keyword allows you to define a default implementation for a method in an interface, enabling you to add new methods without breaking existing implementations."
//     },
//     {
//         question: "89. What is the purpose of the 'static' keyword in Java?",
//         answer: "The 'static' keyword indicates that a member belongs to the class rather than instances of the class. Static members can be accessed without creating an instance of the class."
//     },
//     {
//         question: "90. What is the purpose of the 'transient' keyword?",
//         answer: "The 'transient' keyword is used to indicate that a field should not be serialized when the object is converted to a byte stream."
//     }
// ]

// const mySQLQuestions = [{
//     question: "1. What is MySQL?",
//     answer: "MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) to manage and manipulate databases."
// },
// {
//     question: "2. How do you create a database in MySQL?",
//     answer: "You can create a database using the `CREATE DATABASE` command: `CREATE DATABASE database_name;`."
// },
// {
//     question: "3. How do you select a database in MySQL?",
//     answer: "Use the `USE` command: `USE database_name;`."
// },
// {
//     question: "4. What is a primary key?",
//     answer: "A primary key is a unique identifier for a row in a table. It cannot contain NULL values and must be unique."
// },
// {
//     question: "5. How do you create a table in MySQL?",
//     answer: "Use the `CREATE TABLE` command: `CREATE TABLE table_name (column1 datatype, column2 datatype, ...);`."
// },
// {
//     question: "6. What is the difference between CHAR and VARCHAR?",
//     answer: "CHAR is fixed-length, while VARCHAR is variable-length. CHAR pads spaces to fill the length, whereas VARCHAR uses only the required space."
// },
// {
//     question: "7. How do you insert data into a table?",
//     answer: "Use the `INSERT INTO` command: `INSERT INTO table_name (column1, column2) VALUES (value1, value2);`."
// },
// {
//     question: "8. How do you update data in a table?",
//     answer: "Use the `UPDATE` command: `UPDATE table_name SET column1 = value1 WHERE condition;`."
// },
// {
//     question: "9. How do you delete data from a table?",
//     answer: "Use the `DELETE FROM` command: `DELETE FROM table_name WHERE condition;`."
// },
// {
//     question: "10. What is the SELECT statement used for?",
//     answer: "The SELECT statement retrieves data from one or more tables: `SELECT column1, column2 FROM table_name;`."
// },
// {
//     question: "11. What is the WHERE clause used for?",
//     answer: "The WHERE clause filters records based on a specified condition: `SELECT * FROM table_name WHERE condition;`."
// },
// {
//     question: "12. What is the difference between DELETE and TRUNCATE?",
//     answer: "DELETE removes rows one by one and can have a WHERE clause, while TRUNCATE removes all rows at once and resets auto-increment counters."
// },
// {
//     question: "13. What is a foreign key?",
//     answer: "A foreign key is a column that references the primary key of another table, establishing a relationship between two tables."
// },
// {
//     question: "14. How do you add a column to an existing table?",
//     answer: "Use the `ALTER TABLE` command: `ALTER TABLE table_name ADD column_name datatype;`."
// },
// {
//     question: "15. What is the ORDER BY clause used for?",
//     answer: "ORDER BY sorts the result set in ascending (ASC) or descending (DESC) order: `SELECT * FROM table_name ORDER BY column_name ASC;`."
// },
// {
//     question: "16. What is the GROUP BY clause used for?",
//     answer: "GROUP BY groups rows that have the same values into summary rows, often used with aggregate functions like COUNT, SUM, etc."
// },
// {
//     question: "17. What is the difference between COUNT(*) and COUNT(column_name)?",
//     answer: "COUNT(*) counts all rows, including NULLs, while COUNT(column_name) counts only non-NULL values in the specified column."
// },
// {
//     question: "18. What is the LIKE operator used for?",
//     answer: "LIKE is used for pattern matching with wildcards: `%` (zero or more characters) and `_` (single character)."
// },
// {
//     question: "19. What is the IN operator used for?",
//     answer: "IN allows specifying multiple values in a WHERE clause: `SELECT * FROM table_name WHERE column_name IN (value1, value2);`."
// },
// {
//     question: "20. What is a JOIN in MySQL?",
//     answer: "A JOIN combines rows from two or more tables based on a related column between them."
// },
// //Intermediate Level MySQL Questions:
// {
//     question: "21. What are the different types of JOINs in MySQL?",
//     answer: "MySQL supports INNER JOIN, LEFT JOIN (or LEFT OUTER JOIN), RIGHT JOIN (or RIGHT OUTER JOIN), and FULL JOIN (or FULL OUTER JOIN)."
// },
// {
//     question: "22. What is the difference between INNER JOIN and LEFT JOIN?",
//     answer: "INNER JOIN returns only matching rows from both tables, while LEFT JOIN returns all rows from the left table and matching rows from the right table (NULL if no match)."
// },
// {
//     question: "23. What is a self-join?",
//     answer: "A self-join is a join where a table is joined with itself, useful for querying hierarchical data or comparing rows within the same table."
// },
// {
//     question: "24. What is an index in MySQL?",
//     answer: "An index improves the speed of data retrieval operations by providing quick access to rows in a table."
// },
// {
//     question: "25. How do you create an index?",
//     answer: "Use the `CREATE INDEX` command: `CREATE INDEX index_name ON table_name (column_name);`."
// },
// {
//     question: "26. What is a composite index?",
//     answer: "A composite index is an index on multiple columns, improving query performance for conditions involving those columns."
// },
// {
//     question: "27. What is a stored procedure?",
//     answer: "A stored procedure is a precompiled collection of SQL statements stored in the database for reuse."
// },
// {
//     question: "28. How do you create a stored procedure?",
//     answer: "Use the `CREATE PROCEDURE` command: `CREATE PROCEDURE procedure_name() BEGIN ... END;`."
// },
// {
//     question: "29. What is a trigger in MySQL?",
//     answer: "A trigger is a set of SQL statements that automatically executes in response to a specific event (INSERT, UPDATE, DELETE) on a table."
// },
// {
//     question: "30. How do you create a trigger?",
//     answer: "Use the `CREATE TRIGGER` command: `CREATE TRIGGER trigger_name BEFORE/AFTER INSERT/UPDATE/DELETE ON table_name FOR EACH ROW BEGIN ... END;`."
// },
// {
//     question: "31. What is a view in MySQL?",
//     answer: "A view is a virtual table based on the result set of a SQL query, simplifying complex queries and enhancing security."
// },
// {
//     question: "32. How do you create a view?",
//     answer: "Use the `CREATE VIEW` command: `CREATE VIEW view_name AS SELECT column1, column2 FROM table_name WHERE condition;`."
// },
// {
//     question: "33. What is normalization?",
//     answer: "Normalization is the process of organizing data to minimize redundancy by dividing tables and defining relationships between them."
// },
// {
//     question: "34. What are the different normal forms?",
//     answer: "The main normal forms are 1NF (First Normal Form), 2NF (Second Normal Form), 3NF (Third Normal Form), and BCNF (Boyce-Codd Normal Form)."
// },
// {
//     question: "35. What is denormalization?",
//     answer: "Denormalization is the process of intentionally introducing redundancy to improve read performance, often used in data warehousing."
// },
// {
//     question: "36. What is a transaction in MySQL?",
//     answer: "A transaction is a sequence of SQL operations executed as a single unit, ensuring data integrity (either all succeed or none)."
// },
// {
//     question: "37. What are ACID properties?",
//     answer: "ACID stands for Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions don't interfere), and Durability (committed changes persist)."
// },
// {
//     question: "38. How do you start and commit a transaction?",
//     answer: "Use `START TRANSACTION;` to begin, `COMMIT;` to save changes, or `ROLLBACK;` to undo them."
// },
// {
//     question: "39. What is a subquery?",
//     answer: "A subquery is a query nested inside another query, used to return data for the main query."
// },
// {
//     question: "40. What is the difference between a subquery and a JOIN?",
//     answer: "A subquery executes first and returns a result to the outer query, while a JOIN combines data from multiple tables in a single query."
// },
// //Hard Level MySQL Questions:
// {
//     question: "41. What is a deadlock in MySQL?",
//     answer: "A deadlock occurs when two or more transactions wait indefinitely for each other to release locks, causing a standstill."
// },
// {
//     question: "42. How can you prevent deadlocks?",
//     answer: "Avoid long transactions, access tables in the same order, use appropriate isolation levels, and keep transactions small."
// },
// {
//     question: "43. What is the difference between MyISAM and InnoDB?",
//     answer: "MyISAM is faster for read-heavy operations but lacks transactions and foreign keys, while InnoDB supports ACID transactions, row-level locking, and foreign keys."
// },
// {
//     question: "44. What is partitioning in MySQL?",
//     answer: "Partitioning divides a table into smaller, more manageable pieces (partitions) while treating it as a single table."
// },
// {
//     question: "45. What are the types of partitioning?",
//     answer: "Common types include RANGE, LIST, HASH, and KEY partitioning."
// },
// {
//     question: "46. What is query optimization in MySQL?",
//     answer: "Query optimization improves query performance using techniques like indexing, EXPLAIN analysis, and avoiding full table scans."
// },
// {
//     question: "47. How does the EXPLAIN statement work?",
//     answer: "EXPLAIN shows the execution plan of a query, helping identify performance bottlenecks like missing indexes or full scans."
// },
// {
//     question: "48. What is a covering index?",
//     answer: "A covering index includes all columns needed for a query, eliminating the need to access the actual table data."
// },
// {
//     question: "49. What is a cursor in MySQL?",
//     answer: "A cursor is a database object used to retrieve and manipulate rows one at a time, typically in stored procedures."
// },
// {
//     question: "50. What is the difference between UNION and UNION ALL?",
//     answer: "UNION combines and removes duplicate rows, while UNION ALL combines all rows (including duplicates)."
// },
// {
//     question: "51. What is a full-text search in MySQL?",
//     answer: "Full-text search allows efficient searching of text data using specialized indexes and MATCH() AGAINST() syntax."
// },
// {
//     question: "52. What is the difference between a clustered and non-clustered index?",
//     answer: "A clustered index determines the physical order of data (only one per table), while a non-clustered index is a separate structure pointing to the data."
// },
// {
//     question: "53. What is the purpose of the SQL_CALC_FOUND_ROWS option?",
//     answer: "SQL_CALC_FOUND_ROWS counts the total number of rows matching a query (ignoring LIMIT), retrievable via FOUND_ROWS()."
// },
// {
//     question: "54. How do you handle slow queries in MySQL?",
//     answer: "Use EXPLAIN to analyze, add indexes, optimize queries, avoid SELECT *, and consider caching or hardware upgrades."
// },
// {
//     question: "55. What is the difference between a temporary table and a derived table?",
//     answer: "A temporary table is explicitly created and stored temporarily, while a derived table is a subquery in the FROM clause."
// },
// {
//     question: "56. What is the purpose of the SQL_MODE setting?",
//     answer: "SQL_MODE configures MySQL's behavior for data validation, strict mode, and compatibility with other databases."
// },
// {
//     question: "57. What is a prepared statement?",
//     answer: "A prepared statement is a precompiled SQL query that improves performance and security by separating SQL logic from data."
// },
// {
//     question: "58. How do you use prepared statements in MySQL?",
//     answer: "Use PREPARE, EXECUTE, and DEALLOCATE PREPARE: `PREPARE stmt FROM 'SELECT * FROM table WHERE id=?'; EXECUTE stmt USING @id;`."
// },
// {
//     question: "59. What is the difference between a stored procedure and a function?",
//     answer: "A stored procedure performs actions and may return multiple values, while a function returns a single value and can be used in SQL expressions."
// },
// {
//     question: "60. What is the purpose of the EVENT scheduler in MySQL?",
//     answer: "The EVENT scheduler automates the execution of SQL statements at scheduled intervals, similar to a cron job."
// },
// {
//     question: "61. What is a strict data structure?",
//     answer: "A strict data structure requires a fixed schema where each record must follow the same format. It's used in relational databases like MySQL where data types and structure are predefined and enforced."
// }
// ]

const faqList = document.getElementById("faqList");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const tabButtons = document.querySelectorAll(".tab-btn");

const questions = {
    node: nodeQuestions,
    javascript: javascriptQuestions,
    mongoDb: mongoDbQuestions,
    mySQL: mySQLQuestions,
    api: apiQuestions,
    react: reactQuestions,
    java: javaQuestions,
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
