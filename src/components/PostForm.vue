<template>
  <form class="form" @submit.prevent>
    <h3 class="title">Create new post</h3>
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
    <button class="btn" @click="createPost">Add post</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        name: "",
        description: "",
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
      };
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 24px;
}

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

.btn {
  margin-top: 15px;
  align-self: flex-end;
  background-color: teal;
  color: white;
  padding: 10px 15px;
  border: none;
}
</style>
