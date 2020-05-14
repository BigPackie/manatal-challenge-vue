<template>
 <v-container fluid>
    <v-row justify="center">
      <v-container v-if="isLoading" class="mx-auto">
        <span>Loadings news...</span>
      </v-container>
      <HeadlineCard v-for="n in 10" :key="n"></HeadlineCard>
    </v-row>
 </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import HeadlineCard from './HeadlineCard.vue';

export default {
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    HeadlineCard,
  },
  methods: {
    ...mapActions([
      'fetchAllHeadlines',
    ]),
  },
  created() {
    console.log('HeadlinesGridComponent created hook');
    this.fetchAllHeadlines()
      .then(/* Handled by store */)
      .catch(() => {
        console.log('Failed getting headlines. Try to reload the page.');
      }) // show in modal or somethign, maybe provide button for reload
      .finally(() => { this.isLoading = false; });
  },
};
</script>

<style scoped>

</style>
