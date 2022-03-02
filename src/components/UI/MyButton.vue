<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  background-color: teal;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
}
</style>
