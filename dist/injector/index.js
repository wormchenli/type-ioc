"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = __importDefault(require("../container"));
function Inject(serviceName, implementationName) {
    return function (target, propertyKey) {
        const getter = function () {
            return container_1.default.resolve(serviceName, implementationName);
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            enumerable: true,
            configurable: true,
        });
    };
}
exports.default = Inject;
