require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const fetch = require("node-fetch");
const cors = require("cors");

const url = `https://api.flickr.com/services/rest?method=flickr.photosets.getPhotos&photoset_id=72157684397751914&user_id=153939265%40N07&extras=url_m,url_l,description,views&privacy_filter=1&format=json&nojsoncallback=1&api_key=${process.env.FLICKR_API_KEY}`;
const app = express();

const limiter = rateLimit({
    windowMs: 60 * 60000, // 60 minutes
    max: 128, // limit each IP to 250 requests per windowMs
});

app.use(cors());
app.use(limiter);

// Grab Photos
app.get("/api/getphotos", function (req, res) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            res.send(data);
        });
});

// Start Server
app.listen("3000", function (error) {
    if (error) throw error;
    console.log("Server Started");
});
