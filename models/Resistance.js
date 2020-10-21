const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
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
  weight: {
    type: Number,
    required: false
  },
  reps: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    required: true
  }
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;