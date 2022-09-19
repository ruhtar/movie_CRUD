const mongoose = require("mongoose");
//Mongoose was used to make the connection with the database MongoDB
mongoose.connect(
  "mongodb+srv://root:42qQ3NGng1t0lUoQ@apicluster.q9o7xbi.mongodb.net/?retryWrites=true&w=majority"
);
let db = mongoose.connection;
module.exports = db;
