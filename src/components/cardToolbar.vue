<template functional>
   <v-card-actions>
        <v-btn color="blue darken-1"
          text
          @click="listeners.change"
        >
          {{props.changeName}}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1"
          text
          @click="listeners.navigate"
        >
          {{props.navigateName}}
        </v-btn>
      </v-card-actions>
</template>

<script>

export default {
  props: {
    navigateName: {
      type: String,
      default: 'Navigate',
    },
    changeName: {
      type: String,
      default: 'ChangeHeader',
    },
  },
};
</script>

<style>

</style>
