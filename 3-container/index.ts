import 'reflect-metadata';
import { Container } from 'inversify';
import { SingletonService } from './injectable-class.ts';

const container = new Container();

// Bind string to the container
container.bind<string>('MyString').toConstantValue('one');

// Bind SingletonService to the container
container.bind<SingletonService>(SingletonService).toSelf().inSingletonScope();

const instance1 = container.get(SingletonService);
const instance2 = container.get(SingletonService);

console.log(instance1 === instance2); // prints: true

console.log(instance1.method()); // prints: Method called with state: one
console.log(instance2.method()); // prints: Method called with state: one
