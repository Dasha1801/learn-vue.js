<template>
  <div class="wrapperPage">
    <button
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      :class="{ currentBtnPage: page === pageNumber }"
      class="page"
      @click="changeNumberPage(pageNumber)"
    >
      {{ pageNumber }}
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
    }),
    changeNumberPage(num) {
      this.setPage(num);
    },
  },

  computed: {
    ...mapState({
      page: (state) => state.post.page,
      totalPages: (state) => state.post.totalPages,
    }),
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
