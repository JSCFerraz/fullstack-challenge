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
const contact_schemas_1 = require("../../schemas/contact.schemas");
const updateContactService = (contactData, contactId, clientId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepo = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    const clientRepository = data_source_1.AppDataSource.getRepository(entities_1.Client);
    const oldContact = yield contactRepo.findOneBy({
        id: contactId,
    });
    const findClient = yield clientRepository.findOne({
        where: {
            id: clientId,
        },
    });
    const mergeContactData = Object.assign(Object.assign({}, oldContact), contactData);
    const updatedContact = contactRepo.create({
        id: contactId,
        name: mergeContactData.name,
        email: mergeContactData.email,
        phone: mergeContactData.phone,
        registeredBy: findClient,
    });
    yield contactRepo.save(updatedContact);
    const newUpdatedContact = contact_schemas_1.contactSchemaUpdateResponse.parse(mergeContactData);
    return newUpdatedContact;
});
exports.default = updateContactService;
