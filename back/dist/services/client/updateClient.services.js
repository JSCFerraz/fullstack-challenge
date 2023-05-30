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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const client_schemas_1 = require("../../schemas/client.schemas");
const updateClientService = (userData, clientId) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepo = data_source_1.AppDataSource.getRepository(entities_1.Client);
    const oldUser = yield clientRepo.findOneBy({
        id: clientId,
    });
    const mergeClientData = Object.assign(Object.assign({}, oldUser), userData);
    const updatedClient = clientRepo.create(mergeClientData);
    yield clientRepo.save(updatedClient);
    const newUpdatedClient = client_schemas_1.clientSchemaResponse.parse(updatedClient);
    return newUpdatedClient;
});
exports.default = updateClientService;
