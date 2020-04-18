<template>
    <v-row justify="center">
    <v-btn @click.stop="dialog = true">
      <v-icon left>mdi-delete</v-icon>delete
    </v-btn>

    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <v-card-title class="headline">
          <p>This will delete the price reduction with Id: "{{this.priceRedu.id}}" are you sure?</p>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>

          <v-btn color="green darken-1" text @click="removePriceReductions()">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import InsertModelPriceReduction from "../../models/InsertModelPriceReduction"
export default {
  data() {
    return {
      dialog: false
    };
  },
  props: ["priceRedu","item"],
  methods:{
    removePriceReductions() {
      this.$store.dispatch("removePriceReductions", 
      new InsertModelPriceReduction(this.item.itemCode, [this.priceRedu]))
      .then(res => {
        this.dialog = false;
        console.log(res);
        
      });
      this.$router.go();
    }
  }
};
</script>

<style>
</style>