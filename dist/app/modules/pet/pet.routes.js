"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.petRouter = void 0;
const express_1 = __importDefault(require("express"));
const pet_controller_1 = require("./pet.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const pet_validation_1 = require("./pet.validation");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const router = express_1.default.Router();
router.post('/pets', (0, auth_1.default)(), (0, validateRequest_1.default)(pet_validation_1.petValidation.pet), pet_controller_1.petControllers.addPet);
router.put('/pets/:petId', (0, auth_1.default)(), (0, validateRequest_1.default)(pet_validation_1.petValidation.updatePet), pet_controller_1.petControllers.updatePet);
router.get('/pets', pet_controller_1.petControllers.getAllPets);
router.get('/pet/:petId', pet_controller_1.petControllers.getSinglePet);
exports.petRouter = router;
