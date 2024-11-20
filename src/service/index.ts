import container from "../container";

function Service(serviceName: string): ClassDecorator {
  return function (constructor: any) {
    const instance = new constructor();
    container.register(serviceName, instance);
  };
}

export default Service;
