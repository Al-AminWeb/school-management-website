const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");
const route = require('./routes/route');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/', route);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server started at port no. ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("NOT CONNECTED TO NETWORK", error);
    });