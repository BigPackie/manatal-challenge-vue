<template>
 <v-container fluid>
    <v-row justify="center">
      <HeadlineCard v-for="n in 10" :key="n"></HeadlineCard>
    </v-row>
 </v-container>
</template>

<script>
import HeadlineCard from './HeadlineCard.vue';

export default {
  components: {
    HeadlineCard,
  },

};
</script>

<style scoped>

</style>
