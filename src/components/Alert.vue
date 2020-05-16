<template>
 <div>
    <v-alert
      class="text-center"
      :value="!!alert['message']"
      :type="alert.type"
      dismissible
      prominent
      border="right"
      @input="closeAlert"
      >{{ alert['message'] }}</v-alert
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState('alert', ['alert']),
  },

  methods: {
    ...mapMutations('alert', ['setAlert']),
    closeAlert() {
      this.setAlert({});
    },
  },
};
</script>

<style>

</style>
