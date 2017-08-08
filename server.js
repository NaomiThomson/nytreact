var express = require('express');
// var Article = require('./models/article');
var mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

// Create our app
var app = express();

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] == 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

// -------------------------------------------------
// MongoDB configuration (Change this URL to your own DB)
mongoose.connect("mongodb://heroku_wbb09z7q:p5om9dq0v4v98eqvq83tc7daia@ds149201.mlab.com:49201/heroku_wbb09z7q");
var db = mongoose.connection;
db.on("error", function (err) {
  console.log("Mongoose Error: ", err);
});
db.once("open", function () {
  console.log("Mongoose connection successful.");
});
// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent Article data.
// We will call this route the moment our page gets rendered
app.get("/api", function (req, res) {
  // This GET request will search for the latest ArticleCount
  Article.find({}).exec(function (err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});
// This is the route we will send POST requests to save each Article.
// We will call this route the moment the "Article" or "reset" button is pressed.
app.post("/api", function (req, res) {
  var title = req.body.title;
  var snippet = req.body.snippet;
  var url = req.body.url;
  // Note how this route utilizes the findOneAndUpdate function to update the ArticleCount
  // { upsert: true } is an optional object we can pass into the findOneAndUpdate method
  // If included, Mongoose will create a new document matching the description if one is not found
  Article.create({
    title : title,
    snippet : snippet,
    url : url
  }).exec(function (err) {
      if (err) {
        console.log(err);
      }
      else {
        res.send("Updated Articles!");
      }
    });
});

app.listen(PORT, function () {
  console.log('Express server is up on port 3000');
});
