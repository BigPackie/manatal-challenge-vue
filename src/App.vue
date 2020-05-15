<template>
  <v-app>
    <v-content>
      <keep-alive>
        <router-view to="/news"></router-view>
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
