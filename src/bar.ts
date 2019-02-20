import { injectable, inject } from 'tsyringe';
import { Foo } from './foo';
import { Router } from './router';
import { TOKENS } from './tokens';

@injectable()
export class Bar {
  constructor(private foo: Foo, @inject(TOKENS.router) private router: Router) {}

  sayHello() {
    console.log(this.foo.getHello());
  }
  goHello() {
    this.router.go(this.foo.getHello());
  }
}
