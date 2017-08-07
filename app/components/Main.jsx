var React = require('react');
var Header = require('./Header.jsx');
var SearchScreen = require('./SearchScreen.jsx');
var ResultsScreen = require('./ResultsScreen.jsx');
var SavedArticles = require('./SavedArticles.jsx');

var Main = React.createClass({
  getInitialState: function () {
    return {
      title: 'Search above to display articles here!',
      url: '#'
    }
  },

  handleNewNewsData: function (newsdata) {
    console.log(newsdata);
    this.setState({newsdata});
    console.log(this.state);
  },

  render: function () {
    return (
      <div>
        <Header /><br />
        <SearchScreen onNewNewsData={this.handleNewNewsData} /><br />
        <ResultsScreen  data={this.state.newsdata}/><br />
        <SavedArticles /><br />
      </div>
    )
  }
});

module.exports = Main;