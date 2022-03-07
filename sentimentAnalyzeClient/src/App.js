import './bootstrap.min.css';
import './App.css';
//import EmotionTable from './EmotionTable.js';
import React from 'react';

class App extends React.Component {
  /*
  We are setting the component as a state named innercomp.
  When this state is accessed, the HTML that is set as the
  value of the state, will be returned. The initial input mode
  is set to text
  */
  state = {innercomp:<textarea rows="4" cols="50" id="textinput"/>,
            mode: "text",
          sentimentOutput:[],
          sentiment:true
        };


  createTableHeader = () => {
    let emotionHeader   = <th key="emotionHeader" className="rightBorder">Emotion</th>;
    let estimateHeader  = <th key="estimateHeader">Estimate</th>;
    let tableHeaderRow  = React.createElement('tr', { key: 'tableHeader', className: "emotionHeader" }, [emotionHeader, estimateHeader]);
    return tableHeaderRow;
  }


  createEmotionTable = (data) => {
    console.log("Iterating over each data field");
    let tableHeader = this.createTableHeader();
    var tableRows   = [];
    let index       = 0;
    Object.keys(data).forEach( function(key) {
      index             = index + 1;
      let emotionClass  = "rightBorder " + (index % 2 === 0 ? "even" : "odd");
      let estimateClass = (index % 2 === 0 ? "even" : "odd");
      console.log("Key is [" + key + "]. Associated value is [" + data[key] + "]");
      let emotionCell   = <td key={key} className={emotionClass}>{key}</td>;
      let estimateCell  = <td key={"estimate_" + key}  className={estimateClass}>{data[key]}</td>;
      let rowKey        = "row_" + key;
      let tableRow      = React.createElement('tr', { key: rowKey, className: "emotionRow" }, [emotionCell, estimateCell]);
      tableRows.push(tableRow);

    } );
    console.log("Completed iterating over each data fied");
    var tableBody     = React.createElement("tbody", { key: "tableBody" }, [tableHeader, tableRows]);
    var tableToReturn = React.createElement("table", { key: "emotionTable", className: "emotionTable" }, [tableBody]);
    return tableToReturn;
  }


  /*
  This method returns the component based on what the input mode is.
  If the requested input mode is "text" it returns a textbox with 4 rows.
  If the requested input mode is "url" it returns a textbox with 1 row.
  */

  renderOutput = (input_mode) => {
    let rows = 1
    let mode = "url"
    //If the input mode is text make it 4 lines
    if(input_mode === "text"){
      mode = "text"
      rows = 4
    }
      this.setState({innercomp:<textarea rows={rows} cols="50" id="textinput"/>,
      mode: mode,
      sentimentOutput:[],
      sentiment:true
      });
  }

  wasRequestSuccessful = (response) => {
    var valueToReturn = false;
    console.log("Reading response");
    console.log(response);
    console.log("Stringified JSON response:\n" + JSON.stringify(response, null, 4));
    console.log("Response status is [" + response.status + "]");
    if(response.status === 200){
      valueToReturn = true;
    }
    return valueToReturn;
  }

  sendForSentimentAnalysis = () => {
    this.setState({sentiment:true});
    //let url = ".";
    let url = "http://" + window.location.hostname + ( window.location.hostname === "localhost" ? ":8080" : "");
    let mode = this.state.mode;
    url = url + "/" + mode + "/sentiment?" + mode + "=" + encodeURIComponent(document.getElementById("textinput").value.trim());
    console.log('URL to send request is [' + url + ']');
    fetch(url).then( (response) => {
        let successfulRequest = this.wasRequestSuccessful(response);
        response.json().then( (data) => {
          console.log("Setting state");
          this.setState({sentimentOutput:data.label});
          let output = data.label;
          let color = "white";
          switch(output) {
            case "positive": color = "lightgreen"; break;
            case "negative": color = "red"; break;
            default: color = "#fff907";
          }
          if(successfulRequest === true){
            output = <div style={{color:color, fontSize:20}} className="sentimentResult">Sentiment is {output}</div>;
          }
          else {
            color   = "red";
            output  = <div style={{color:color, fontSize:20}} className="sentimentResult">Sentiment could not be analyzed. Please verify your input text</div>;
          }
          this.setState( {sentimentOutput:output} );
      })

    });
  }

  sendForEmotionAnalysis = () => {

    this.setState({sentiment:false});
    //let url = ".";
    let url = "http://" + window.location.hostname + ( window.location.hostname === "localhost" ? ":8080" : "");
    let mode = this.state.mode;
    url = url + "/" + mode + "/emotion?"+ mode + "=" + encodeURIComponent(document.getElementById("textinput").value.trim());

    fetch(url).then( (response) => {
      let successfulRequest = this.wasRequestSuccessful(response);
      response.json().then( (data) => {
        if(successfulRequest === true){
          console.log("Printing emotion data here");
          console.log( JSON.stringify(data, null, 4) );
          let table = this.createEmotionTable(data);
          this.setState( {sentimentOutput:table} );
        }
        else {
          var color   = "red";
          var output  = <div style={{color:color, fontSize:20}} className="sentimentResult">Emotion could not be analyzed. Please verify your input text</div>;
          this.setState( {sentimentOutput:output} );
        }
      }
    )});
  }




  render() {
    return (
      <div className="App">
      <button className="btn btn-info" onClick={()=>{this.renderOutput('text')}}>Text</button>
        <button className="btn btn-dark" onClick={()=>{this.renderOutput('url')}}>URL</button>
        <br/><br/>
        {this.state.innercomp}
        <br/>
        <button className="btn-primary" onClick={this.sendForSentimentAnalysis}>Analyze Sentiment</button>
        <button className="btn-primary" onClick={this.sendForEmotionAnalysis}>Analyze Emotion</button>
        <br/>
            {this.state.sentimentOutput}
      </div>
    );
  }
}

export default App;
