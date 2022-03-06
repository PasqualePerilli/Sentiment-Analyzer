const path            = require("path");
var   lineNumber      = 1;
var   moduleName      = "";
const months          = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const errorPrefix     = "[ALERT!]";
var   debugEnabled    = true;
let   separator       = "----------------------------------------------------------------------------------";


function getDate(){
  let today = new Date();
  var valueToReturn = prependZero(today.getUTCDate(), 2) + "-" + months[today.getMonth()] + "-" + today.getFullYear() + " " + prependZero(today.getHours(), 2) + ":" + prependZero(today.getMinutes(), 2) + ":" + prependZero(today.getSeconds(), 2);
  return valueToReturn;
}

function prependZero(value, numberOfDigits){
  let valueToReturn = value;
  while(valueToReturn.toString().length < numberOfDigits){
    valueToReturn = '0' + valueToReturn;
  }
  return valueToReturn;
}

function getDebugLine(text){
  let prefix = prependZero(lineNumber, 3) + " - ";
  let suffix = " - Message logged at " + getDate() + " - Module [" + moduleName + "]";
  return (prefix + text + suffix);
}

function setModule(theModule){
  moduleName = path.basename(theModule, path.extname(theModule));
}

function debug(text) {
  if(debugEnabled == true){
    if(text != separator){
      console.log(getDebugLine(text));
      lineNumber = lineNumber + 1;
    }
    else {
      console.log(text);
    }
  }
}

function error(text) {
  console.error(getDebugLine(errorPrefix + " " + text));
  lineNumber = lineNumber + 1;
}

function enableDebug() {
  debugEnabled = true;
}

function disableDebug() {
  debugEnabled = false;
}

module.exports = { debug, error, enableDebug, disableDebug, setModule, separator }
