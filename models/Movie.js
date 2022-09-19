const mongoose = require("mongoose");
const { Schema } = mongoose;
//Creation of the Schema and Model for the movie to be registered
const movieSchema = new Schema({
  name: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
