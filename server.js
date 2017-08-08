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

app.listen(PORT, function () {
  console.log('Express server is up on port 3000');
});
