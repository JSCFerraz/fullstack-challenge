"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const handleErrors_middleware_1 = __importDefault(require("./middlewares/handleErrors.middleware"));
const login_routes_1 = __importDefault(require("./routers/login.routes"));
const clients_routes_1 = __importDefault(require("./routers/clients.routes"));
const contacts_routes_1 = __importDefault(require("./routers/contacts.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/clients", clients_routes_1.default);
app.use("/login", login_routes_1.default);
app.use("/contacts", contacts_routes_1.default);
app.use(handleErrors_middleware_1.default);
exports.default = app;
