<template>
  <v-text-field
        col="3"
        flat
        solo-inverted
        hide-details
        placeholder="Type here to search"
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="ml-sm-2 mr-2"
        @keyup="onChangeSearch($event.target.value)"
      ></v-text-field>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    ...mapActions(['fetchBySearchString', 'fetchAllHeadlines']),
    onChangeSearch(value) {
      this.throttleApiCall(value);
    },
    throttleApiCall(value) {
      clearTimeout(this.timer);
      const searchString = value.trim();
      if (searchString.length > 0) {
        this.timer = setTimeout(() => this.fetchBySearchString(searchString), 400);
      } else {
        this.timer = setTimeout(() => this.fetchAllHeadlines(), 400);
      }
    },
  },

};
</script>

<style scope>

</style>
