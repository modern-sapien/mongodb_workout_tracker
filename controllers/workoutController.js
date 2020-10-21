const express = require("express");
const router = express.Router();
const db = require("../models");

// Get all resistance workouts
router.get("/", (req, res)   =>  {
    db.Workout.find({}).then(foundWorkout =>  {
        res.json(foundWorkout)
    })
});

// Find resistance workouts by id
router.get("/:id", (req, res)   =>  {
    db.Workout.find({_id: req.params.id})
    .then(foundWorkout =>
        {res.json(foundWorkout)
        }).catch((err)  =>  {
            console.log(err)
        })
})

// Add resistance workouts
router.post("/", (req, res)   =>  {
    console.log(req.body)
    db.Workout.create(req.body)
    .then(newWorkout => {
        res.json(newWorkout);
    }).catch((err)  =>  {
        console.log(err)
    })
})

// Update resistance workouts by id
router.put("/:id", (req, res)   =>  {
    db.Workout.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedWorkout)    =>  {
    res.json(updatedWorkout)
    }).catch((err)  =>  {
        console.log(err)
    }) 
})

// Delete resistance workouts by id
router.delete("/:id", (req, res)   =>  {
    db.Workout.findByIdAndDelete(req.params.id).then((result) => {
        res.json(result)
    })
})
module.exports = router;