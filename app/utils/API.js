var axios = require('axios');

var API = (topic, startyear, endyear) => {
  axios.get(`https://api.nytimes.com/svc/topstories/v2/${topic}.json`, {
      params: {
        apikey: '872049e9e7824b7d9f866479292c4d9e'
      }
    })
    .then(function (data) {
      console.log(data.request.response);

      var selectdata = []; 

      for (var i = 0; i < numresults; i++) {
        if (data.request.response.results[i].published_date < startyear && data.request.response.results[i].published_date > endyear) {
          var title = data.request.response.results[i].title;
          var url = data.request.response.results[i].url;

          selectdata.push({
            title,
            url
          })
        }
      }

      return selectdata
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = API;