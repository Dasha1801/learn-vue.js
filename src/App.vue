<template>
  <div class="app">
    <post-form @create="createPost" />
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
    };
  },
  methods: {
    createPost(post) {
      this.posts = [...this.posts, post];
    },
    removePost(post) {
      this.posts = this.posts.filter((el) => el.id !== post.id);
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

.title {
  text-align: center;
  font-size: 24px;
}

button {
  cursor: pointer;
}
</style>
