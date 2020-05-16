<template>
    <v-overlay  absolute opacity="0.2" v-if="isLoading">
      <v-progress-circular
        indeterminate
        color="primary"
        size="128"
      >
      <p class="text-center" style="margin:0; width:120px">
        <slot>Loading...</slot>
      </p>

      </v-progress-circular>
    </v-overlay>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },

};
</script>
