const mongo = require('mongodb').MongoClient;
const dburl = require('../config/database').database
exports.authenticate = async function (query) {
    try {
        console.log("dburl", dburl)
        const client = await mongo.connect(dburl);
        console.log("client", client)
        let result = await client.db().collection("user").find(query).toArray();
        console.log(result)
        if (result.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (err) {
        console.log("error")
    }
}

exports.signup = async function (user) {
    const ClientSignup = await mongo.connect(dburl)
    console.log(user)
    let result = await ClientSignup.db().collection("user").insertOne(user ,(err,res)=>{
        if(err)
        throw err
        console.log("user insert")
        return result;
    })
}
