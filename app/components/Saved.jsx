var React = require('react');
var axios = require('axios');

var Saved = React.createClass({
  handleRemoveClick: function () {
    var savedArticle = {
      title: this.props.title,
      snippet: this.props.snippet,
      url: this.props.url
    };

    axios.delete(`/api/${this.props._id}`)
    .then((res) => {
      this.props.onGetSaved();
    })
  },

  render: function() {

    return(
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{this.props.title}</span>
          <p>{this.props.snippet}</p>
        </div>
        <div className="card-action">
          <a href={this.props.url} target="_blank">Read more</a>
          <button className="waves-effect waves-light btn" id="remove" onClick={this.handleRemoveClick}>remove</button>
        </div>
      </div>
    )
  } 
})

module.exports = Saved;