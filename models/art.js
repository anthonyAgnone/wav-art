const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Art", artSchema);