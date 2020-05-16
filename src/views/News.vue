<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="ml-0 pl-4 hidden-sm-and-down">
        <span >News</span>
      </v-toolbar-title>
      <SearchBar></SearchBar>
      <HistoryTracker></HistoryTracker>
      <SourceFilter></SourceFilter>
    </v-app-bar>
    <Alert></Alert>
    <HeadlinesGrid/>
  </div>
</template>

<script>
import HeadlinesGrid from '../components/HeadlinesGrid.vue';
import SourceFilter from '../components/SourceFilter.vue';
import SearchBar from '../components/SearchBar.vue';
import Alert from '../components/Alert.vue';

export default {
  components: {
    HeadlinesGrid,
    SourceFilter,
    SearchBar,
    Alert,
  },
};
</script>

<style>
</style>
