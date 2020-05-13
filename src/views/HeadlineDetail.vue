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
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
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
