<template>
  <header class="header">
    <div class="navBar">
      <router-link to="/" class="rout">Main</router-link>
      <router-link to="/about" class="rout">About</router-link>
    </div>
  </header>
</template>

<script></script>

<style scoped>
.header {
  padding: 15px;
  height: 75px;
  display: flex;
  align-items: center;
  background-color: teal;
  margin-bottom: 30px;
  box-shadow: 2px 2px 4px gray;
}

.navBar {
  margin-left: auto;
}

.rout {
  color: white;
  font-size: 24px;
  text-decoration: none;
  margin-left: 20px;
}
</style>
