const Movie = require("../models/Movie.js");
//Here are the 4 methods used in the API. Get, post, put and delete.
class MovieControllers {
  static async showMovies(req, res) {
    try {
      const allMovies = await Movie.find();
      return res.status(200).json(allMovies);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
  static async registerMovies(req, res) {
    const { name } = req.body;
    const movieName = {
      name,
    };
    try {
      await Movie.create(movieName);
      res.status(200).json({ message: "Filme cadastrado com sucesso!" });
    } catch (err) {
      res.status(500).json({ error: error });
    }
  }
  static async updateMovie(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      await Movie.findByIdAndUpdate(id, { name: name });
      res.status(200).json({ message: "Filme atualizado com sucesso!" });
    } catch (err) {
      res.status(500).json({ error: error });
    }
  }
  static async deleteMovie(req, res) {
    const { name } = req.body;
    try {
      await Movie.deleteOne({ name: name });
      res.status(200).json({ message: "Filme deletado com sucesso!" });
    } catch (err) {
      res.status(500).json({ error: error });
    }
  }
}

module.exports = MovieControllers;
