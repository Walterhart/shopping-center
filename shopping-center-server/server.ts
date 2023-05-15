import express from "express";
import http from 'http'
import dotenv from "dotenv";
import {config} from "./config/config"
import connect from "./db/connectDB"

// Initialize  express
const app: express.Application = express();

require("dotenv").config({ path: __dirname + "/.env" });

app.get("/", (req, res) => {
  res.send("Connected!");
});
// Server setup
const start = async () => {
  try {
   
    await connect.connectDB(config.mongo.url);
    app.listen(config.server.port, () => console.log(`Connected to Port: ${config.server.port}...`));
  } catch (error) {
    console.log(error);
  }
};

// start server
start();
