const express = require("express");
const cors = require("cors");
require("dotenv").config();

const rateLimit = require("express-rate-limit");

const app = express();

const port = process.env.PORT || 5500;

app.use(cors());

//RateLimiting
const limiter = rateLimit({
    windowMs : 10*60*1000,
    max:5
})

app.use(limiter);
app.set("trust proxy", 1);

app.get("/", (req,res) => {
    res.status(200).send("Homepagee");
})

app.use('/api', require("./routes"))
// app.get("/api", (req, res) => {
//     res.status(200).json({
//         success : "true"
//     })
// })

app.listen(port, (req, res) => {
    console.log(`Running on : localhost:${port}`)
})