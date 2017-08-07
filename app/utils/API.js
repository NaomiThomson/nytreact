var axios = require('axios');

var API = (topic, startyear, endyear) => {
  axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        apikey: '872049e9e7824b7d9f866479292c4d9e', 
        q: topic, 
        begin_date: `${startyear}0101`,
        end_date: `${endyear}1231`
      }
    })
    .then(function (res) {    
      console.log(res.data.response.docs)
      return res.data.response.docs
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = API;