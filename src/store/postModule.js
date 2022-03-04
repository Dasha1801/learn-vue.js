import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
    dialogVisible: false,
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPages: 0,
  }),
  getters: {
    searchPosts(state) {
      return state.posts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setDialogVisible(state) {
      state.dialogVisible = !state.dialogVisible;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setPage(state, num) {
      state.page = num;
    },
    setTotalPages(state, num) {
      state.totalPages = num;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?",
          {
            params: { _limit: state.limit, _page: state.page },
          }
        );
        commit("setPosts", response.data);
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
      } catch (e) {
        alert("The server does not respond!");
        console.log(e);
      }
    },
  },
  namespaced: true,
};
