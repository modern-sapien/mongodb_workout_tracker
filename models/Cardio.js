const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  name: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  duration: {
    type: Number,
    required: true
  },
  distance: {
    type: Number,
    required: true
  }
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;