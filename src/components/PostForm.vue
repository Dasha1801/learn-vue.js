<template>
  <form class="form" @submit.prevent>
    <my-title>Create new post</my-title>
    <input
      v-model="post.name"
      @input="post.name = $event.target.value"
      placeholder="name"
      type="text"
      class="field"
    />
    <textarea
      v-model="post.description"
      @input="post.description = $event.target.value"
      placeholder="description"
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
        name: "",
        description: "",
        id: null,
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        name: "",
        description: "",
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
