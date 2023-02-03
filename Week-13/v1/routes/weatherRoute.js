const { response } = require("express");
const express = require("express");
const router = express.Router();
const https = require("https");
const request = require("request");
require("dotenv").config();

const multipleCitiesList = require("../data/cities");

let multipleCitiesData = [];

function getMultipleCitiesData() {
  for (let i = 0; i < multipleCitiesList.length; i++) {
    let currentURL = `${process.env.API_URL}/weather?q=${multipleCitiesList[i]}&appid=${process.env.API_KEY}&units=metric`;

    request(currentURL, (error, response, body) => {
      if (error) console.log(error);

      if (response.statusCode === 200) {
        multipleCitiesData.push(JSON.parse(body));
      } else {
        body = JSON.parse(body);
        multipleCitiesData.push(
          `Couldn't get data for ${multipleCitiesList[i]} - Error ${body.cod} - ${body.message}`
        );
      }
    });
  }
}

getMultipleCitiesData();

router.get("/cities/all", (req, res) => {
  let page = req.query.page;
  let limit = req.query.limit;

  if (!page && !limit) {
    res.send(
      "Missing query parameters - page(page number), limit(no. of cities per page)"
    );
  } else {
    let startIdx = (page - 1) * limit;
    let endIdx = page * limit;

    let data = multipleCitiesData.slice(startIdx, endIdx);
    res.send(data);
  }
});

router.get("/cities/:name", (req, res) => {
  let city = req.params.name;

  if (!city) {
    res.send("No city provided as query");
  }

  let currentURL = `${process.env.API_URL}/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`;

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
});

module.exports = router;
