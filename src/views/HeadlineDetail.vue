<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span >Headline Details</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

       <v-btn  @click=backToNews text>
        <v-icon left>mdi-arrow-left</v-icon>
        <span class="mr-2">Back</span>
      </v-btn>
    </v-app-bar>

    <v-container transition="scale-transition">
        Headlines details container

    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    backToNews() {
      this.$router.push('news');
    },
  },
};
</script>

<style>
</style>
