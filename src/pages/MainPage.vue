<template>
  <div class="container">
    <my-title>Page with posts</my-title>
    <my-button @click="setDialogVisible" class="btnCreate"
      >Create post</my-button
    >
  </div>
  <my-dialog>
    <post-form></post-form>
  </my-dialog>
  <my-input
    placeholder="Search..."
    :model-value="searchQuery"
    @update:model-value="setSearchQuery"
  />
  <page-number></page-number>
  <post-list :posts="searchPosts"></post-list>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import PageNumber from "../components/PageNumber.vue";

export default {
  components: { PostForm, PostList, PageNumber },
  methods: {
    ...mapActions({
      fetchPosts: "post/fetchPosts",
    }),
    ...mapMutations({
      setSearchQuery: "post/setSearchQuery",
      setDialogVisible: "post/setDialogVisible",
    }),
  },
  mounted() {
    this.fetchPosts();
  },

  watch: {
    page() {
      this.fetchPosts();
    },
  },
  computed: {
    ...mapState({
      dialogVisible: (state) => state.post.dialogVisible,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
    }),
    ...mapGetters({
      searchPosts: "post/searchPosts",
    }),
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 40%;
  margin: 0 auto;
  justify-content: space-evenly;
}

.mainTitle {
  font-size: 30px;
}

.btnCreate {
  margin-left: 5px;
}

button {
  cursor: pointer;
}
</style>
