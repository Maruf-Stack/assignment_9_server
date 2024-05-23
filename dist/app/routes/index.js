"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const pet_routes_1 = require("../modules/pet/pet.routes");
const adoption_routes_1 = require("../modules/adoption/adoption.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/',
        route: user_route_1.userRoutes,
    },
    {
        path: '/',
        route: pet_routes_1.petRouter,
    },
    {
        path: '/',
        route: adoption_routes_1.adoptionRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;