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
const createContactService = (contactData, clientId) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = contactData;
    const contactRepository = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    const clientRepository = data_source_1.AppDataSource.getRepository(entities_1.Client);
    // const findContacts: Contact | null = await contactRepository.findOne({
    //   where: {
    //     email: email,
    //   },
    // });
    const findClient = yield clientRepository.findOne({
        where: {
            id: clientId,
        },
    });
    console.log(findClient);
    // const findClientContact: Contact | null = await contactRepository
    //   .createQueryBuilder("contacts")
    //   .innerJoinAndSelect("contacts.registeredBy", "clients")
    //   .where("contacts.email = :email", { email: email })
    //   .andWhere("contacts.registeredBy = :client", {
    //     client: clientId,
    //   })
    //   .getOne();
    // console.log(findClientContact);
    // if (findClientContact) {
    //   throw new Error("This client contact aready exists.");
    // }
    const createContact = contactRepository.create({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        registeredBy: findClient,
    });
    yield contactRepository.save(createContact);
    const newContact = contact_schemas_1.contactSchemaResponse.parse(createContact);
    console.log(newContact);
    return newContact;
});
exports.default = createContactService;
