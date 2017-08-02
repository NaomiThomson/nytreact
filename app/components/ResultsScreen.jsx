var React = require('react');

var ResultsScreen = React.createClass({
  render: function () {

    var title = this.props.title;
    var url = this.props.url;

    return (
      <div className="container">
        <h4 className="center-align">Results</h4>
        <div className="row">
          <div className="col s12 m12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title" href={url}>{title}</span>
              </div>
              <div className="card-action">
                <a className="waves-effect waves-light btn" id="save">save</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = ResultsScreen;
