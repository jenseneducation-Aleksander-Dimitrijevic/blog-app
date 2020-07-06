<template>
  <v-container v-if="blog" fill-height>
    <v-row>
      <v-col>
        <h1>Edit blog</h1>
        <v-form @submit.prevent="updateBlog" class="mt-4">
          <v-text-field
            type="text"
            v-model="blog.title"
            label="Blog title"
            name="title"
          />
          <v-textarea
            type="text"
            v-model="blog.text"
            label="Blog text"
            name="text"
          />
          <v-btn class="mt-4" type="submit" color="info" dark>Save</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "edit",
  props: {
    blog: Object,
  },
  data() {
    return {
      input: {
        title: this.blog.title || "",
        text: this.blog.text || "",
      },
    };
  },
  methods: {
    updateBlog() {
      this.$store
        .dispatch("updateBlog", {
          body: {
            title: this.blog.title,
            text: this.blog.text,
          },
          id: this.blog._id,
        })
        .then(() => this.$router.push({ name: "blogs" }));
    },
  },
};
</script>

<style lang="scss" scoped></style>
