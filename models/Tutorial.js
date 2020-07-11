const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TutorialSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
});

mongoose.model("tutorial", TutorialSchema);
