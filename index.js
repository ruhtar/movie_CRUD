const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const db = require("./database/db.js");
const Movie = require("./models/Movie.js");
const routes = require("./routes/routes.js");
app.use(express.json());
app.use(routes);

//---------------- Checking if conection with database is up ---------------------
db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
  console.log("Database connection is up.");
});
//---------------- Server listening
app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
