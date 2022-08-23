import { Application } from "express";
const express = require("express");
 

const exampleRoute = require("./exampleRoute");

const routes = function (server:  Application) {
  server.use("/exampleRoute", exampleRoute);
};

module.exports = routes;
