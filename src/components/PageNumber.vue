<template>
  <div class="wrapperPage">
    <button
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      :class="{ currentBtnPage: page === pageNumber }"
      class="page"
      @click="$emit('change', pageNumber)"
    >
      {{ pageNumber }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: { type: Number, required: true },
    page: { type: Number, required: true },
  },
};
</script>

<style scoped>
.wrapperPage {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}

.page {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  background-color: white;
  border: 2px solid teal;
  color: black;
}

.currentBtnPage {
  background-color: teal;
  color: white;
}
</style>
