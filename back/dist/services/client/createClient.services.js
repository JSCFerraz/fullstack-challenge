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
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const app_errors_1 = __importDefault(require("../../errors/app.errors"));
const client_schemas_1 = require("../../schemas/client.schemas");
const createClientService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = userData;
    const clientRepository = data_source_1.AppDataSource.getRepository(entities_1.Client);
    const findClient = yield clientRepository.findOne({
        where: { email },
    });
    if (findClient) {
        throw new app_errors_1.default("Client aready exists.");
    }
    const client = clientRepository.create(userData);
    yield clientRepository.save(client);
    const newClient = client_schemas_1.clientSchemaResponse.parse(client);
    return newClient;
});
exports.default = createClientService;
