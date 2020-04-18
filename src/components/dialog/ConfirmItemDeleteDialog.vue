<template>
  <v-row justify="center">
    <v-btn color="red" small @click.stop="dialog = true">
      <v-icon left>mdi-delete</v-icon>Deactivate
    </v-btn>

    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <v-card-title class="headline">
          <p>This will deactivate the item with Item Code "{{this.item.itemCode}}" are you sure?</p>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>

          <v-btn color="green darken-1" text @click="deactivateItem()">Deactivate</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  props: ["item"],
  methods: {
    deactivateItem() {
      this.$store.dispatch("deactivateItem", this.item.itemCode).then(() => {
        this.dialog = false;
      });
      this.$router.go();
    }
  }
};
</script>

<style>
</style>