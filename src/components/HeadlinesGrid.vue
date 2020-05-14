<template>
  <v-container fluid>
    <v-overlay  absolute opacity="0" v-if="isLoading">
      <v-progress-circular
        indeterminate
        color="primary"
        size="128"
      >
        Loading news
      </v-progress-circular>
    </v-overlay>

    <v-row justify="center">
      <HeadlineCard
        v-for="headline in headlines" :key="headline.customId"
        :headline="headline">
      </HeadlineCard>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import HeadlineCard from './HeadlineCard.vue';

export default {
  components: {
    HeadlineCard,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters(['headlines']),
  },

  methods: {
    ...mapActions(['fetchAllHeadlines']),
  },
  created() {
    console.log('HeadlinesGridComponent created hook');
    this.fetchAllHeadlines()
      .then(/* Handled by store */)
      .catch(() => {
        console.log('Failed getting headlines. Try to reload the page.');
      }) // show in modal or somethign, maybe provide button for reload
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>

<style scoped>
</style>
