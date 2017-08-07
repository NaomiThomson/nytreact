var React = require('react');
var Header = require('./Header.jsx');
var Search = require('./Search.jsx');
var Results = require('./Results.jsx');
var Saved = require('./Saved.jsx');

var Main = React.createClass({
  getInitialState: function () {
    return {
      title: 'Search above to display articles here!',
      url: '#'
    }
  },

  handleNewNewsData: function (newsdata) {
    this.setState({newsdata});
  },

  render: function () {
    return (
      <div>
        <Header /><br />
        <Search onNewNewsData={this.handleNewNewsData} /><br />
        <Results data={this.state.newsdata}/><br />
        <Saved /><br />
      </div>
    )
  }
});

module.exports = Main;