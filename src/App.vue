<template>
  <div class="app">
    <div class="container">
      <my-title>Page with posts</my-title>
      <my-button @click="showDialog" class="btnCreate">Create post</my-button>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <my-input
      placeholder="Search..."
      v-model="searchQuery"
      @input="searchQuery = $event.target.value"
    />
    <post-list :posts="searchPosts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import axios from "axios";

export default {
  components: { PostForm, PostList },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      searchQuery: "",
    };
  },
  methods: {
    createPost(post) {
      this.posts = [...this.posts, post];
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((el) => el.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        const response = await axios
          .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
          .then((res) => res.data);
        this.posts = response;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    searchPosts() {
      return this.posts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
  max-width: 960px;
  margin: 0 auto;
}

.container {
  display: flex;
  width: 40%;
  margin: 0 auto;
  justify-content: space-evenly;
}

.btnCreate {
  margin-left: 5px;
}

button {
  cursor: pointer;
}
</style>
