"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected!");
    const PORT = Number(process.env.PORT) || 3000;
    const runningMsg = `Server running on http://localhost:${PORT}`;
    app_1.default.listen(PORT, () => {
        console.log(runningMsg);
    });
})
    .catch((err) => {
    console.error(err);
});
