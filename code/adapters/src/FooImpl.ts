import type Foo from '@project/core/src/Foo';

export default class FooImpl implements Foo {

  getFooBar(): string {
    return 'foobar';
  }

}
