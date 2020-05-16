<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title
        class="ml-0 pl-4 hidden-sm-and-down"
      >
        <span >News</span>
      </v-toolbar-title>

       <!-- <v-spacer class="hidden-sm-and-down"></v-spacer> -->

      <v-text-field
        col="3"
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="ml-sm-2 mr-2"
      ></v-text-field>

      <!-- <v-spacer class="hidden-sm-and-down ml--2"></v-spacer> -->

      <HistoryTracker></HistoryTracker>
      <SourceFilter></SourceFilter>
    </v-app-bar>

    <HeadlinesGrid/>
  </div>
</template>

<script>
import HeadlinesGrid from '../components/HeadlinesGrid.vue';
import SourceFilter from '../components/SourceFilter.vue';

export default {
  components: {
    HeadlinesGrid,
    SourceFilter,
  },
};
</script>

<style>
</style>
