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
import { mapActions, mapMutations } from 'vuex';
import { api } from '../api/news';

export default {
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    ...mapActions(['fetchBySearchString', 'fetchAllHeadlines']),
    ...mapMutations('alert', ['setAlert']),
    onChangeSearch(value) {
      this.throttleApiCall(value);
    },
    throttleApiCall(value) {
      clearTimeout(this.timer);
      const searchString = value.trim();

      if (searchString === 'wrong') {
        api.badRequest()
          .then()
          .catch((error) => {
            this.setAlert({ message: `Error: ${error?.body?.message}`, type: 'error' });
          });
        return;
      }

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
