(this.webpackJsonpsentimentanalyzeclient=this.webpackJsonpsentimentanalyzeclient||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),i=n(8),s=n.n(i),c=(n(13),n(2)),r=n(3),l=n(5),m=n(4),u=(n(7),n(14),n(0)),d=(a.a.Component,function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={innercomp:Object(u.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0},e.createTableHeader=function(){var e=Object(u.jsx)("th",{className:"rightBorder",children:"Emotion"},"emotionHeader"),t=Object(u.jsx)("th",{children:"Estimate"},"estimateHeader");return a.a.createElement("tr",{key:"tableHeader",className:"emotionHeader"},[e,t])},e.createEmotionTable=function(t){console.log("Iterating over each data field");var n=e.createTableHeader(),o=[],i=0;Object.keys(t).forEach((function(e){var n="rightBorder "+((i+=1)%2===0?"even":"odd"),s=i%2===0?"even":"odd";console.log("Key is ["+e+"]. Associated value is ["+t[e]+"]");var c=Object(u.jsx)("td",{className:n,children:e},e),r=Object(u.jsx)("td",{className:s,children:t[e]},"estimate_"+e),l="row_"+e,m=a.a.createElement("tr",{key:l,className:"emotionRow"},[c,r]);o.push(m)})),console.log("Completed iterating over each data fied");var s=a.a.createElement("tbody",{key:"tableBody"},[n,o]);return a.a.createElement("table",{key:"emotionTable",className:"emotionTable"},[s])},e.renderOutput=function(t){var n=1,o="url";"text"===t&&(o="text",n=4),e.setState({innercomp:Object(u.jsx)("textarea",{rows:n,cols:"50",id:"textinput"}),mode:o,sentimentOutput:[],sentiment:!0})},e.sendForSentimentAnalysis=function(){e.setState({sentiment:!0});var t="http://"+window.location.hostname+":8080",n=e.state.mode;t=t+"/"+n+"/sentiment?"+n+"="+encodeURIComponent(document.getElementById("textinput").value.trim()),console.log("URL to send request is ["+t+"]"),fetch(t).then((function(t){console.log("Reading response"),console.log(t),console.log("Stringified JSON response:\n"+JSON.stringify(t,null,4)),t.json().then((function(t){console.log("Setting state"),e.setState({sentimentOutput:t.label});var n=t.label,o="white";switch(n){case"positive":o="lightgreen";break;case"negative":o="red";break;default:o="#fff907"}n=Object(u.jsxs)("div",{style:{color:o,fontSize:20},className:"sentimentResult",children:["Sentiment is ",n]}),e.setState({sentimentOutput:n})}))}))},e.sendForEmotionAnalysis=function(){e.setState({sentiment:!1});var t="http://"+window.location.hostname+":8080",n=e.state.mode;t=t+"/"+n+"/emotion?"+n+"="+encodeURIComponent(document.getElementById("textinput").value.trim()),fetch(t).then((function(t){t.json().then((function(t){console.log("Printing emotion data here"),console.log(JSON.stringify(t,null,4));var n=e.createEmotionTable(t);e.setState({sentimentOutput:n})}))}))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("button",{className:"btn btn-info",onClick:function(){e.renderOutput("text")},children:"Text"}),Object(u.jsx)("button",{className:"btn btn-dark",onClick:function(){e.renderOutput("url")},children:"URL"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),this.state.innercomp,Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"btn-primary",onClick:this.sendForSentimentAnalysis,children:"Analyze Sentiment"}),Object(u.jsx)("button",{className:"btn-primary",onClick:this.sendForEmotionAnalysis,children:"Analyze Emotion"}),Object(u.jsx)("br",{}),this.state.sentimentOutput]})}}]),n}(a.a.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),o(e),a(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),b()},7:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.66b8594e.chunk.js.map