import express from "express"
import { movieCreate, movieDelete, movieDetail, movieIndex, movieUpdate } from "../controllers/movies.controller.js";

const router = express.Router();

// R - For reading
router.get('/',movieIndex)

router.get('/:id', movieDetail);

// C - For creating movies
router.post('/',movieCreate);



// U - For updating movies
router.put('/:id',movieUpdate)

// D - For deleting movies
router.delete('/id',movieDelete);

export default router