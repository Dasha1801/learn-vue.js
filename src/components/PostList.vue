<template>
  <div class="postList" v-if="posts.length > 0">
    <transition-group name="posts">
      <post-item v-for="post in posts" :post="post" :key="post.id" />
    </transition-group>
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
  margin: 20px 0;
}
.posts {
  display: inline-block;
  margin-right: 10px;
}
.posts-enter-active,
.posts-leave-active {
  transition: all 0.5s ease;
}
.posts-enter-from,
.posts-leave-to {
  opacity: 0;
  transform: translateX(50%);
}
</style>
