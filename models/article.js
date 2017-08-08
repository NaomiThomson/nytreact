// Include the Mongoose Dependencies
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// Create a Schema for capturing Articles. We'll use ArticleID to update the same ArticleCounter
var ArticleSchema = new Schema({
  title: {
    type: String
  },
  snippet: {
    type: String
  }, 
  url: {
    type: String
  }
});
// Create the Model
var Article = mongoose.model("Article", ArticleSchema);
// Export it for use elsewhere
module.exports = Article;