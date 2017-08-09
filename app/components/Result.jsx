var React = require('react');
var axios = require('axios');

var Result = React.createClass({
  handleSaveClick: function () {
    console.log('IN RESULT!!!!!! ' + this.props);
    var savedArticle = {
      title: this.props.title,
      snippet: this.props.snippet,
      url: this.props.url
    }

    axios.post('/api', savedArticle)
      .then((res) => {
        console.log(res);
      });
  },

  render: function () {
    return (
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{this.props.headline.main}</span>
          <p>{this.props.snippet}</p>
        </div>
        <div className="card-action">
          <a href={this.props.web_url} target="_blank">Read more</a>
          <button id="save" onClick={this.handleSaveClick}>save</button>
        </div>
      </div>
    )
  }
})

module.exports = Result;