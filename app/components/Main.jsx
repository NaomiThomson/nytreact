var React = require('react');
var Header = require('./Header.jsx');
var SearchScreen = require('./SearchScreen.jsx');
var ResultsScreen = require('./ResultsScreen.jsx');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        <SearchScreen/>
        <ResultsScreen/>
      </div>
    )
  }
});

module.exports = Main;