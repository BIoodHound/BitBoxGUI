<template>
  <v-row justify="center">
    <v-btn @click.stop="dialog = true">
      <v-icon left>mdi-delete</v-icon>delete
    </v-btn>

    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <v-card-title class="headline">
          <p>This will delete the Supplier "{{this.supplier.name}}" are you sure?</p>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>

          <v-btn color="green darken-1" text @click="removeSupplier()">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import InsertModelSupplier from "../../models/InsertModelSupplier";
export default {
  data() {
    return {
      dialog: false
    };
  },
  props: ["supplier","item"],
  methods: {
    removeSupplier() {
      this.$store.dispatch("removeSupplier", 
      new InsertModelSupplier(this.item.itemCode, [this.supplier]))
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