var React = require('react');
var axios = require('axios');
var Header = require('./Header.jsx');
var Search = require('./Search.jsx');
var ResultsList = require('./ResultsList.jsx');
var Result = require('./Result.jsx');
var SavedList = require('./SavedList.jsx');
var Saved = require('./Saved.jsx');

var Main = React.createClass({
  componentWillMount: function() {
    this.getSaved();
  },

  getInitialState: function () {
    return {
      title: 'Search above to display articles here!',
      snippet: '',
      url: '#'
    }
  },

  handleNewScrapedNews: function (scrapedNews) {
    this.setState({ scrapedNews });
  },

  getSaved: function () {
    axios.get('http://frozen-reaches-18776.herokuapp.com/api')
      .then((res) => {
        this.setState({ savedArticles: res.data })
      })
  },

  render: function () {
    // this.getSaved();
    return (
      <div>
        <Header /><br />
        <Search onNewScrapedNews={this.handleNewScrapedNews} /><br />
        <ResultsList data={this.state.scrapedNews} onGetSaved={this.getSaved}/><br />
        <SavedList data={this.state.savedArticles} /><br />
      </div>
    )
  }
});

module.exports = Main;