<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title
        class="ml-0 pl-4 hidden-sm-and-down"
      >
        <span >News</span>
      </v-toolbar-title>

       <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="mx-2"
      ></v-text-field>

      <v-spacer class="hidden-sm-and-down ml--2"></v-spacer>
      <v-badge
        bordered
        color="error"
        content="6"
        overlap
        light
      >
        <v-btn
          class="white--text"
          dark
        >
          Sources
        </v-btn>
      </v-badge>
    </v-app-bar>

    <v-container>Headlines view</v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
