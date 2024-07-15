// const express = require("express")
import express from "express"
import movieroute from './routes/movies.routes.js'

const app = express();
const port = 3000


app.get("/", (req,res) => {
    res.json({msg: "hello students!"})
})

//CRUD functionality of movies
app.use('/movies',movieroute)



app.listen(port, () => {
    console.log(`the server is running at http://localhost:${port}`)
})