var React = require('react');
var Result = require('./Result.jsx');
var helpers = require("../utils/helpers");

var ResultsList = React.createClass({
  renderNews: function () {
    if (this.props.data) {
      return this.props.data.map((article) => {
        return (
          <div>
            <Result {...article} onGetSaved={this.props.onGetSaved}/>
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

module.exports = ResultsList;


