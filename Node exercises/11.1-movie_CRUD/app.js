const express = require("express");
const app = express();
const cors = require("cors");


const {
  deleteInApi,
  addToApi,
  findMovie,
  getAllMovies,
  updateMovie,
  sortedMovies,
} = require("./utils.js");

app.use(cors());
app.use(express.json());

app.get("/api/movies", (req, res) => {
  try {
    if (req.query.sorted) {
      const movies = sortedMovies();
      res.status(200).send(movies);
    } else {
      const movies = getAllMovies();
      res.status(200).send(movies);
    }
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.get("/api/movies/:movie", (req, res) => {
  try {
    const { movie } = req.params;
    const user = findMovie(movie);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.post("/api/movies/", (req, res) => {
  try {
    addToApi(req.body);
    res.status(200).send(res.body);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.delete("/api/movies/:movie", (req, res) => {
  try {
    deleteInApi(req.params.movie);
    res.status(200).send(req.params.movie);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.put("/api/movies/:movie", (req, res) => {
  try {
    updateMovie(req.params.movie, req.body);
    res.status(200).send(req.body);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("listening..");
});
