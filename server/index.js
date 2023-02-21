import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// const express = require('express')
import('./db/connection')
// const router = require("./routes/index");
import router from './routes/index';

const app = express();
const port = 8003;


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use(router)
//mongodb

// const dbUrl = "mongodb+srv://nagarjuna:nagarjuna123@cluster0.oynhj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// // const dbUrl = "mongodb://localhost:27017/test";
// const connectionParams = {
//     useNewUrlParser: true, useUnifiedTopology: true
// };
// const PORT = process.env.PORT|| 5000;
// mongoose.connect(dbUrl,connectionParams)
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);

app.listen(port,() =>{
  console.log(`server is started at ${port}` );
});