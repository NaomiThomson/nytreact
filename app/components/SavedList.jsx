var React = require('react');
var Saved = require('./Saved.jsx');

var SavedList = React.createClass({
  renderSaved: function() {
    if (this.props.data) {
      return this.props.data.map((article) => {
        // return (
        //   <div>
        //     <Saved {...article} />
        //   </div>
        // )
        return "hi";
      })
    }
  },

  render: function () {

    return (
      <div className="container">
        <h4 className="center-align">Saved Articles</h4>
        <div className="row">
          <div className="col s12 m12">
            <div className="card blue-grey darken-1">
              {this.renderSaved()}
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = SavedList;