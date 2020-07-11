const express = require("express");
const {
    postController,
    tutorialController,
    userController,
    getAllItems,
} = require("../controllers");

const router = express.Router();

router.get("/posts", postController.getAllPosts);
router.get("/posts/:id", postController.getPostById);
router.get("/tutorials", tutorialController.getAllTutorials);
router.get("/tutorials/:id", tutorialController.getTutorialById);

router.put("/posts/update/:id", postController.updatePost);
router.put("/tutorials/update/:id", tutorialController.updateTutorial);

router.post("/posts/add", postController.addPost);
router.post("/tutorials/add", tutorialController.addTutorial);

router.post("/users", userController.getAllUsers);
router.post("/getUser", userController.getUserByName);

router.delete("/delete/posts/:id", postController.deletePost);
router.delete("/delete/tutorials/:id", tutorialController.deleteTutorial);

module.exports = router;
