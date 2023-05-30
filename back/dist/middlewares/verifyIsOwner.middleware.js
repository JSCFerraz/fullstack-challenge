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
exports.verifyIsOwnerMiddleware = void 0;
const data_source_1 = require("../data-source");
const entities_1 = require("../entities");
const app_errors_1 = __importDefault(require("../errors/app.errors"));
const verifyIsOwnerMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepositoy = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    const contactId = req.params.id;
    const clientId = req.client.clientId;
    const contact = yield contactRepositoy.findOne({
        where: {
            id: contactId,
        },
        relations: {
            registeredBy: true,
        },
    });
    if (!contact) {
        throw new app_errors_1.default("Contact not fount", 404);
    }
    if (contact.registeredBy.id !== clientId) {
        throw new app_errors_1.default("You don`t have permissions.", 403);
    }
    return next();
});
exports.verifyIsOwnerMiddleware = verifyIsOwnerMiddleware;
