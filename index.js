require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/encryption');


mongoose.connect(process.env.DB_URL, { dbName: "test-encription" });
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
app.use(express.json());
app.use(cors())
app.use('/api', router)

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});