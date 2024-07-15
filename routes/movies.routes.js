import express from "express"

const router = express.Router();

// R - For reading
router.get('/',(req, res) => {
    res.send("get all movie list")
})

// C - For creating movies
router.post('/',(req, res) => {
    res.send("create a movie")

})

// U - For updating movies
router.put('/id',(req, res) => {
    res.send("update a movie")
})

// D - For deleting movies
router.delete('/id',(req, res) => {
    res.send("delete a movie")

});

export default router