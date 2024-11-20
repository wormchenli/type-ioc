"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = __importDefault(require("../container"));
function Service(serviceName) {
    return function (constructor) {
        const instance = new constructor();
        container_1.default.register(serviceName, instance);
    };
}
exports.default = Service;
