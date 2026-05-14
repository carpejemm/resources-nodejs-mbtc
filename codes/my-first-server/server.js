console.log("Hello world!");

// CommonJS and ES Modules
// CommonJS - require and module.exports
// const express = require("express");


// ES Modules - import and export

import { createServer } from "node:http";
import express from "express";

const PORT = 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world and hello Universe!");
});


// const user = {
//   firstName: "Jem",
//   lastName: "Laguda",
//   age: 30,
//   email: "jem@gmail.com",
//   country: "Nigeria", // I want to update this to Philippines
// }

// PUT method - update a resource

// const user = {
//   firstName: "",
//   lastName: "",
//   age: null,
//   email: "",
//   country: "Philippines", // I want to update this to Philippines
// }

// PATCH method - update a resource partially
// const user = {
//   firstName: "Jem",
//   lastName: "Laguda",
//   age: 30,
//   email: "jem@gmail.com",
//   country: "Philippines", 
// }


server.listen(PORT, () => {
  // Object literal syntax
  console.log(`Server is running on http://localhost:${PORT}`);
});