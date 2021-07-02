const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
   
  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

passport.use(new GoogleStrategy({
        clientID: "669562399580-v18hais1cmb2619tm01tc1umh2n2rssk.apps.googleusercontent.com",
        clientSecret: "8Pl3ip4oNGKqNbx9rDhpuvNn",
        callbackURL: "/auth/google/callback"
    }, 
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({googleId: profile.id});
        if (existingUser) {
            return done(null, existingUser);
        }

        const user = await new User({name: profile.displayName, googleId: profile.id, registered: new Date()}).save();
        done(null, user);
    }
));