import Vue from 'vue';

import Vuetify, {
  VBtn,
  VCardActions,
  VSpacer,
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';

Vue.use(Vuetify, {
  components: {
    VBtn,
    VCardActions,
    VSpacer,
  },
  directives: {
    Ripple,
  },
});

export default new Vuetify({
});
