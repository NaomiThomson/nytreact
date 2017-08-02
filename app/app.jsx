// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
var Main = require('./components/Main.jsx');

// This code here allows us to render our main component (in this case Seymour)
ReactDOM.render(
  <Main/>, 
  document.getElementById("app")
);