<template>
    <v-dialog v-model="isOpen" scrollable persistent fullscreen max-width="300px">
      <template v-slot:activator="{ on }">
        <v-badge
          bordered color="error"
          :content="selectedSources.length ? selectedSources.length : '0' "
          overlap
          light
          class="mr-1"
        >
          <v-btn class="white--text hidden-sm-and-down" dark v-on="on">
            Sources
            <v-icon dark right>mdi-source-branch</v-icon>
          </v-btn>
          <v-btn class="show-sm-and-down hidden-md-and-up" dark v-on="on">
            <v-icon dark>mdi-source-branch</v-icon>
          </v-btn>
        </v-badge>
      </template>
      <v-card>
        <v-card-title>Sources</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-select
            v-model="selectedSources"
            :items="sources"
            item-text="name"
            item-value="id"
            multiple
            placeholder="Click here to select sources."
            return-object
            >
            <template v-slot:selection="data">
              <v-chip
                :key="JSON.stringify(data.item.id)"
                v-bind="data.attrs"
                :input-value="data.selected"
                :disabled="data.disabled"
                @click:close="data.parent.selectItem(data.item)"
              >
                <v-avatar
                  class="accent white--text"
                  left
                  v-text="data.item.name.slice(0, 1).toUpperCase()"
                ></v-avatar>
                {{ data.item.name }}
              </v-chip>
            </template>
            <template v-slot:prepend-item>
              <v-list-item ripple @click="toggle">
                <v-list-item-action>
                  <v-icon
                    :color="selectedSources.length > 0 ? 'indigo darken-4' : ''"
                    >
                    {{ icon }}
                  </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Select All</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="mt-2"></v-divider>
            </template>
          </v-select>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="mx-auto">
          <v-btn color="blue darken-1" text @click="cancel">Close</v-btn>
          <v-btn color="blue darken-1" text @click="confirm">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {
      isOpen: false,
      selectedSources: [],
    };
  },
  computed: {
    sources() {
      return this.$store.state.sources;
    },
    allSourcesSelected() {
      return this.selectedSources.length === this.sources.length;
    },
    someSourcesSelected() {
      return this.selectedSources.length > 0 && !this.allSourcesSelected;
    },
    icon() {
      if (this.allSourcesSelected) return 'mdi-close-box';
      if (this.someSourcesSelected) return 'mdi-minus-box';
      return 'mdi-checkbox-blank-outline';
    },
  },
  watch: {
    isOpen() {
      this.reload();
    },
  },
  created() {
    console.log('SourceFilter created hook');
    if (this.sources.length === 0) {
      this.fetchAllSources()
        .then(() => this.reload());
    }
  },
  methods: {
    ...mapActions(['fetchAllSources']),
    ...mapMutations(['setFilteredSources']),
    confirm() {
      this.setFilteredSources(this.selectedSources);
      this.isOpen = false;
    },
    cancel() {
      this.isOpen = false;
    },
    toggle() {
      this.$nextTick(() => {
        if (this.allSourcesSelected) {
          this.selectedSources = [];
        } else {
          this.selectedSources = this.sources.slice();
        }
      });
    },
    reload() {
      this.selectedSources = this.$store.state.filteredSources.slice();
    },
  },
};
</script>

<style scoped>
</style>
