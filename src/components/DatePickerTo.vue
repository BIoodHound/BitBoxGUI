<template>
  <v-menu
    v-model="fromDateMenu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        label="To"
        prepend-icon="mdi-calendar"
        readonly
        :value="fromDateDisp"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      locale="en-in"
      v-model="fromDateVal"
      no-title
      @input="fromDateMenu = false"
    ></v-date-picker>
  </v-menu>
</template>
<script>
export default {
  data() {
    return {
      fromDateMenu: false,
      fromDateVal: null,
    };
  },
  computed: {
    fromDateDisp() {
        this.$emit('toDate', this.fromDateVal);
      return this.fromDateVal;
    //   this.$emit
      // format/do something with date
    }
  }
};
</script>