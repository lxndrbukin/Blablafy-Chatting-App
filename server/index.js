const express = require("express");
const mongoose = require("mongoose");

require("./models/chats");

mongoose.connect("mongodb+srv://alexbukin:06929944Aa@blablafy-dev.2z30i.mongodb.net/Chats?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }).catch((error) => console.log(error));

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World")
});

require("./routes/userRoutes")(app);
require("./routes/chatRoutes")(app);

const PORT = 5000;
app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));