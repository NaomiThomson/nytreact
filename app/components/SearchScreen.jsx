var React = require('react');

var SearchScreen = React.createClass({
  render: function () {

    return (
      <div className="container">
        <h4 className="center-align">Search</h4>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="topic" type="text" className="validate" />
                <label for="topic">Topic</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="start_year" type="text" className="validate" />
                <label for="start_year">Start Year</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="end_year" type="text" className="validate" />
                <label for="end_year">End Year</label>
              </div>
            </div>
            <a className="waves-effect waves-light btn" id="search">search</a>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = SearchScreen;