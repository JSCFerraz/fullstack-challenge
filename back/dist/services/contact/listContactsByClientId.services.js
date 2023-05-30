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
const listAllContactsByClientIdService = (clientId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepo = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    const clientRepo = data_source_1.AppDataSource.getRepository(entities_1.Client);
    const findClient = yield clientRepo.findOneBy({
        id: clientId,
    });
    const findClientContacts = yield contactRepo
        .createQueryBuilder("contacts")
        .innerJoinAndSelect("contacts.registeredBy", "clients")
        .where("contacts.registeredBy = :client", {
        client: clientId,
    })
        .getMany();
    // console.log(findClientContacts);
    // if (findClientContacts) {
    //   throw new Error("This client contact aready exists.");
    // }
    // const contacts: Array<TContactResponse> =
    //   multipleContactsResponseSchema.parse(findClientContacts);
    return findClientContacts;
});
exports.default = listAllContactsByClientIdService;
