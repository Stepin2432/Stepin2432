const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
const dbName = 'portfolioDB'; // Replace with your database name

let db;

const connectToDatabase = async () => {
    if (!db) {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db(dbName);
        console.log('Connected to database:', dbName);
    }
    return db;
};

const getCollection = (collectionName) => {
    return db.collection(collectionName);
};

const closeConnection = async () => {
    if (db) {
        await db.client.close();
        db = null;
        console.log('Database connection closed');
    }
};

module.exports = {
    connectToDatabase,
    getCollection,
    closeConnection
};