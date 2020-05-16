<template>
  <v-col sm="6" md="4" lg="3" xl="2">
    <v-hover v-slot:default="{ hover }">
      <v-card class="mx-auto" max-width="800" :elevation="hover ? 16 : 2" >
        <v-img v-if="headline.urlToImage"
          class="white--text align-end"
          height="200px"
          :src="headline.urlToImage"
          style="background-color:black"
        >

        </v-img>

        <div v-if="!headline.urlToImage"
          style="height:200px; display:flex; background-color:black"
          class="white--text"
        >
          <v-card-title >{{ headline.title }}</v-card-title>
        </div>

        <v-card-subtitle class="pb-1" style="display:flex">
          <span>{{headline.publishedAt | formatDate}}</span>
          <v-spacer></v-spacer>
          <span>{{headline.source.name}}</span>
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div class="text-justify" style="max-height:200px; overflow: hidden">
            {{ headline.description }}
          </div>
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

import CardToolbar from './CardToolbar.vue';
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
