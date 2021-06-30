const mongoose = require("mongoose");

const Message = mongoose.model("chats")

module.exports = app => {
    app.post("/api/chat", async (req, res) => {
        const message = await new Message({
            name: req.body.name,
            message: req.body.message
        });
        message.save();
        res.send(message);
    });

    app.get("/api/chat", async (req, res) => {
        await Message.find({}, (err, messages) => {
            res.send(messages);
        });
    });
}