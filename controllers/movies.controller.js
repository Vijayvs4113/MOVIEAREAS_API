export const movieIndex = (req, res) => {
    res.send("get all movie list")
};

export const movieCreate = (req, res) => {
    // id, title, desc

    console.log(req.body);


    return res.json(req.body);

    //create the movie info
}

export const movieUpdate = (req, res) => {
    res.send("update a movie")
};

export const movieDelete = (req, res) => {
    res.send("delete a movie")
}
