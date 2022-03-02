<template>
  <div class="postList" v-if="posts.length > 0">
    <my-title>All Posts </my-title>
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
</template>

<script>
import PostItem from "./PostItem";
export default {
  components: { PostItem },
  props: {
    posts: { type: Array, required: true },
  },
};
</script>

<style scoped>
.postList {
  margin-top: 20px;
}
</style>
