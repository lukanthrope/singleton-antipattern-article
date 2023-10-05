import { injectable, inject } from 'inversify';

@injectable()
class SingletonService {
  private readonly initialData: string;

  constructor(@inject('MyString') initialData: string) {
    this.initialData = initialData;
  }

  method() {
    return `Method called with state: ${this.initialData}`;
  }
}

export { SingletonService };