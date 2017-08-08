var React = require('react');
var Header = require('./Header.jsx');
var Search = require('./Search.jsx');
var Results = require('./ResultsList.jsx');
var Saved = require('./SavedList.jsx');
var helpers = require("../utils/helpers");

var Main = React.createClass({
  getInitialState: function () {
    return {
      title: 'Search above to display articles here!',
      snippet: '',
      url: '#'
    }
  },

  handleNewNewsData: function (newsdata) {
    this.setState({ newsdata });
  },

  handleSaveArticle: function(article) {
    helpers.saveArticles({title: article.title, snippet: article.snippet, url: article.url})
      .then(function () {
        console.log("Posted to MongoDB");
      });
  },

  render: function () {
    return (
      <div>
        <Header /><br />
        <Search onNewNewsData={this.handleNewNewsData} /><br />
        <Results data={this.state.newsdata} onSaveArticle={this.handleSaveArticle}/><br />
        <Saved /><br />
      </div>
    )
  }
});

module.exports = Main;