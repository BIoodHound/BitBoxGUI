<template>
  <v-row justify="center">
    <v-btn @click.stop="dialog = true">
      <v-icon left>mdi-delete</v-icon>delete
    </v-btn>

    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <v-card-title class="headline">
          <p>This will delete the user "{{this.account}}" are you sure?</p>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>

          <v-btn color="green darken-1" text @click="deleteUser()">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: ["account"],
  methods: {
    
    deleteUser() {
      
      this.$store.dispatch("removeUser", this.account).then(() => {
        this.dialog = false;
        
      });
      this.$router.go();
    }
  }
};
</script>

<style>
</style>