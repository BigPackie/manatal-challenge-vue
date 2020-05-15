<template>
  <v-container fluid>
    <Loading :isLoading="isLoading">Loading news...</Loading>
    <v-row justify="center">
      <HeadlineCard
        v-for="headline in headlines" :key="headline.customId"
        :headline="headline">
      </HeadlineCard>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import HeadlineCard from './HeadlineCard.vue';

export default {
  components: {
    HeadlineCard,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapState(['headlines']),
  },

  methods: {
    ...mapActions(['fetchAllHeadlines']),
  },
  created() {
    console.log('HeadlinesGridComponent created hook');
    if (this.headlines.length === 0) {
      this.isLoading = true;
      this.fetchAllHeadlines()
        .then(/* Handled by store */)
        .catch(() => {
          console.log('Failed getting headlines. Try to reload the page.');
        }) // show in modal or somethign, maybe provide button for reload
        .finally(() => {
          this.isLoading = false;
        });
    }
  },
};
</script>

<style scoped>
</style>
