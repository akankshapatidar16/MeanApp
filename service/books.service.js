const mongo = require('mongodb').MongoClient;
const dburl = require('../config/database').database
const objectID = require('mongodb').ObjectID
exports.getAllBooks = async function () {
    try {
        console.log("dburl", dburl)
        const client = await mongo.connect(dburl);
        //console.log("client", client)
        let result = await client.db().collection("books").find().toArray();
        console.log(result)
        return result;
    }
    catch (err) {
        console.log("error found : service.js is not working")
    }
}

exports.getBooksById = async function (id) {
    try {
        console.log("dburl", dburl)
        let query = { "_id": objectID(id) }
        const client = await mongo.connect(dburl);
        //console.log("client", client)
        let result = await client.db().collection("books").findOne(query);
        console.log(result)
        return result;
    }
    catch (err) {
        console.log("error found : service.js is not working")
    }
}

exports.getBooksByCountry = async function (country) {//query is basically a json formate including username and password
    //connect to mongoDB
    let query = { "country": country }
    try {
        console.log("dburl", dburl)
        const client = await mongo.connect(dburl);//await makes this function asynchronous, waits for the connection
        let result = await client.db().collection("books").find(query).toArray();
        console.log(result)
        return result;
    }
    catch (err) {
        console.log("error found : service.js is not working")
    }
}

exports.getBooksByAuthor = async function (author) {
    let query = { "author": author }
    try {
        console.log("dburl", dburl)
        const client = await mongo.connect(dburl);
        let result = await client.db().collection("books").find(query).toArray();
        console.log(result)
        return result;
    }
    catch (err) {
        console.log("error found : service.js is not working")
    }
}

exports.deleteBooksById = async function(books){
    try{
        console.log("dburl", dburl)
        const client =await mongo.connect(dburl);
        let query = {"_id" : objectID(books)}      
        let result = await client.db().collection("books").deleteOne(query);
        console.log(result)
        return result;
    }
    catch{
        console.log("error found : service.js is not working")
    }
}

exports.putBooksById = async function(id, query){
    try {
        console.log("dburl", dburl)
        const client = await mongo.connect(dburl);
        let query1 = {"_id" : objectID(id)}
        let result = await client.db().collection("books").findOneAndUpdate(query1, query)
        console.log(result)
        return result;
    }
    catch (err) {
        console.log("error found : service.js is not working")
    }
}