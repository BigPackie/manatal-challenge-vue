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
      <HistoryTracker></HistoryTracker>
       <v-btn  @click=backToNews text>
        <v-icon left>mdi-arrow-left</v-icon>
        <span class="mr-2">Back</span>
      </v-btn>
    </v-app-bar>
    <Loading>{{loading}}</Loading>
    <v-container v-if="headline">
        <v-card class="mx-auto">
          <v-img
            max-height="400px"
            contain
            class="grey darken-4"
            :src="headline.urlToImage"
          >
          </v-img>
          <v-card-title>{{ headline.title}}</v-card-title>
          <v-row no-gutters>
          <v-card-subtitle class="py-0">
            {{headline.publishedAt | formatDate}}
             - {{headline.source.name}}</v-card-subtitle>
          <v-spacer></v-spacer>
          <v-card-subtitle class="py-0"><span> {{headline.author}}</span></v-card-subtitle>
          </v-row>

          <v-card-text class="text--primary">
            <div class="text-justify"><strong>{{headline.description}}</strong></div>
            <br>
            <p class="text-justify">{{headline.content}}</p>
            <p>
              <a :href="headline.url" target="_blank" rel="noopener noreferrer">Read more...</a>
            </p>
          </v-card-text>
        </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      headline: null,
      loading: '',
    };
  },
  created() {
    this.lazyLoadHeadline();
  },
  watch: {
    $route(to) {
      if (to.name === 'news') {
        return;
      }
      this.lazyLoadHeadline();
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.logRoute({ path: to.path, title: vm.headline.title });
    });
  },
  methods: {
    ...mapActions(['fetchAllHeadlines']),
    ...mapMutations(['logRoute']),
    backToNews() {
      this.$router.push('/news');
    },
    getHeadline() {
      this.headline = this.$store.getters.headline(this.id);
    },
    loadHeadlines() {
      return this.fetchAllHeadlines();
    },
    async lazyLoadHeadline() {
      this.loading = 'Loading news...';
      // when navigating here directly through url, news list might not be loaded
      if (this.$store.state.headlines.length === 0) {
        await this.loadHeadlines();
      }

      this.loading = 'Loading details...';
      if (this.headline == null || this.headline.customId !== this.id) {
        this.getHeadline();
      }
    },
  },

};
</script>

<style>
</style>
