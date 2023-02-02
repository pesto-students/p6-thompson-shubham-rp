const express = require("express");
const router = express.Router();
const https = require("https");
require("dotenv").config();

const multipleCitiesList = require("../data/cities");

let multipleCitiesData = [];

function getMultipleCitiesData() {
  for (let i = 0; i < multipleCitiesList.length; i++) {
    let currentURL = `${process.env.API_URL}/weather?q=${multipleCitiesList[i]}&appid=${process.env.API_KEY}&units=metric`;

    https.get(currentURL, (response) => {
      response
        .on("data", (chunk) => {
          chunk = JSON.parse(chunk);
          if (chunk.cod === 200) {
            multipleCitiesData.push(chunk);
          } else {
            multipleCitiesData.push(
              `Couldn't get data for ${multipleCitiesList[i]} - Error ${chunk.cod} - ${chunk.message}`
            );
          }
        })
        .on("error", (e) => {
          console.log(e);
        });
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

  https.get(currentURL, (response) => {
    response
      .on("data", (chunk) => {
        chunk = JSON.parse(chunk);
        if (chunk.cod === 200) {
          res.send(chunk);
        } else {
          res.send(
            `There has been some issue - Error ${chunk.cod} - ${chunk.message}`
          );
        }
      })
      .on("error", (e) => {
        console.log(e);
      });
  });
});

module.exports = router;
