"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeioc_1 = require("./typeioc");
let GreeterServiceImpl1 = class GreeterServiceImpl1 {
    sayHello() {
        console.log("Hello from GreeterServiceImpl1");
    }
};
GreeterServiceImpl1 = __decorate([
    (0, typeioc_1.Service)("GreeterService")
], GreeterServiceImpl1);
let GreeterServiceImpl2 = class GreeterServiceImpl2 {
    sayHello() {
        console.log("Hello from GreeterServiceImpl2");
    }
};
GreeterServiceImpl2 = __decorate([
    (0, typeioc_1.Service)("GreeterService")
], GreeterServiceImpl2);
class App {
    start() {
        console.log("Starting App...");
        this.greeterService1.sayHello(); // Outputs: "Hello from GreeterServiceImpl1"
        this.greeterService2.sayHello(); // Outputs: "Hello from GreeterServiceImpl2"
    }
}
__decorate([
    (0, typeioc_1.Inject)("GreeterService", "GreeterServiceImpl1"),
    __metadata("design:type", Object)
], App.prototype, "greeterService1", void 0);
__decorate([
    (0, typeioc_1.Inject)("GreeterService", "GreeterServiceImpl2"),
    __metadata("design:type", Object)
], App.prototype, "greeterService2", void 0);
new App().start();
