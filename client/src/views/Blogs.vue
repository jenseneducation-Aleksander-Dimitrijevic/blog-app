<template>
  <article v-if="blogs">
    <h1>{{ !blogs.length > 0 ? "No posts" : "All post(s)" }}</h1>
    <section class="blog-card" v-for="blog in blogs" :key="blog.id">
      <h2 class="blog-title">{{ blog.title }}</h2>
      <p class="blog-text">{{ blog.text }}</p>
      <span class="createdAt">Created at:{{ blog.createdAt }}</span>
      <div class="btn-group">
        <router-link :to="{ name: 'edit', params: {id : blog._id, blog} }">Edit blog</router-link>
        <button @click="deleteBlog(blog)">Delete blog</button>
      </div>
    </section>
  </article>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "blogs",
  data() {
    return {
      blogs: null
    };
  },
  created() {
    axios.get("//localhost:5000/api/blogs").then(({ data }) => {
      this.blogs = data;
    });
  },
  computed: { ...mapGetters(["isBlogCreated"]) },
  methods: {
    deleteBlog(blog) {
      alert(`Blog "${blog.title}" will now be deleted!`);
      axios
        .post("//localhost:5000/api/blogs/delete", blog)
        .then(() => location.reload());
    }
  }
};
</script>

<style lang="scss" scoped></style>
