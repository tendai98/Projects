const fs = require('fs').promises;
const fs1 = require('fs')
const https = require('https')
const path = require('path');
const process = require('process');
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');
const express = require("express")
const cors = require("cors")

const PORT = 5000 || process.env.PORT
const DB_URL = 'https://election-data-app-default-rtdb.firebaseio.com/.json'
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'creds.json');

const app = express()
app.use(cors())


let rows = null
let globalRes = null
let processedData = null

async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}


async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}


async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}


async function getData(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  const res = await sheets.spreadsheets.values.get({
	spreadsheetId: '1d0izB5tnUR4kKbbfg-UYF3h7WXMYV0Qp6-hKQv9TtIY',
    	range: 'Sheet1',
  });

  rows = res.data.values;
  globalRes.json({message:"Processing...", error:200})
}

function processData(){

	processedData = {}

	function getNumberOfCases(){
                let caseDistributionValues = {}

		if(rows !== null){
                        rows[0] = null
                        rows.forEach(item => {
                                if(item){
                                        caseDistributionValues[item[1]] = 0
                                }
                        })
                }

                if(rows !== null){
                        rows[0] = null
                        rows.forEach(item => {
                                if(item){
                                        caseDistributionValues[item[1]] += 1
                                }
                        })
                }

                return caseDistributionValues
	}


	function getAverageCasesReported(){
		let averageCasesDistribution = {}
		averageCasesDistribution.titles = []
		averageCasesDistribution.labels = []
		averageCasesDistribution.dataClusters = {}


		if(rows !== null){
			rows[0] = null
			rows.forEach(item => {
				if(item){

					if(!averageCasesDistribution.titles.includes(item[2])){
						averageCasesDistribution.titles.push(item[2])
						averageCasesDistribution.dataClusters[item[2]] = []
					}
				}

			})

			rows.forEach(item => {
				if(item){
                                        if(!averageCasesDistribution.labels.includes(item[1])){
                                                averageCasesDistribution.labels.push(item[1])
                                                let index = averageCasesDistribution.labels.indexOf(item[1])
                                                if(index !== -1){
                                                        averageCasesDistribution.dataClusters[averageCasesDistribution.titles[0]][index] = 0
                                                        averageCasesDistribution.dataClusters[averageCasesDistribution.titles[1]][index] = 0
                                                }
                                        }
				}
			})

			rows.forEach(item => {
				if(item){
					let index = averageCasesDistribution.labels.indexOf(item[1])
					averageCasesDistribution.dataClusters[item[2]][index] += 1
				}
			})
		}

		return averageCasesDistribution
	}

	function getGenderDistribution(){
		let genderDistributionValues = {male:0, female:0}

		if(rows !== null){
			rows[0] = null
			rows.forEach(item => {
				if(item){
					genderDistributionValues[item[2].toLowerCase()] += 1
				}
			})
		}

		return genderDistributionValues
	}


	function getTopCases(){
		let topCases = []

		if(rows !== null){
			rows[0] = null
			for(let index=1; index<rows.length; index++){
				if(rows[index]){
					topCases.push(rows[index])
				}else{
					break
				}
			}

		}

		return topCases
	}


	processedData.caseDistribution = getNumberOfCases()
	processedData.averageCasesDistribution = getAverageCasesReported()
	processedData.genderDistribution = getGenderDistribution()
	processedData.topCasesData = getTopCases()
	return processedData
}

app.get("/auth", (req, res) => {

	var file = fs1.createWriteStream("token.json");
    	var request = https.get(DB_URL, function(response) {
      		response.on("finish",function(){
        		console.log(fs.readFileSync("token-test.json",{encoding:"utf8"}));
      		}).pipe(file);
    	});

	res.end()
})

app.get("/process", (req, res) => {
	globalRes = res
	authorize().then(getData).catch(e => {
			res.end()
	})
})

app.get("/data", (req, res) => {
	processedData = processData()
	res.json({data:processedData, error:200})
})

console.log("[+] Server ONLINE")
app.listen(PORT)
