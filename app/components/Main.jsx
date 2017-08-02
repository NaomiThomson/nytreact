var React = require('react');
var Header = require('./Header.jsx');
var SearchScreen = require('./SearchScreen.jsx');
var ResultsScreen = require('./ResultsScreen.jsx');
var SavedArticles = require('./SavedArticles.jsx');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Header/><br/>
        <SearchScreen/><br/>
        <ResultsScreen/><br/>
        <SavedArticles/><br/>
      </div>
    )
  }
});

module.exports = Main;