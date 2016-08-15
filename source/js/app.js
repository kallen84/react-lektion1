// hämtar komponenten react
var React = require("react");

var ReactDOM = require("react-dom");
// anropar en render-funktion på helloWorld objektet
var HelloWorld = require("./components/HelloWorld");

ReactDOM.render(<HelloWorld />,document.getElementById("reactContainer"));
