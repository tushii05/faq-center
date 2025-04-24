export const mongoDbQuestions = {
    easy: [
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
    },],
    intermediate: [
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
    },],
    advanced:[
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
]
};