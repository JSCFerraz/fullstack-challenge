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
const verifyClientContactExistsMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    const clientRepository = data_source_1.AppDataSource.getRepository(entities_1.Client);
    // const findContacts: Contact | null = await contactRepository.findOne({
    //   where: {
    //     email: email,
    //   },
    // });
    const findClient = yield clientRepository.findOne({
        where: {
            id: req.client.clientId,
        },
    });
    console.log(findClient);
    const findClientContact = yield contactRepository
        .createQueryBuilder("contacts")
        .innerJoinAndSelect("contacts.registeredBy", "clients")
        .where("contacts.email = :email", { email: req.body.email })
        .andWhere("contacts.registeredBy = :client", {
        client: req.client.clientId,
    })
        .getOne();
    console.log(findClientContact);
    if (findClientContact) {
        throw new app_errors_1.default("This client contact aready exists.", 400);
    }
    // if (req.body.email) {
    //   const findContact: Contact | null = await contactRepository.findOne({
    //     where: {
    //       email: req.body.email,
    //       phone: req.body.phone,
    //     },
    //   });
    //   if (findContact) {
    //     if (findContact.registeredBy.id == req.params.id)
    //       throw new AppError("Contact already exists", 409);
    //   }
    // }
    return next();
});
exports.default = verifyClientContactExistsMiddleware;
