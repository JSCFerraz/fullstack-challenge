"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_errors_1 = __importDefault(require("../errors/app.errors"));
const verifyDataIsValidMiddleware = (schema) => (req, res, next) => {
    const validated = schema.parse(req.body);
    req.body = validated;
    if (validated) {
        const validatedKeys = Object.keys(validated);
        if (!validatedKeys.length) {
            throw new app_errors_1.default("At least one field must be defined: name, email, password or phone.", 400);
        }
    }
    return next();
};
exports.default = verifyDataIsValidMiddleware;
