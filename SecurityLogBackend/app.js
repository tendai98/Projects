const express = require("express")
const { MongoClient } = require('mongodb')

const app = express()

async function setUser(id, mode){
        let client = new MongoClient("mongodb://127.0.0.1:27017")
        await client.connect()
        let db = client.db("security")
        let collection = db.collection("logs")

        collection.insertOne({ 
                accessTimeStamp: Math.floor(new Date()),
                date: new Date(),
                user: id,
		accessMode: mode
        })
	console.log("[+] SECURITY ACCESS LOG FOR: "+id+" USING ACCESS MODE: "+mode)
}

function user1(req, res){
	setUser("VISITOR-1", "RFID-ACCESS")
	res.end()
}

function user2(req, res){
	setUser("VISITOR-2", "RFID-ACCESS")
	res.end()
}

function biometric(req, res){
	setUser("EMPLOYEE", "BIOMETRIC-FINGERPRINT")
	res.end()
}

app.get("/user1", user1)
app.get("/user2", user2)
app.get("/biometric", biometric)

app.listen(8000, () => {
	console.log("ONLINE")
})
