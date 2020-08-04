require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const fetch = require("node-fetch");
const cors = require("cors");

const url = `https://api.flickr.com//services/rest?method=flickr.photosets.getPhotos&photoset_id=72157684397751914&user_id=153939265%40N07&extras=url_m&privacy_filter=1&format=json&nojsoncallback=1&api_key=${process.env.FLICKR_API_KEY}`;

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 250, // limit each IP to 250 requests per windowMs
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
