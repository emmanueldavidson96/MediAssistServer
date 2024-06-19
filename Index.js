const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const {GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,} = require("@google/generative-ai");
const fs = require("fs");
const cors = require("cors");

const port = process.env.PORT || 5000
const app = express();
app.use(express.json())
app.use(cors());
dotenv.config()

const my_google_ai = new GoogleGenerativeAI("AIzaSyCszGsD5xZuPNNKD2wPovdvBnzQ1Ci6B3o");

app.use("/", async (req, res) => {
    res.send("Live Api Deployments")
})

app.post("/mediassist", async (req,res) => {
    const model = my_google_ai.getGenerativeModel({
        model: "gemini-1.5-flash"
    })
    const chat = model.startChat({
        history: req.body.history
    })
    const msg = req.body.message
    const result = await chat.sendMessage(msg)
    const response = result.response
    const text = response.text()
    res.send(text)
})

app.listen(port, async () => {
    console.log(`App running on port ${port}`)
})