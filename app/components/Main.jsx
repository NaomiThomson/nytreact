var React = require('react');
var Header = require('./Header.jsx');
var SearchScreen = require('./SearchScreen.jsx');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        <SearchScreen/>
      </div>
    )
  }
});

module.exports = Main;