var React = require('react');
var Header = require('./Header.jsx');
var Search = require('./Search.jsx');
var ResultsList = require('./ResultsList.jsx');
var SavedList = require('./SavedList.jsx');

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
    console.log('IN MAIN!!!!!!! ' + this.state.newsdata);
    console.log('IN MAIN!!!!!!! ' + this.state.newsdata.title);
    console.log('IN MAIN!!!!!!! ' + this.state.newsdata.url);
  },

  render: function () {
    return (
      <div>
        <Header /><br />
        <Search onNewNewsData={this.handleNewNewsData} /><br />
        <ResultsList data={this.state.newsdata} onSaveArticle={this.handleSaveArticle}/><br />
        <SavedList /><br />
      </div>
    )
  }
});

module.exports = Main;