<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
<!--    <img alt="Vue logo" class="logo" src="assets/logo.svg" width="125" height="125" />-->

    <div class="wrapper" style="margin-top: 10px; margin-bottom: 10px">
      <HelloWorld/>
    </div>
  </header>

  <main style="margin-top: 10px; margin-bottom: 10px">
    <router-view></router-view>
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
