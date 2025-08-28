const express = require('express');
const app = express();
const userModel = require('./usermodel');
const usermodel = require('./usermodel');

app.get("/", (req, res) => {
    res.send("Welcome!!");
})

app.get("/create", async (req, res) => {
    let createdUser = await usermodel.create({
        name: "Nice",
        email: "nice@gmail.com",
        username: "nice"
    })
    
    res.send(createdUser);
})

app.get("/update", async (req, res) => {
    let updatedUser = await usermodel.findOneAndUpdate({username: "jatinbaghel"}, {name: "Jatin Baghel", email: "jatin@gmail.com"}, {new: true});

    res.send(updatedUser);
}
)

app.get("/read", async (req, res) => {
    let users = await usermodel.find();
    
    res.send(users);
})

app.get("/delete", async (req, res) => {
    let deletedUser = await usermodel.findOneAndDelete({username: "nice"});
    
    res.send(deletedUser);
})


app.listen(3000)