const mongoose = require("mongoose");
require("../models/Tutorial");

const Tutorial = mongoose.model("tutorial");

const getAllTutorials = (req, res) => {
    Tutorial.find({})
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
};

const getTutorialById = (req, res) => {
    const TutorialId = req.params.id;
    Tutorial.findById(TutorialId)
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

const addTutorial = (req, res) => {
    const newTutorial = new Tutorial(req.body);

    newTutorial.save((err, tutorial) => {
        if (err) {
            return console.log(err);
        } else {
            res.send(tutorial);
        }
    });
};

const deleteTutorial = (req, res) => {
    const tutorialId = req.params.id;

    Tutorial.findByIdAndRemove(tutorialId)
        .then((result) => {
            if (!result) {
                res.send("There is no tutorial with this ID");
            } else {
                res.send(result);
            }
        })
        .catch((err) => console.log(err));
};

const updateTutorial = (req, res) => {
    Tutorial.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};
module.exports = {
    getAllTutorials,
    getTutorialById,
    addTutorial,
    deleteTutorial,
    updateTutorial,
};
