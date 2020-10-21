const express = require("express");
const router = express.Router();
const db = require("../models");

// Get all resistance workouts
router.get("/", (req, res)   =>  {
    db.Resistance.find({}).then(foundResistance =>  {
        res.json(foundResistance)
    })
});

// Find resistance workouts by id
router.get("/:id", (req, res)   =>  {
    db.Resistance.find({_id: req.params.id}).then(foundResistance =>
        {
            res.json(foundResistance)
        })
})

// Add resistance workouts
router.post("/", (req, res)   =>  {
    db.Resistance.create(req.body)
    .then(newResistance => {
        res.json(newResistance);
    })
})

// Update resistance workouts by id
router.put("/:id", (req, res)   =>  {
    db.Resistance.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedResistance)    =>  {
    res.json(updatedResistance)
    })
})

// Delete resistance workouts by id
router.delete("/:id", (req, res)   =>  {
    db.Resistance.findByIdAndDelete(req.params.id).then((result) => {
        res.json(result)
    })
})
module.exports = router;