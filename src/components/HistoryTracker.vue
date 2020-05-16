<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on }">
      <v-btn class="white--text hidden-sm-and-down mr-2" dark v-on="on">
        History
        <v-icon dark right>mdi-history</v-icon>
      </v-btn>
      <v-btn class="show-sm-and-down hidden-md-and-up mr-2" dark v-on="on">
        <v-icon dark>mdi-history</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>HISTORY</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-0">
        <v-list dense three-line>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in routeHistory"
              :key="i"
              :inactive="true"
              :ripple="false"
              tile
            >
              <v-list-item-content>
                <v-list-item-title>
                  <span>{{ item.dateTime | formatDateCalendar}}</span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.title ? item.title : "Not available"}}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="navigate(item.path)">
                  <v-icon>mdi-arrow-right-bold</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="mx-auto">
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapState(['routeHistory']),
  },
  methods: {
    navigate(path) {
      if (this.$route.path === path) {
        return;
      }
      this.$router.push({ path: `${path}` });
    },
  },
};
</script>

<style scoped>
</style>
