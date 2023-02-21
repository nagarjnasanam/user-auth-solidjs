const mongoose = require("mongoose");

const DB =
  "mongodb+srv://nagarjuna:nagarjuna123@cluster0.oynhj.mongodb.net/SolidJS?retryWrites=true&w=majority";

  mongoose.connect(DB,{useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("connection started")).catch((error) => console.log(error.message) );