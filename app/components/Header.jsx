var React = require('react');

var Header = React.createClass({
  render: function() {

    return (
      <div className="jumbotron text-center vertical-center">
        <h1 className="center-align">New York Times Article Scrubber</h1>
        <h3 className="center-align">Search for and save articles of interest!</h3>
      </div>
    )
  }
})

module.exports = Header;