var React = require('react');
var Header = require('./Header.jsx');
var Search = require('./Search.jsx');
var Results = require('./Results.jsx');
var Saved = require('./Saved.jsx');
var helpers = require("../utils/helpers");

var Main = React.createClass({
  getInitialState: function () {
    return {
      title: 'Search above to display articles here!',
      snippet: '',
      url: '#'
    }
  },

  // Whenever our component updates, the code inside componentDidUpdate is run
  componentDidUpdate: function (prevState) {
    console.log("COMPONENT UPDATED");

    // If it does, then update the clickcount in MongoDB
    helpers.saveArticles({ title: this.state.title, snippet: this.state.snippet, url: this.state.url })
      .then(function () {
        console.log("Posted to MongoDB");
      });

  },

  handleNewNewsData: function (newsdata) {
    this.setState({ newsdata });
  },

  render: function () {
    return (
      <div>
        <Header /><br />
        <Search onNewNewsData={this.handleNewNewsData} /><br />
        <Results data={this.state.newsdata} /><br />
        <Saved /><br />
      </div>
    )
  }
});

module.exports = Main;