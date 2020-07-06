<template>
  <v-container class="fill-height">
    <v-row class="m-auto">
      <v-col class="text-center">
        <h1 class="display-3 mb-4 ">BlogSite</h1>
        <p>The place to share your thoughts!</p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn to="/register" color="teal" dark large>Register</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="scss" scoped></style>
