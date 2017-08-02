var React = require('react');

var Header = React.createClass({
  render: function () {

    return (

      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo center">New York Times Article Scrubber</a>
        </div>
      </nav>
    )
  }
})

module.exports = Header;