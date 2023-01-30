const { response } = require("express");
const express = require("express");
const app = express();
const https = require("https");
require("dotenv").config();

let PORT = process.env.PORT;

app.get("/weather", (req, res) => {
  let city = req.query.city;

  if (!city) {
    res.send("No city provided as query");
  }

  let currentURL = `${process.env.API_URL}/weather?q=${city}&appid=${process.env.API_KEY}`;

  https.get(currentURL, (response) => {
    response.on("data", (chunk) => {
      chunk = JSON.parse(chunk);
      let result = {
        city: chunk.name,
        country: chunk.sys.country,
        temperature: chunk.main.temp,
        pressure: chunk.main.pressure,
        humidity: chunk.main.humidity,
        description: chunk.weather[0].description,
        longitude: chunk.coord.lon,
        latitude: chunk.coord.lat,
        visibility: chunk.visibility,
        windSpeed: chunk.wind.speed,
        id: chunk.id,
      };
      res.json(result);
    });
  });
});

app.get("/", (req, res) => {
  res.send("Hello world, welcome to Weather API");
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
