"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IoCContainer {
    constructor() {
        this.services = new Map();
    }
    register(name, implementation) {
        if (!this.services.has(name)) {
            this.services.set(name, []);
        }
        this.services.get(name).push(implementation);
    }
    resolve(name, implementationName) {
        const services = this.services.get(name);
        if (!services || services.length === 0) {
            console.error(`Error: Service '${name}' not found`);
            throw new Error(`Service '${name}' not found`);
        }
        if (implementationName) {
            const service = services.find((svc) => svc.constructor.name === implementationName);
            if (!service) {
                console.error(`Error: Implementation '${implementationName}' not found for service '${name}'`);
                throw new Error(`Implementation '${implementationName}' not found for service '${name}'`);
            }
            return service;
        }
        if (services.length > 1) {
            console.error(`Error: Multiple implementations found for '${name}'. Please specify an implementation.`);
            throw new Error(`Multiple implementations found for '${name}'. Please specify an implementation.`);
        }
        return services[0];
    }
}
exports.default = new IoCContainer();
