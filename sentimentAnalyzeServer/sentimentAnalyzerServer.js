const express = require('express');
const app = new express();
app.use(express.static('client')); //This tells the server to use the client folder for all static resources
const cors_app = require('cors'); //This tells the server to allow cross origin references
app.use(cors_app());
const dotenv = require('dotenv');
dotenv.config(); //This allows the dotenv node library to be used.
const api_key = process.env.API_KEY; //This reads the Watson Natural Language Understanding API key (for authentication/authorization purposes)
const api_url = process.env.API_URL;//This reads the Watson Natural Language Understanding URL key
const { debug, error, enableDebug, disableDebug, setModule, separator }   = require('./troubleshooting.js');
setModule(__filename);


function getNLUInstance() {
    const NaturalLanguageUnderstandingV1  = require('ibm-watson/natural-language-understanding/v1');
    const { IamAuthenticator }            = require('ibm-watson/auth');
    const naturalLanguageUnderstanding    = new NaturalLanguageUnderstandingV1({
        version: '2021-08-01',
        authenticator: new IamAuthenticator ({
            apikey: api_key
        }),
        serviceUrl: api_url
    });
    debug("Obtained Watson Natural Language Understanding instance: " + JSON.stringify(naturalLanguageUnderstanding, null, 4));
    return naturalLanguageUnderstanding;
}



app.get("/",(request, response) => { //The default endpoint for the webserver
    response.render('index.html');
  });

function createParametersToAnalyze(feeling, key, value){
  let parameters = {
    [key]: value,
    "features": {
        "keywords": {
            [feeling]: true,
            "limit": 1
        }
    }
  };
  debug("Returning parameters below");
  debug( JSON.stringify(parameters, null, 4) );
  return parameters;
}

function createErrorObject(err){
  let message = "The request cannot be processed. Exception: [" + (err.message || "Internal Server Error") + "]";
  let status = err.status || 500;
  let error = {
    "status":   status,
    "message":  message
  };
  return error;
}

function processFeeling(request, response, feeling, type){
  debug("A " + type + " " + feeling + " request is starting to being processed");
  const analyzeParams = createParametersToAnalyze(feeling, type, ( type == "url" ? request.query.url : request.query.text) );
  debug("Printing parameters: " + JSON.stringify(analyzeParams, null, 2) );
  debug("Getting access to the Watson NLU module");
  const naturalLanguageUnderstanding  = getNLUInstance();
  debug("Submitting the parameters for analysis");
  naturalLanguageUnderstanding.analyze(analyzeParams).then( analysisResults => {
      let finalResults = ( feeling == "emotion" ? analysisResults.result.keywords[0].emotion : analysisResults.result.keywords[0].sentiment );
      debug( JSON.stringify(analysisResults, null, 4) );
      debug("Obtain analysis results: " + JSON.stringify(finalResults, null, 4));
      return response.send(finalResults, null, 2); //Retrieve the emotion and return it as a formatted string
    }).catch(exception => {
      error("An exception occurred while analyzing results. Message [" + exception.message + "]");
      return response.status(exception.status || 500).send({
        error: createErrorObject(exception)
      });
  });
}
/**/

//The endpoint for the webserver ending with /url/emotion
app.get("/url/emotion", (request, response) => {
  processFeeling(request, response, "emotion", "url");
});

//The endpoint for the webserver ending with /url/sentiment
app.get("/url/sentiment", (request, response) => {
  processFeeling(request, response, "sentiment", "url");
});

//The endpoint for the webserver ending with /text/emotion
app.get("/text/emotion", (request, response) => {
  processFeeling(request, response, "emotion", "text");
});

app.get("/text/sentiment", (request, response) => {
  processFeeling(request, response, "sentiment", "text");
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port);
})

