import 'reflect-metadata';
import { container } from 'tsyringe';
import { Bar } from './bar';
import { TOKENS } from './tokens';

container.registerInstance(TOKENS.router, {
  go(t: string) {
    console.log(`called go with ${t}`);
  },
});

const bar = container.resolve(Bar);

bar.sayHello();
bar.goHello();
