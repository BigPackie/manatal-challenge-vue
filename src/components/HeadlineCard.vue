<template>
  <v-col sm="6" md="4" lg="3" xl="2">
     <v-hover v-slot:default="{ hover }">
    <v-card class="mx-auto" max-width="800" :elevation="hover ? 16 : 2" >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="headline.urlToImage"
      >
        <v-card-title>{{ headline.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        {{ headline.source.name }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ headline.description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text>Change</v-btn>

        <v-btn color="orange"
          text
          @click="showDetails(headline.customId)"
        >
          Details
        </v-btn>
      </v-card-actions>
    </v-card>
     </v-hover>
  </v-col>
</template>

<script>
export default {
  props: {
    headline: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showDetails(id) {
      this.$router.push({ path: `/news/${id}` });
    },
  },
};
</script>

<style scoped>
.v-card {
  max-height: 500px;
}

.v-card .v-card__title {
  background-color: rgba(33,33,33, 0.7);
}
</style>
