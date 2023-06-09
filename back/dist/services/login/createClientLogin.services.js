"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
require("dotenv/config");
const app_errors_1 = __importDefault(require("../../errors/app.errors"));
const createClientLoginService = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = data_source_1.AppDataSource.getRepository(entities_1.Client);
    const client = yield clientRepository.findOneBy({
        email: loginData.email,
    });
    if (!client) {
        throw new app_errors_1.default("Invalid credentials", 401);
    }
    if (client.deletedAt !== null) {
        throw new app_errors_1.default("Invalid credentials", 401);
    }
    const passwordMatch = yield (0, bcryptjs_1.compare)(loginData.password, client.password);
    if (!passwordMatch) {
        throw new app_errors_1.default("Invalid credentials", 401);
    }
    const token = jsonwebtoken_1.default.sign({
        clientId: client.id,
    }, String(process.env.SECRET_KEY), {
        expiresIn: String(process.env.EXPIRES_IN),
        subject: String(client.id),
    });
    return token;
});
exports.default = createClientLoginService;
