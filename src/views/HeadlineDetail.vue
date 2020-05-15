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

    <v-container transition="scale-transition">
        Headlines details container {{id}}  headline {{headline.title}}

    </v-container>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      headline: {},
    };
  },
  methods: {
    backToNews() {
      this.$router.push('/news');
    },
    loadHeadline() {
      if (this.headline && this.headline.customId === this.id) {
        console.log('Loading headline in detail skipped. Already loaded');
        return;
      }
      console.log('Loading headline in detail');
      this.headline = this.$store.getters.headline(this.id);
    },
  },
  created() {
    console.log('created in detail');
    this.loadHeadline();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
    // access to component instance via `vm`
      console.log(`before rout enter called: ${vm.id}`);
      vm.loadHeadline();
    });
  },
};
</script>

<style>
</style>
