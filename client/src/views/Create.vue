<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <v-form
          ref="createBlogForm"
          v-model="formValidity"
          @submit.prevent="createBlog"
        >
          <h1 class="mb-4">Create new blog</h1>
          <v-text-field
            type="text"
            required
            :rules="titleRules"
            v-model="input.title"
            label="Blog title"
            name="title"
          />
          <v-textarea
            type="text"
            required
            :rules="textRules"
            v-model="input.text"
            label="Blog text"
            name="text"
          />
          <v-btn
            :disabled="!formValidity"
            class="mt-4"
            type="submit"
            color="info"
            dark
            >Save</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "create",
  data() {
    return {
      formValidity: true,
      input: {
        title: this.blog ? this.blog.title : "",
        text: this.blog ? this.blog.text : "",
      },
      titleRules: [(value) => !!value || "Title is required"],
      textRules: [(value) => !!value || "Text is required"],
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
