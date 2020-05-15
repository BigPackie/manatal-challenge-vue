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

        <CardToolbar
          navigateName="Details"
          @navigate="showDetails"
          changeName="Change"
          @change="showChangeModal"
        ></CardToolbar>

        <ChangeTitleModal
          :isOpen="isOpen"
          :title="headline.title"
          :id="headline.customId"
          @confirmed="onConfirmed"
          @canceled="onCanceled"
        ></ChangeTitleModal>

      </v-card>
    </v-hover>
  </v-col>
</template>

<script>

import CardToolbar from './cardToolbar.vue';
import ChangeTitleModal from './ChangeTitleModal.vue';

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    headline: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showDetails() {
      this.$router.push({ path: `/news/${this.headline.customId}` });
    },
    showChangeModal() {
      this.isOpen = true;
    },
    onConfirmed() {
      this.isOpen = false;
    },
    onCanceled() {
      this.isOpen = false;
    },
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    CardToolbar,
    ChangeTitleModal,
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
