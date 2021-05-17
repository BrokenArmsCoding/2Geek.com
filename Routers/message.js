const { Message } = require("@angular/compiler/src/i18n/i18n_ast");
const express = require("express");
const { helloworld } = require("../Controllers/mensaje");
const MessageControler = require("/Controlers/message");

const api = express.Router();

api.get("/hello-world", MessageControler,helloworld);

module.exports = api;
