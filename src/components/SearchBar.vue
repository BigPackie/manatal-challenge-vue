<template>
  <v-text-field
        col="3"
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="ml-sm-2 mr-2"
        @keyup="onChangeSearch($event.target.value)"
      ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      isLoading: false,
    };
  },
  methods: {
    onChangeSearch(value) {
      console.log(`Triggered onchange: ${value}`);
      this.throttleApiCall(value);
    },
    throttleApiCall(value) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.fakeApiCall(value), 400);
    },
    fakeApiCall(value) {
      console.log(`Triggered api call, value: ${value}`);
    },
  },

};
</script>

<style scope>

</style>
