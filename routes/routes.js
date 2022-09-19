const express = require("express");
const router = express.Router();
const controller = require("../controllers/MovieControllers.js");
//All the routes that the API can go with their corresponding methods
router.get("/", controller.showMovies);
router.post("/", controller.registerMovies);
router.put("update/:id");
router.delete("/delete", controller.deleteMovie);
module.exports = router;
