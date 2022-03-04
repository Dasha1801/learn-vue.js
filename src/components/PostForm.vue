<template>
  <form class="form" @submit.prevent>
    <my-title>Create new post</my-title>
    <my-input
      v-model="post.title"
      @input="post.title = $event.target.value"
      placeholder="title"
    />
    <textarea
      v-model="post.body"
      @input="post.body = $event.target.value"
      placeholder="body"
      type="text"
      class="field"
    />
    <my-button class="btnCreate" @click="createPost">Add post</my-button>
  </form>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import MyInput from "./UI/MyInput.vue";
export default {
  components: { MyInput },
  data() {
    return {
      post: {
        title: "",
        body: "",
        id: null,
      },
    };
  },

  methods: {
    ...mapMutations({
      setPosts: "post/setPosts",
      setDialogVisible: "post/setDialogVisible",
    }),
    createPost() {
      this.post.id = Date.now();
      if (this.post.title.trim() && this.post.body.trim()) {
        this.setDialogVisible();
        this.setPosts([...this.posts, this.post]);
      }
      this.post = {
        title: "",
        body: "",
        id: null,
      };
    },
  },
  computed: {
    ...mapState({
      dialogVisible: (state) => state.post.dialogVisible,
      posts: (state) => state.post.posts,
    }),
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.field {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid teal;
  margin-top: 15px;
}

.btnCreate {
  align-self: flex-end;
  margin-top: 15px;
}
</style>
