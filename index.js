

// const express = require("express")
import express from "express"

const app = express();
const port = 3000


app.get("/", (req,res) => {
    res.json({msg: "hello students!"})
})

app.listen(port, () => {
    console.log(`the server is running at http://localhost:${port}`)
})