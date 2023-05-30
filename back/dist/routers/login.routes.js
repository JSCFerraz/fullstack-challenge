"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/login.controller");
const verifyDataIsValid_middleware_1 = __importDefault(require("../middlewares/verifyDataIsValid.middleware"));
const login_schemas_1 = __importDefault(require("../schemas/login.schemas"));
const loginRoute = (0, express_1.Router)();
loginRoute.post("", (0, verifyDataIsValid_middleware_1.default)(login_schemas_1.default), login_controller_1.clientLoginController);
exports.default = loginRoute;
