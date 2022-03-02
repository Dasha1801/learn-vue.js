<template>
  <div class="app">
    <div class="container">
      <my-title>Page with posts</my-title>
      <my-button @click="showDialog" class="btnCreate">Create post</my-button>
    </div>
    <my-dialog v-model:show="dialogVisible"
      ><post-form @create="createPost"
    /></my-dialog>
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

export default {
  components: { PostForm, PostList },
  data() {
    return {
      posts: [
        { id: 1, name: "Post about JS 1.", description: "What is JS?" },
        { id: 2, name: "Post about JS 2.", description: "What is JS?" },
        { id: 2, name: "Post about JS 3.", description: "What is JS?" },
        { id: 4, name: "Post about JS 4.", description: "What is JS?" },
        { id: 5, name: "Post about JS 5.", description: "What is JS?" },
      ],
      dialogVisible: false,
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
