<template>
  <v-text-field
        col="3"
        flat
        solo-inverted
        hide-details
        placeholder="Type at least 3 letters to search"
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
    ...mapActions(['fetchBySearchString']),
    onChangeSearch(value) {
      console.log(`Triggered onchange: ${value}`);

      this.throttleApiCall(value);
    },
    throttleApiCall(value) {
      clearTimeout(this.timer);
      const searchString = value.trim();
      if (searchString.length > 0 && searchString.length <= 2) {
        return;
      }
      this.timer = setTimeout(() => this.fetchBySearchString(searchString), 400);
    },
  },

};
</script>

<style scope>

</style>
