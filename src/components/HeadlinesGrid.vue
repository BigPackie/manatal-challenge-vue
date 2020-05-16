<template>
  <v-container fluid>
    <Loading>Loading news...</Loading>
    <v-row justify="center">
      <HeadlineCard
        v-for="headline in filteredHeadlines" :key="headline.customId"
        :headline="headline">
      </HeadlineCard>
      <p v-if="!filteredHeadlines || filteredHeadlines.length == 0" class="headline">No results!</p>
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
    if (this.headlines.length === 0) {
      this.fetchAllHeadlines();
    }
  },
};
</script>

<style scoped>
</style>
