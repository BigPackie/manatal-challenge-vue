<template>
 <v-row justify="center">
    <v-dialog v-model="isOpen" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Change title</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-form
                  ref="form"
                  v-model="valid"
                >
                  <v-textarea
                    v-model="titleInput"
                    :rules="[rules.required, rules.counter]"
                    no-resize
                    counter
                    auto-grow
                    maxlength="100"
                    rows="1"
                  ></v-textarea>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="sendCanceled">Close</v-btn>
          <v-btn color="blue darken-1" text @click="sendConfirmed">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      titleInput: this.title,
      valid: true,
      rules: {
        required: (value) => !!value || 'Required.',
        counter: (value) => value.length <= 100 || 'Max 100 characters',
      },
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  watch: {
    isOpen() {
      this.reload();
    },
  },
  methods: {
    ...mapActions(['changeHeadlineTitle']),
    sendConfirmed() {
      this.validate();
      if (this.valid) {
        this.changeHeadlineTitle({ newTitle: this.titleInput, id: this.id });
        this.$emit('confirmed', this.titleInput);
      }
    },
    sendCanceled() {
      this.$emit('canceled');
    },
    resetValidation() {
      if (this.$refs.form) {
        this.$refs.form.resetValidation();
      }
    },
    validate() {
      console.log('called validate');
      this.$refs.form.validate();
    },
    reload() {
      this.titleInput = this.title;
      this.resetValidation();
    },
  },
};
</script>

<style scoped>

</style>
