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
exports.updateContactController = exports.deleteContactController = exports.listAllContactsByClientIdController = exports.createContactController = void 0;
const updateContact_services_1 = __importDefault(require("../services/contact/updateContact.services"));
const deleteContact_services_1 = __importDefault(require("../services/contact/deleteContact.services"));
const createContacts_services_1 = __importDefault(require("../services/contact/createContacts.services"));
const listContactsByClientId_services_1 = __importDefault(require("../services/contact/listContactsByClientId.services"));
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = res.locals.clientId;
    const newContact = yield (0, createContacts_services_1.default)(req.body, clientId);
    return res.status(201).json(newContact);
});
exports.createContactController = createContactController;
const listAllContactsByClientIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = res.locals.clientId;
    const allContacts = yield (0, listContactsByClientId_services_1.default)(clientId);
    return res.status(200).json(allContacts);
});
exports.listAllContactsByClientIdController = listAllContactsByClientIdController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = res.locals.clientId;
    const contact = yield (0, updateContact_services_1.default)(req.body, req.params.id, clientId);
    return res.status(200).json(contact);
});
exports.updateContactController = updateContactController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = req.params.id;
    yield (0, deleteContact_services_1.default)(contactId);
    return res.status(204).json();
});
exports.deleteContactController = deleteContactController;
