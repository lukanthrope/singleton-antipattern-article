class SingletonClass {
  #initialData;

  constructor(initialData) {
    this.#initialData = initialData;

    return SingletonClass.instance;
  }

  method() {
    return `Method called with state: ${this.#initialData}`;
  }
}

const instance = new SingletonClass('one');

export { instance };
