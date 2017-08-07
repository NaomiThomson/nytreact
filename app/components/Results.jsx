var React = require('react');

var ResultsScreen = React.createClass({

  renderNews: function () {

    if (this.props.data) {
      return this.props.data.map((article) => {
        return (
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{article.headline.main}</span>
              <p>{article.snippet}</p>
            </div>
            <div className="card-action">
              <a href={article.web_url} target="_blank">Read more</a>
              <a href="#" id="save">save</a>
            </div>
          </div>
        )
      });
    }

  },
  render: function () {
    return (
      <div>
        <div className="container">
          <h4 className="center-align">Results</h4>
          <div className="row">
            <div className="col s12 m12">
              {this.renderNews()}
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = ResultsScreen;
