const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    googleId: String,
    registered: Date
});

mongoose.model("users", userSchema);