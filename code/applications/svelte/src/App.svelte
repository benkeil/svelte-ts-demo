<script lang="ts">
  import FooImpl from "@project/adapters/src/FooImpl";
  import type Foo from '@project/core/src/Foo';
  const foo = new FooImpl();
  let name: string;
</script>

<main>
  <h1>Hello { name } and { foo.getFooBar() }!</h1>
</main>

<style lang="scss">
  @import "./app";
</style>
