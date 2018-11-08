const express = require("express")
const User = require("../models/user");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

authRouter.post("/signup", (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, existingUser) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (existingUser !== null) {
            res.status(400);
            return next(new Error("That email already exists!"));
        }
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) return res.status(500).send({success: false, err});
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.status(201).send({ user: user.withoutPassword(), token });
        });
    });
});

authRouter.post("/login", (req, res, next) => {
    User.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!user) {
            res.status(403);
            return next(new Error("email or password are incorrect"));
        }
        user.checkPassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send(err);
            if (!match) res.status(401).send({ message: "email or password are incorrect" });
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.send({ user: user.withoutPassword(), token })
        });
    });
})

module.exports = authRouter;