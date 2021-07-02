const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");

require("./models/chats");
require("./models/users");
require("./services/passport");

mongoose.connect("mongodb+srv://alexbukin:06929944Aa@blablafy-dev.2z30i.mongodb.net/Chats?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }).catch((error) => console.log(error));

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["fasdfweadfasdf"]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send("Hello World")
});

require("./routes/userRoutes")(app);
require("./routes/authRoutes")(app);
require("./routes/chatRoutes")(app);

const PORT = 5000;
app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));