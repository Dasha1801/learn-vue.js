<template>
  <nav-bar></nav-bar>
  <div class="app">
    <router-view v-slot="{ Component, route }">
      <transition
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutRight"
        mode="out-in"
      >
        <div :key="route.name"><component :is="Component" /></div
      ></transition>
    </router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 0;
  max-width: 960px;
  margin: 0 auto;
}
</style>
