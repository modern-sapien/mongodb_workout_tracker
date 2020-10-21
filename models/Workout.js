const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    required: false
  },
  exercises: [{
  type: {
    type: String,
    trim: false,
    required: "String is Required"
  },
  name: {
    type: String,
    trim: false,
    required: "String is Required"
  },
    duration: {
      type: Number,
      required: false
    },
    weight: {
      type: Number,
      required: false
    },
    distance: {
      type: Number,
      required: false
    },
    reps: {
      type: Number,
      required: false
    },
    sets: {
      type: Number,
      required: false
    },
  }],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;