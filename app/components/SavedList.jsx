var React = require('react');
var Saved = require('./Saved.jsx');

var SavedList = React.createClass({
  renderSaved: function() {
    if (this.props.data) {
      return this.props.data.slice(0).reverse().map((article) => {
        return (
          <div>
            <Saved {...article} onGetSaved={this.props.onGetSaved}/>
          </div>
        )
      })
    }
  },

  render: function () {

    return (
      <div className="container">
        <h4 className="center-align">Saved Articles</h4>
        <div className="row">
          <div className="col s12 m12">
              {this.renderSaved()}
          </div>
        </div>
      </div>
    )
  }
})

module.exports = SavedList;