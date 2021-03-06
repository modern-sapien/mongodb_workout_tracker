const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// VIRTUAL TRUE
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: false,
    default: Date.now
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
},
{ toJSON: {
  virtuals: true
}
}
);

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise)  =>  {
    return total + exercise.duration
  }, 0);
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;