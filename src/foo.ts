import { injectable } from 'tsyringe';

@injectable()
export class Foo {
  getHello() {
    return 'hello';
  }
}
