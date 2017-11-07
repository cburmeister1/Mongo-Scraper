var mongoose = require("mongoose");
var Note = require("./Note");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

// This creates a model from the schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;