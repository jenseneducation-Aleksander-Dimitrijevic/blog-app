<template>
  <div>
    <h1>Create new blog</h1>
    <form @submit.prevent="createBlog">
      <div class="form-group">
        <label for="title">Blog title</label>
        <input type="text" v-model="input.title" id="title" name="title" />
      </div>
      <div class="form-group">
        <label for="text">Blog text</label>
        <textarea
          type="text"
          v-model="input.text"
          id="text"
          name="text"
        ></textarea>
      </div>
      <button>Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "create",
  data() {
    return {
      input: {
        title: "",
        text: "",
      },
    };
  },
  methods: {
    createBlog() {
      this.$store
        .dispatch("createBlog", this.input)
        .then(() => this.$router.push({ name: "blogs" }));
    },
  },
};
</script>

<style lang="scss" scoped></style>
