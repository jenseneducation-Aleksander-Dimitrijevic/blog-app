<template>
  <v-container v-if="blogs">
    <v-row>
      <v-col>
        <h1>{{ !blogs.length > 0 ? "No posts" : "Posts" }}</h1>
        <v-card class="mt-5" v-for="blog in blogs" :key="blog.id">
          <v-card-title>
            <h2>{{ blog.title }}</h2>
          </v-card-title>
          <v-card-text>
            {{ blog.text }}
            <p class="caption mt-4">{{ blog.createdAt }}</p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              class="success white--text pa-2 text-capitalize rounded-sm"
              :to="{ name: 'edit', params: { id: blog._id, blog } }"
              >Edit blog</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn
              class="red white--text pa-1 text-capitalize"
              dense
              @click="deleteBlog(blog)"
            >
              Delete blog
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "blogs",
  data() {
    return {
      blogs: null,
    };
  },
  created() {
    axios
      .get("https://blogsite-demo.herokuapp.com/api/blogs")
      .then(({ data }) => {
        this.blogs = data;
      });
  },
  computed: { ...mapGetters(["isBlogCreated"]) },
  methods: {
    deleteBlog(blog) {
      alert(`Blog "${blog.title}" will now be deleted!`);
      axios
        .post("https://blogsite-demo.herokuapp.com/api/blogs/delete", blog)
        .then(() => location.reload());
    },
  },
};
</script>

<style lang="scss" scoped></style>
