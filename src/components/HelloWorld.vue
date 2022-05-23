
<template>
  <div class="content">
    <div class="stars">
        <h1>Hello on the new encyclopedia of Stars Wars Guys</h1>
        {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>

