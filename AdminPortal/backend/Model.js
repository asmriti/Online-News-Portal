const mongoose = require("mongoose");
const newsSchema = {
  id: String,
  title: String,
  body: String,
  url: String,
  labels: Array,
  author: String,
  date: String,
};

const News = mongoose.model("News", newsSchema);
module.exports = News;
