const { response } = require("express");
const express = require("express");
const router = express.Router();
const request = require("request");

const https = require("https");
require("dotenv").config();

router.get("/", (req, res) => {
  let days = req.query.days;
  let city = req.query.city;

  let currentURL = `${process.env.API_URL}/forecast?q=${city}&cnt=${days}&appid=${process.env.API_KEY}&units=metric`;

  if (!city && !days) {
    res.send("Missing required parameters - City and/or days");
  }

  if (days > 16) {
    res.send("Number of days for forecast should be between 1 to 16");
  }

  request(currentURL, (error, response, body) => {
    if (error) console.log(error);

    if (response.statusCode === 200) {
      res.json(JSON.parse(body));
    } else {
      body = JSON.parse(body);
      res.send(
        `Couldn't get data for ${city} - Error ${body.cod} - ${body.message}`
      );
    }
  });

  // https.get(currentURL, (response) => {
  //   response
  //     .on("data", (chunk) => {
  //       chunk = JSON.parse(chunk);
  //       if (chunk.cod === 200) {
  //         res.send(chunk);
  //       }
  //     })
  //     .on("error", (error) => {
  //       console.log(error);
  //     });
  // });
});

module.exports = router;
