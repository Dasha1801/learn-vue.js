<template>
  <h3 class="title"><slot></slot></h3>
</template>

<script>
export default {
  name: "my-title",
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 30px;
}
</style>
