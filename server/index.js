const authRoutes = require("./routes/auth.route");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require('body-parser');
const crudRouter = require("./routes/crud.route");



dotenv.config()
mongoose
    .connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => {
        console.log("mongoDb connect");
    })
    .catch((err) => {
        console.log(err);
    });

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())


app.use('/api/auth', authRoutes);
app.use('/api/crud', crudRouter);


app.listen(3000, () => {
    console.log("server is running on port 3000!!!")
})
