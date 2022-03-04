<template>
  <div class="post">
    <div>
      <div><strong>Title: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <div class="btnDelete">
      <my-button @click="removePost(post)">Delete</my-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    post: { type: Object, required: true },
  },

  methods: {
    ...mapMutations({
      setPosts: "post/setPosts",
    }),
    removePost(post) {
      this.setPosts(this.posts.filter((el) => el.id !== post.id));
    },
  },

  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
    }),
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btnDelete {
  margin-left: 10px;
}
</style>
