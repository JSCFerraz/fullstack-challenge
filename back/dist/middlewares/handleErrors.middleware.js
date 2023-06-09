"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const app_errors_1 = __importDefault(require("../errors/app.errors"));
const handleErrorMiddleware = (error, req, res, _) => {
    if (error instanceof app_errors_1.default) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    if (error instanceof zod_1.ZodError) {
        return res.status(400).json({ message: error.flatten().fieldErrors });
    }
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
};
exports.default = handleErrorMiddleware;
