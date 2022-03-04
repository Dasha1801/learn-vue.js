<template>
  <div class="dialog" v-if="dialogVisible" @click.stop="setDialogVisible">
    <div class="content" @click.stop><slot></slot></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "my-dialog",
  methods: {
    ...mapMutations({
      setDialogVisible: "post/setDialogVisible",
    }),
  },
  computed: {
    ...mapState({
      dialogVisible: (state) => state.post.dialogVisible,
    }),
  },
};
</script>

<style scoped>
.dialog {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.content {
  padding: 30px;
  margin: auto;
  background-color: white;
  border-radius: 15px;
  min-height: 50px;
  min-width: 500px;
}
</style>
