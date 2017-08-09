var React = require('react');
var axios = require('axios');

var Result = React.createClass({
  handleSaveClick: function () {
    var savedArticle = {
      title: this.props.headline.main,
      snippet: this.props.snippet,
      url: this.props.web_url
    };

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
          <button className="waves-effect waves-light btn" id="save" onClick={this.handleSaveClick}>save</button>
        </div>
      </div>
    )
  }
})

module.exports = Result;