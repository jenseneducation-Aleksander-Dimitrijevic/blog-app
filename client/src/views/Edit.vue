<template>
  <div v-if="blog">
    <h1>Edit blog</h1>
    <form @submit.prevent="updateBlog">
      <div class="form-group">
        <label for="title">Blog title</label>
        <input type="text" v-model="blog.title" id="title" name="title" />
      </div>
      <div class="form-group">
        <label for="text">Blog text</label>
        <textarea type="text" v-model="blog.text" id="text" name="text"></textarea>
      </div>
      <button>Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "edit",
  props: {
    blog: Object
  },
  data() {
    return {
      input: {
        title: this.blog.title || "",
        text: this.blog.text || ""
      }
    };
  },
  methods: {
    updateBlog() {
      this.$store
        .dispatch("updateBlog", {
          body: {
            title: this.blog.title,
            text: this.blog.text
          },
          id: this.blog._id
        })
        .then(() => this.$router.push({ name: "blogs" }));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>