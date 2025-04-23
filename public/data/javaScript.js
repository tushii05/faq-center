export const javascriptQuestions = [
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