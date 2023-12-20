function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Executing method ${key} with arguments: ${args}`);

    const result = originalMethod.apply(this, args);

    console.log(`Method ${key} executed with result: ${result}`);

    return result;
  };

  return descriptor;
}

class MyClass {
  private myProperty: string;

  constructor(property: string) {
    this.myProperty = property;
  }

  @logMethod
  public myMethod(arg1: number, arg2: string): string {
    console.log(`Executing myMethod logic with arguments: ${arg1}, ${arg2}`);
    return `Result for ${arg1}, ${arg2}`;
  }
}

const myInstance = new MyClass('Hello, Decorator!');

const results = myInstance.myMethod(42, 'TypeScript');