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
exports.clientLoginController = void 0;
const createClientLogin_services_1 = __importDefault(require("../services/login/createClientLogin.services"));
const clientLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userLogin = req.body;
    const token = yield (0, createClientLogin_services_1.default)(userLogin);
    return res.json({ token: token });
});
exports.clientLoginController = clientLoginController;
