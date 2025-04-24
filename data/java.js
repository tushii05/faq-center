export const javaQuestions = [
    {
        question: "1. What is Java?",
        answer: "Java is a high-level, object-oriented programming language developed by Sun Microsystems. It is designed to be platform-independent, allowing developers to write code once and run it anywhere."
    },
    {
        question: "2. What are the main features of Java?",
        answer: "The main features of Java include platform independence, object-oriented, robust, secure, multithreaded, and high performance."
    },
    {
        question: "3. What is the Java Virtual Machine (JVM)?",
        answer: "The JVM is an abstract machine that enables a computer to run Java programs. It converts Java bytecode into machine code."
    },
    {
        question: "4. What is the difference between JDK, JRE, and JVM?",
        answer: "JDK (Java Development Kit) is a software development kit for developing Java applications. JRE (Java Runtime Environment) is a part of the JDK that provides the libraries and JVM to run Java applications. JVM (Java Virtual Machine) is the engine that executes Java bytecode."
    },
    {
        question: "5. What is a class in Java?",
        answer: "A class in Java is a blueprint for creating objects. It defines the properties (attributes) and behaviors (methods) that the objects created from the class will have."
    },
    {
        question: "6. What is an object in Java?",
        answer: "An object is an instance of a class. It contains state (attributes) and behavior (methods) defined by its class."
    },
    {
        question: "7. What is inheritance in Java?",
        answer: "Inheritance is a mechanism in Java where one class can inherit the properties and methods of another class. It promotes code reusability."
    },
    {
        question: "8. What is polymorphism in Java?",
        answer: "Polymorphism is the ability of an object to take on many forms. In Java, it can be achieved through method overloading and method overriding."
    },
    {
        question: "9. What is encapsulation in Java?",
        answer: "Encapsulation is the bundling of data (attributes) and methods that operate on that data into a single unit, or class. It restricts direct access to some of the object's components."
    },
    {
        question: "10. What is abstraction in Java?",
        answer: "Abstraction is the concept of hiding the complex implementation details and showing only the essential features of an object."
    },
    {
        question: "11. What is an interface in Java?",
        answer: "An interface in Java is a reference type that can contain only constants, method signatures, default methods, static methods, and nested types. Interfaces cannot contain instance fields."
    },
    {
        question: "12. What is an abstract class in Java?",
        answer: "An abstract class is a class that cannot be instantiated and may contain abstract methods (methods without a body) as well as concrete methods."
    },
    {
        question: "13. What is the difference between an interface and an abstract class?",
        answer: "An interface can only contain method signatures and final variables, while an abstract class can have method implementations and instance variables. A class can implement multiple interfaces but can inherit from only one abstract class."
    },
    {
        question: "14. What is method overloading?",
        answer: "Method overloading is a feature that allows a class to have more than one method with the same name, as long as the parameter lists are different."
    },
    {
        question: "15. What is method overriding?",
        answer: "Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass."
    },
    {
        question: "16. What is the 'final' keyword in Java?",
        answer: "The 'final' keyword is used to declare constants, prevent method overriding, and prevent inheritance of classes."
    },
    {
        question: "17. What is the 'static' keyword in Java?",
        answer: "The 'static' keyword is used to indicate that a particular member belongs to the class rather than instances of the class. Static members can be accessed without creating an instance of the class."
    },
    {
        question: "18. What is a constructor in Java?",
        answer: "A constructor is a special method that is called when an object is instantiated. It initializes the object's attributes."
    },
    {
        question: "19. What is the difference between a constructor and a method?",
        answer: "A constructor is called when an object is created and does not have a return type, while a method is called to perform a specific task and has a return type."
    },
    {
        question: "20. What is the 'this' keyword in Java?",
        answer: "The 'this' keyword is a reference to the current object in a method or constructor. It is used to differentiate between instance variables and parameters with the same name."
    },
    {
        question: "21. What is the purpose of the 'super' keyword?",
        answer: "The 'super' keyword is used to refer to the superclass of the current object. It can be used to call superclass methods and constructors."
    },
    {
        question: "22. What is exception handling in Java?",
        answer: "Exception handling is a mechanism to handle runtime errors, allowing the program to continue its normal flow. It is done using try, catch, and finally blocks."
    },
    {
        question: "23. What is the difference between checked and unchecked exceptions?",
        answer: "Checked exceptions are exceptions that are checked at compile-time, while unchecked exceptions are checked at runtime. Checked exceptions must be declared in the method signature."
    },
    {
        question: "24. What is the 'finally' block?",
        answer: "The 'finally' block is used to execute important code such as closing resources, regardless of whether an exception is thrown or not."
    },
    {
        question: "25. What is the purpose of the 'throw' keyword?",
        answer: "The 'throw' keyword is used to explicitly throw an exception in Java."
    },
    {
        question: "26. What is the purpose of the 'throws' keyword?",
        answer: "The 'throws' keyword is used in method signatures to declare that a method may throw one or more exceptions."
    },
    {
        question: "27. What is a Java package?",
        answer: "A package is a namespace that organizes a set of related classes and interfaces. It helps avoid naming conflicts and can control access with protected and default access levels."
    },
    {
        question: "28. How do you create a package in Java?",
        answer: "To create a package, use the 'package' keyword at the top of your Java file, followed by the package name. For example: 'package com.example.myapp;'"
    },
    {
        question: "29. What is the purpose of the 'import' statement?",
        answer: "The 'import' statement is used to bring other classes or entire packages into visibility, allowing you to use them without fully qualifying their names."
    },
    {
        question: "30. What is the Java Collections Framework?",
        answer: "The Java Collections Framework is a set of classes and interfaces that implement commonly reusable collection data structures, such as lists, sets, and maps."
    },
    {
        question: "31. What is the difference between List and Set?",
        answer: "A List allows duplicate elements and maintains the order of insertion, while a Set does not allow duplicates and does not guarantee any specific order."
    },
    {
        question: "32. What is the difference between ArrayList and LinkedList?",
        answer: "ArrayList is backed by a dynamic array and provides fast random access, while LinkedList is backed by a doubly linked list and provides faster insertions and deletions."
    },
    {
        question: "33. What is a Map in Java?",
        answer: "A Map is an object that maps keys to values. It cannot contain duplicate keys, and each key can map to at most one value."
    },
    {
        question: "34. What is the difference between HashMap and TreeMap?",
        answer: "HashMap is an unordered collection that allows null values and is faster for lookups, while TreeMap is ordered and sorted based on the natural ordering of its keys."
    },
    {
        question: "35. What is the purpose of the Iterator interface?",
        answer: "The Iterator interface provides a way to traverse a collection without exposing its underlying representation. It allows you to iterate over elements in a collection."
    },
    {
        question: "36. How do you sort a List in Java?",
        answer: "You can sort a List using the Collections.sort() method. For example: Collections.sort(myList);"
    },
    {
        question: "37. What is the purpose of the Comparable interface?",
        answer: "The Comparable interface is used to define a natural ordering for objects. Classes that implement this interface must override the compareTo() method."
    },
    {
        question: "38. What is the purpose of the Comparator interface?",
        answer: "The Comparator interface is used to define a custom ordering for objects. It allows you to create multiple ways to compare objects by implementing the compare() method."
    },
    {
        question: "39. What is a lambda expression in Java?",
        answer: "A lambda expression is a concise way to represent an anonymous function that can be passed around as an argument or used to create functional interfaces."
    },
    {
        question: "40. What is a functional interface?",
        answer: "A functional interface is an interface that contains exactly one abstract method. It can have multiple default or static methods. Examples include Runnable and Callable."
    },
    {
        question: "41. What is the Stream API in Java?",
        answer: "The Stream API is a feature introduced in Java 8 that allows you to process sequences of elements (like collections) in a functional style, enabling operations like filtering, mapping, and reducing."
    },
    {
        question: "42. How do you create a stream from a collection?",
        answer: "You can create a stream from a collection using the stream() method. For example: myList.stream();"
    },
    {
        question: "43. What is the purpose of the Optional class?",
        answer: "The Optional class is a container object that may or may not contain a non-null value. It is used to avoid null references and provide a more expressive way to handle optional values."
    },
    {
        question: "44. How do you handle null values using Optional?",
        answer: "You can use methods like isPresent(), ifPresent(), or orElse() to handle values in an Optional. For example: Optional.ofNullable(value).ifPresent(v -> System.out.println(v));"
    },
    {
        question: "45. What is the purpose of the synchronized keyword?",
        answer: "The synchronized keyword is used to control access to a block of code or an object by multiple threads, ensuring that only one thread can execute the synchronized block at a time."
    },
    {
        question: "46. What is a thread in Java?",
        answer: "A thread is a lightweight process that can run concurrently with other threads. It is the smallest unit of processing that can be scheduled by the operating system."
    },
    {
        question: "47. How do you create a thread in Java?",
        answer: "You can create a thread by either extending the Thread class or implementing the Runnable interface. For example: new Thread(new MyRunnable()).start();"
    },
    {
        question: "48. What is the difference between the start() and run() methods in a thread?",
        answer: "The start() method creates a new thread and calls the run() method in that thread, while the run() method is just a normal method that can be called directly, which does not create a new thread."
    },
    {
        question: "49. What is a deadlock in Java?",
        answer: "A deadlock is a situation in which two or more threads are blocked forever, waiting for each other to release resources. It occurs when there is a circular dependency on resources."
    },
    {
        question: "50. What is the purpose of the wait() and notify() methods?",
        answer: "The wait() method causes the current thread to wait until another thread invokes notify() or notifyAll() on the same object, allowing for inter-thread communication."
    },
    {
        question: "51. What is the Executor framework in Java?",
        answer: "The Executor framework provides a high-level API for managing and controlling thread execution. It simplifies the process of creating and managing threads."
    },
    {
        question: "52. What is the difference between Callable and Runnable?",
        answer: "Runnable is a functional interface that does not return a result and cannot throw checked exceptions, while Callable can return a result and can throw checked exceptions."
    },
    {
        question: "53. What is the purpose of the Future interface?",
        answer: "The Future interface represents the result of an asynchronous computation. It provides methods to check if the computation is complete, retrieve the result, and cancel the computation."
    },
    {
        question: "54. What is the Java Memory Model?",
        answer: "The Java Memory Model defines how threads interact through memory and what behaviors are allowed in concurrent programming. It specifies how variables are read and written in a multithreaded environment."
    },
    {
        question: "55. What is garbage collection in Java?",
        answer: "Garbage collection is the process of automatically identifying and reclaiming memory that is no longer in use, helping to prevent memory leaks."
    },
    {
        question: "56. What are the different types of garbage collectors in Java?",
        answer: "Java has several types of garbage collectors, including the Serial Garbage Collector, Parallel Garbage Collector, Concurrent Mark-Sweep (CMS) Collector, and G1 Garbage Collector. Each has its own advantages and use cases."
    },
    {
        question: "57. What is the purpose of the finalize() method?",
        answer: "The finalize() method is called by the garbage collector before an object is reclaimed. It can be overridden to perform cleanup operations, but its use is generally discouraged in favor of try-with-resources."
    },
    {
        question: "58. What is the difference between String, StringBuilder, and StringBuffer?",
        answer: "String is immutable, meaning its value cannot be changed after creation. StringBuilder is mutable and not synchronized, making it faster for single-threaded operations. StringBuffer is also mutable but synchronized, making it thread-safe."
    },
    {
        question: "59. How do you convert a String to an integer in Java?",
        answer: `You can convert a String to an integer using the Integer.parseInt() method. For example: int number = Integer.parseInt("123");`
    },
    {
        question: "60. What is the purpose of the 'static' block?",
        answer: "A static block is used for static initialization of a class. It runs when the class is loaded and can be used to initialize static variables."
    },
    {
        question: "61. What is the difference between == and .equals() in Java?",
        answer: "The '==' operator checks for reference equality (whether two references point to the same object), while the .equals() method checks for value equality (whether two objects are logically equivalent)."
    },
    {
        question: "62. What is the purpose of the 'volatile' keyword?",
        answer: "The 'volatile' keyword is used to indicate that a variable's value will be modified by different threads. It ensures that the most recent value is always read from and written to the main memory."
    },
    {
        question: "63. What is the purpose of the 'transient' keyword?",
        answer: "The 'transient' keyword is used to indicate that a field should not be serialized when the object is converted to a byte stream. It is useful for sensitive information that should not be saved."
    },
    {
        question: "64. What is serialization in Java?",
        answer: "Serialization is the process of converting an object into a byte stream for storage or transmission. Deserialization is the reverse process of converting a byte stream back into an object."
    },
    {
        question: "65. How do you implement serialization in Java?",
        answer: "To implement serialization, a class must implement the Serializable interface. For example: public class MyClass implements Serializable { ... }"
    },
    {
        question: "66. What is the purpose of the 'instanceof' operator?",
        answer: "The 'instanceof' operator is used to test whether an object is an instance of a specific class or interface. It returns true or false."
    },
    {
        question: "67. What is the difference between a shallow copy and a deep copy?",
        answer: "A shallow copy creates a new object but copies references to the original object's fields, while a deep copy creates a new object and recursively copies all objects referenced by the original object."
    },
    {
        question: "68. What is the purpose of the 'default' keyword in interfaces?",
        answer: "The 'default' keyword allows you to define a default implementation for a method in an interface. This enables you to add new methods to interfaces without breaking existing implementations."
    },
    {
        question: "69. What is the purpose of the 'static' method in an interface?",
        answer: "Static methods in an interface can be called without an instance of the interface. They are used to provide utility methods related to the interface."
    },
    {
        question: "70. What is the purpose of the 'native' keyword?",
        answer: "The 'native' keyword is used to indicate that a method is implemented in native code, typically in C or C++, rather than in Java."
    },
    {
        question: "71. What is the purpose of the 'assert' keyword?",
        answer: "The 'assert' keyword is used to create an assertion, which is a statement that checks a condition at runtime. If the condition is false, an AssertionError is thrown."
    },
    {
        question: "72. What is the purpose of the 'enum' keyword?",
        answer: "The 'enum' keyword is used to define a set of named constants. Enums provide a way to define a variable that can hold a set of predefined values."
    },
    {
        question: "73. What is the purpose of the 'synchronized' block?",
        answer: "The 'synchronized' block is used to restrict access to a block of code or an object by multiple threads, ensuring that only one thread can execute the synchronized block at a time."
    },
    {
        question: "74. What is the difference between a HashSet and a TreeSet?",
        answer: "HashSet is an unordered collection that allows null values and is backed by a hash table, while TreeSet is a sorted collection that does not allow null values and is backed by a red-black tree."
    },
    {
        question: "75. What is the purpose of the 'break' statement?",
        answer: "The 'break' statement is used to exit a loop or switch statement prematurely."
    },
    {
        question: "76. What is the purpose of the 'continue' statement?",
        answer: "The 'continue' statement is used to skip the current iteration of a loop and proceed to the next iteration."
    },
    {
        question: "77. What is the purpose of the 'return' statement?",
        answer: "The 'return' statement is used to exit a method and optionally return a value to the caller."
    },
    {
        question: "78. What is the purpose of the 'try-with-resources' statement?",
        answer: "The 'try-with-resources' statement is used to automatically close resources such as files or database connections when they are no longer needed, ensuring proper resource management."
    },
    {
        question: "79. What is the purpose of the 'switch' statement?",
        answer: "The 'switch' statement is used to execute one block of code among multiple options based on the value of a variable."
    },
    {
        question: "80. What is the purpose of the 'for-each' loop?",
        answer: "The 'for-each' loop is used to iterate over elements in an array or collection without needing an index variable."
    },
    {
        question: "81. What is the purpose of the 'static import' statement?",
        answer: "The 'static import' statement allows you to access static members (fields and methods) of a class without qualifying them with the class name."
    },
    {
        question: "82. What is the purpose of the 'volatile' keyword?",
        answer: "The 'volatile' keyword indicates that a variable's value will be modified by different threads, ensuring that the most recent value is always read from and written to the main memory."
    },
    {
        question: "83. What is the purpose of the 'synchronized' keyword?",
        answer: "The 'synchronized' keyword is used to control access to a method or block of code by multiple threads, ensuring that only one thread can execute it at a time."
    },
    {
        question: "84. What is the purpose of the 'assert' keyword?",
        answer: "The 'assert' keyword is used to create assertions, which are conditions that you expect to be true during execution. If the condition is false, an AssertionError is thrown."
    },
    {
        question: "85. What is the purpose of the 'instanceof' operator?",
        answer: "The 'instanceof' operator is used to test whether an object is an instance of a specific class or interface, returning true or false."
    },
    {
        question: "86. What is the purpose of the 'finalize()' method?",
        answer: "The 'finalize()' method is called by the garbage collector before an object is reclaimed. It can be overridden to perform cleanup operations, but its use is generally discouraged."
    },
    {
        question: "87. What is the purpose of the 'native' keyword?",
        answer: "The 'native' keyword indicates that a method is implemented in native code, typically in C or C++, rather than in Java."
    },
    {
        question: "88. What is the purpose of the 'default' keyword in interfaces?",
        answer: "The 'default' keyword allows you to define a default implementation for a method in an interface, enabling you to add new methods without breaking existing implementations."
    },
    {
        question: "89. What is the purpose of the 'static' keyword in Java?",
        answer: "The 'static' keyword indicates that a member belongs to the class rather than instances of the class. Static members can be accessed without creating an instance of the class."
    },
    {
        question: "90. What is the purpose of the 'transient' keyword?",
        answer: "The 'transient' keyword is used to indicate that a field should not be serialized when the object is converted to a byte stream."
    }
]