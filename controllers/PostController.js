const mongoose = require("mongoose");
require("../models/Post");

const Post = mongoose.model("post");

const getAllPosts = (req, res) => {
    Post.find({})
        .then((posts) => res.send(posts))
        .catch((err) => console.log(err));
};
const addPost = async (req, res) => {
    const newPost = new Post(req.body);

    newPost.save((err, Post) => {
        if (err) {
            return console.log(err);
        } else {
            res.send(Post);
        }
    });
};

const deletePost = (req, res) => {
    const postId = req.params.id;

    Post.findByIdAndRemove(postId)
        .then((result) => {
            if (!result) {
                res.send("There is no post with this ID");
            } else {
                res.send(result);
            }
        })
        .catch((err) => res.send(err));
};

const updatePost = (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
};

const getPostById = (req, res) => {
    const postId = req.params.id;

    Post.findById(postId)
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};
module.exports = {
    getAllPosts,
    addPost,
    deletePost,
    updatePost,
    getPostById,
};
