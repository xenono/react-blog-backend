const mongoose = require("mongoose");
require("../models/User");

const User = mongoose.model("user");

const getAllUsers = (req, res) => {
    User.find({})
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

const getUserByName = (req, res) => {
    const receivedUsername = req.body.username;
    const receivedUserPassword = req.body.password;

    User.findOne({ username: receivedUsername })
        .then((result) => {
            if (receivedUserPassword === result.password) {
                res.send(true);
            } else {
                res.send(false);
            }
        })
        .catch((err) => {
            res.send(false);
        });
};

module.exports = {
    getAllUsers,
    getUserByName,
};
