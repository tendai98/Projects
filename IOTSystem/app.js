const express = require("express")
const firebase = require("firebase")
const projectConfig = require("./config.json")
const systemCreds = require("./creds.json")

const app = express()
const SERVER_PORT = process.env.PORT || 5000
let systemAuth = false

firebase.initializeApp(projectConfig)

function apiPoint(req, res){

	function operation(req, res){

		let databaseReference =  firebase.database().ref("currentValues")
		let dataLogReference = firebase.database().ref("dataLog")

		let timestamp = Math.floor(new Date()).toString()
		dataLogReference.child(timestamp).set(req.query)

		databaseReference.set(req.query).then( e => {
			res.json({errorCode:0 , message:"Done"})
		}).catch(e => {
			res.json({errorCode:-1 , message:"An error has occured while reading the database", verbose:e})
		})
	}

	if(systemAuth){
		operation(req, res)
	}else{
		authSystem(req, res, operation)
	}

}

function getData(req, res){

	function operation(req, res){
		let databaseReference =  firebase.database().ref("currentValues")

			databaseReference.on("value", snapshot => {
				let valueObject = snapshot.val();
				databaseReference.off()

				if(valueObject){
					res.json({errorCode:0, message:"Success", data: valueObject})
				}else{
					res.json({errorCode:-1, message:"No data found"})
				}

			})
	}

	if(systemAuth){
		operation(req, res)
	}else{
		authSystem(req, res, operation)
	}
}

function resetDataLog(req, res){

	function operation(req, res){
		firebase.database().ref("dataLog").remove()
		res.json({errorCode:0, message:"Success"})
	}

	if(systemAuth){
		operation(req, res)
	}else{
		authSystem(req, res, operation)
	}
}

function authSystem(req, res, callback){

		firebase.auth().signInWithEmailAndPassword(
				systemCreds.email,
				systemCreds.password).then( e => {
					systemAuth = true
					callback(req, res)
					isSystemAuthenticated = true
				}).catch( e => {
					console.log(e)
		})
}

const init_server = () => {
	console.log(`Server Listenning: ${SERVER_PORT}`)
}

app.get("/api", apiPoint)
app.get("/data", getData)
app.get("/reset", resetDataLog)

app.listen(SERVER_PORT, init_server)
