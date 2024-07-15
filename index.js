

// const express = require("express")
import express from "express"

const app = express();
const port = 3000


app.get("/", (req,res) => {
    res.json({msg: "hello students!"})
})

//CRUD functionality of movies

// R - For reading
app.get('/movies',() => {

})

// C - For creating movies
app.post('/movies',() => {

})

// U - For updating movies
app.put('/movies/:id',() => {

})

// D - For deleting movies
app.delete('/movies:/id',() => {

});

app.listen(port, () => {
    console.log(`the server is running at http://localhost:${port}`)
})