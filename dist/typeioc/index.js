"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inject = exports.Service = void 0;
var service_1 = require("../service");
Object.defineProperty(exports, "Service", { enumerable: true, get: function () { return __importDefault(service_1).default; } });
var injector_1 = require("../injector");
Object.defineProperty(exports, "Inject", { enumerable: true, get: function () { return __importDefault(injector_1).default; } });
