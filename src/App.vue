<template>
  <v-app>
    <v-content>
      <v-fade-transition>
        <keep-alive>
          <router-view to="/news"></router-view>
        </keep-alive>
      </v-fade-transition>
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
