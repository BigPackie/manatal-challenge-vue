<template>
  <v-container fluid>
    <Loading>Loading news...</Loading>
    <v-row justify="center">
      <HeadlineCard
        v-for="headline in filteredHeadlines" :key="headline.customId"
        :headline="headline">
      </HeadlineCard>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import HeadlineCard from './HeadlineCard.vue';

export default {
  components: {
    HeadlineCard,
  },
  computed: {
    ...mapGetters(['filteredHeadlines']),
    ...mapState(['headlines']),
  },

  methods: {
    ...mapActions(['fetchAllHeadlines']),
  },
  created() {
    console.log('HeadlinesGridComponent created hook');
    if (this.headlines.length === 0) {
      this.fetchAllHeadlines();
    }
  },
};
</script>

<style scoped>
</style>
