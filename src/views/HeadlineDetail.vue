<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span >Headline Details</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

       <v-btn  @click=backToNews text>
        <v-icon left>mdi-arrow-left</v-icon>
        <span class="mr-2">Back</span>
      </v-btn>
    </v-app-bar>
    <Loading :isLoading="isLoading">{{loading}}</Loading>
    <v-container>
        <v-card
          class="mx-auto"
          v-if="!isLoading && headline !== null"
        >
          <v-img
            max-height="400px"
            contain
            class="grey darken-4"
            :src="headline.urlToImage"
          >
          </v-img>
          <v-card-title>Top 10 Australian beaches</v-card-title>
          <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
        </v-card>

    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      headline: Object,
      isLoading: false,
      loading: '',
    };
  },
  created() {
    console.log('created in detail');
    this.lazyLoadHeadline();
  },
  watch: {
    $route(to) {
      if (to.path === '/news') {
        return;
      }
      this.lazyLoadHeadline();
    },
  },
  methods: {
    ...mapActions(['fetchAllHeadlines']),
    backToNews() {
      this.$router.push('/news');
    },
    getHeadline() {
      console.log('Getting headline in detail');
      this.headline = this.$store.getters.headline(this.id);
    },
    loadHeadlines() {
      console.log('Loading all headlines because they are not yet initiated');
      // TODO: same as in HeadlineGrid, maybe provide Mixin
      return this.fetchAllHeadlines()
        .then(/* Handled by store */)
        .catch(() => {
          console.log('Failed getting headlines. Try to reload the page.');
          this.isLoading = false;
        });
    },
    async lazyLoadHeadline() {
      this.isLoading = true;

      this.loading = 'Loading news...';
      // when navigating here directly through url, news list might not be loaded
      if (this.$store.state.headlines.length === 0) {
        await this.loadHeadlines();
      }

      this.loading = 'Loading details...';
      if (this.headline == null || this.headline.customId !== this.id) {
        this.getHeadline();
      }

      this.isLoading = false;
    },
  },

};
</script>

<style>
</style>
