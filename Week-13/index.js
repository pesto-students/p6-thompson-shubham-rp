const express = require("express");
const app = express();
const https = require("https");
require("dotenv").config();

let PORT = process.env.PORT;

const weatherRoute = require("./v1/routes/weatherRoute");
const forecastRoute = require("./v1/routes/forecastRoute");

app.use("/v1/weather", weatherRoute);
app.use("/v1/forecast", forecastRoute);

app.get("/", (req, res) => {
  res.send("Hello world, welcome to Weather API");
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
