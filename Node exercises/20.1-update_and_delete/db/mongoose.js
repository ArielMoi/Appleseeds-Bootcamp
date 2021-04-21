const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/practice", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
