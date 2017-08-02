var React = require('react');
var API = require('../utils/API.js');

var SearchScreen = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    console.log('form submit');

    var topic = this.refs.topic.value;
    var startyear = this.refs.startyear.value;
    var endyear = this.refs.endyear.value;

    var apidata = API(topic, startyear, endyear); 
  },
  render: function () {

    return (
      <div className="container">
        <h4 className="center-align">Search</h4>
        <div className="row">
          <form className="col s12" onSubmit={this.onFormSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input id="topic" type="text" className="validate" ref="topic"/>
                <label for="topic">Topic</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="startyear" type="text" className="validate" ref="startyear"/>
                <label for="startyear">Start Year</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="endyear" type="text" className="validate" ref="endyear"/>
                <label for="endyear">End Year</label>
              </div>
            </div>
            <button className="waves-effect waves-light btn" id="search">search</button>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = SearchScreen;