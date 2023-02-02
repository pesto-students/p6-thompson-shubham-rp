const { response } = require("express");
const express = require("express");
const router = express.Router();

const https = require("https");
require("dotenv").config();

router.get("/", (req, res) => {
  let days = req.query.days;
  let city = req.query.city;

  let currentURL = `${process.env.API_URL}/forecast?q=${city}&cnt=${days}&appid=${process.env.API_KEY}&units=metric`;

  https.get(currentURL, (response) => {
    response
      .on("data", (chunk) => {
        chunk = JSON.parse(chunk);
        if (chunk.cod === 200) {
          res.send(chunk);
        }
      })
      .on("error", (error) => {
        console.log(error);
      });
  });
});

module.exports = router;
