require("dotenv").config();
const fetch = require("node-fetch");
const Flickr = require("flickr-sdk");

const api = new Flickr(process.env.FLICKR_API_KEY);

const getAllPhotos = api.galleries
    .getPhotos({
        gallery_id: "153939265@N07",
    })
    .then(function (res) {
        console.log(res);
    });
