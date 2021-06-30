const mongoose = require("mongoose");
const {Schema} = mongoose;

const chatSchema = new Schema({
    name: String,
    message: String
});

mongoose.model("chats", chatSchema);