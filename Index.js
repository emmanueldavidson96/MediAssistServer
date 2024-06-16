const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/", async (req, res) => {
    res.send("Live Api Deployments")
})


app.listen(PORT, async () => {
    console.log(`App running in port ${PORT}`)
})