class SingletonClass {
  constructor(initialData) {
    if (!SingletonClass.instance) {
      this.initialData = initialData;
      SingletonClass.instance = this;
    }

    return SingletonClass.instance;
  }

  method() {
    return `Method called with state: ${this.initialData}`;
  }
}

const instance1 = new SingletonClass('one');
const instance2 = new SingletonClass('two');

console.log(instance1 === instance2); // prints: true

console.log(instance1.method()); // prints: Method called with state: one
console.log(instance2.method()); // prints: Method called with state: one
