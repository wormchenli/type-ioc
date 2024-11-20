import { Service, Inject } from "./typeioc";

interface GreeterService {
  sayHello(): void;
}

@Service("GreeterService")
class GreeterServiceImpl1 implements GreeterService {
  sayHello(): void {
    console.log("Hello from GreeterServiceImpl1");
  }
}

@Service("GreeterService")
class GreeterServiceImpl2 implements GreeterService {
  sayHello(): void {
    console.log("Hello from GreeterServiceImpl2");
  }
}

class App {
  @Inject("GreeterService", "GreeterServiceImpl1")
  private greeterService1!: GreeterService;

  @Inject("GreeterService", "GreeterServiceImpl2")
  private greeterService2!: GreeterService;

  start(): void {
    console.log("Starting App...");
    this.greeterService1.sayHello(); // Outputs: "Hello from GreeterServiceImpl1"
    this.greeterService2.sayHello(); // Outputs: "Hello from GreeterServiceImpl2"
  }
}

new App().start();
