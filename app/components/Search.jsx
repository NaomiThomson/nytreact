var React = require('react');
var axios = require('axios');

var Search = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var topic = this.refs.topic.value;
    var startyear = this.refs.startyear.value;
    var endyear = this.refs.endyear.value;

    this.getNews(topic, startyear, endyear);
  },

  getNews: function (topic, startyear, endyear) {
    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        apikey: '872049e9e7824b7d9f866479292c4d9e',
        q: topic,
        begin_date: `${startyear}0101`,
        end_date: `${endyear}1231`
      }
    })
      .then((res) => {
        this.props.onNewScrapedNews(res.data.response.docs);
      })
      .catch(function (error) {
        console.log(error);
      });


  },
  render: function () {

    return (
      <div className="container">
        <h4 className="center-align">Search</h4>
        <div className="row">
          <form className="col s12" onSubmit={this.onFormSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input id="topic" type="text" className="validate" ref="topic" />
                <label for="topic" className="active">Topic</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="startyear" type="text" className="validate" ref="startyear" />
                <label for="startyear" className="active">Start Year</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="endyear" type="text" className="validate" ref="endyear" />
                <label for="endyear" className="active">End Year</label>
              </div>
            </div>
            <button className="waves-effect waves-light btn" id="search">search</button>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = Search;