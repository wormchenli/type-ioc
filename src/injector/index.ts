import container from "../container";

function Inject(
  serviceName: string,
  implementationName?: string
): PropertyDecorator {
  return function (target: any, propertyKey: string | symbol) {
    const getter = function () {
      return container.resolve(serviceName, implementationName);
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      enumerable: true,
      configurable: true,
    });
  };
}

export default Inject;
