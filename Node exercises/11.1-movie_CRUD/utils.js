const fs = require("fs");
const moviesJson = JSON.parse(fs.readFileSync("./movies.json").toString());

const deleteInApi = (title) => {
  if (!moviesJson.find((e) => e.title === title)) {
    throw new Error("not found!");
  }
  const updatedJson = moviesJson.filter((e) => e.title !== title);
  fs.writeFileSync("./movies.json", JSON.stringify(updatedJson));
  return updatedJson;
};

const addToApi = (obj) => {
  moviesJson.push(obj);
  fs.writeFileSync("./movies.json", JSON.stringify(moviesJson));
};

const findMovie = (title) => {
  const movie = moviesJson.find((item) => item.title === title);
  if (!movie) {
    throw new Error("not found!");
  }
  return movie;
};

const getAllMovies = () => {
  return moviesJson;
};

const updateMovie = (titleToUpdate, updateObj) => {
  if (!moviesJson.find((e) => e.title === titleToUpdate)) {
    throw new Error("not found!");
  }
  const updatedMovies = moviesJson.map((e) => {
    if (e.title !== titleToUpdate) {
      return e;
    } else {
      return updateObj;
    }
  });
  fs.writeFileSync("./movies.json", JSON.stringify(updatedMovies));
  return updatedMovies;
};

module.exports = {
  deleteInApi,
  addToApi,
  findMovie,
  getAllMovies,
  updateMovie,
};
