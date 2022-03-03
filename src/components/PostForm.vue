<template>
  <form class="form" @submit.prevent>
    <my-title>Create new post</my-title>
    <input
      v-model="post.title"
      @input="post.title = $event.target.value"
      placeholder="title"
      type="text"
      class="field"
    />
    <textarea
      v-model="post.body"
      @input="post.body = $event.target.value"
      placeholder="body"
      type="text"
      class="field"
    />
    <my-button @click="createPost" class="btnCreate">Add post</my-button>
  </form>
</template>

<script>
export default {
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
    createPost() {
      this.post.id = Date.now();
      if (this.post.title.trim() && this.post.body.trim())
        this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
        id: null,
      };
    },
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
