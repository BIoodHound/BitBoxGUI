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
        label="from"
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

        minDate: "2019-07-04",
        maxDate: "2019-08-30"
      };
    },
    computed: {
      fromDateDisp() {
        this.$emit('fromDate', this.fromDateVal);
        return this.fromDateVal;
        // format date, apply validations, etc. Example below.
        // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
      }
    }
  };
</script>