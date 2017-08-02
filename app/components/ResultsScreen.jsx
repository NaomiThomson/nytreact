var React = require('react');

var ResultsScreen = React.createClass({
  render: function () {

    return (
      <div className="row">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title" href="#">Card Title</span>
            </div>
            <div className="card-action">
              <a className="waves-effect waves-light btn" id="save">save</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = ResultsScreen;
