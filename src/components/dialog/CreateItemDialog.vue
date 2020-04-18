<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-1" color="green" v-on="on">
          <v-icon left>mdi-pencil</v-icon>create
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create Item</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="description"
              :counter="512"
              :rules="descriptionRules"
              label="Description*"
              required
            ></v-text-field>

            <v-text-field v-model="price" label="Price" :rules="numberRules"></v-text-field>

            <div id="createButtons">
              <v-btn color="error" @click="dialog = false">close</v-btn>

              <v-btn
                :disabled="!valid"
                color="success"
                class="ml-4"
                @click="onCreationSubmit"
              >create</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Item from "../../models/ItemStarter";
export default {
  data() {
    return {
      description: null,
      price: null,
      valid: false,
      dialog: false,
      loading: false,
      item: new Item(null, null, null),
      descriptionRules: [
        v => !!v || "Description is required",
        v =>
          (v && v.length <= 512 && v.length >= 3) ||
          "Description must be greater than 3 less than 512 characters"
      ],
      numberRules: [v => /^-?\d+\.?\d*$/.test(v) || "price must be a number"]
    };
  },
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    onCreationSubmit() {
      if (this.validate()) {
        this.item.description = this.description;
        this.item.price = this.price;
        this.dialog = false;

        this.item.creator = JSON.parse(localStorage.getItem("user")).username;
        console.log("this boy: ", this.item);
        this.$store.dispatch("createItem", this.item).then(res => {
          console.log(res);
          this.$router.go();
        });
      } else {
        console.log("not valid");
      }
    }
  }
};
</script>

<style scoped>
#createButtons {
  display: flex;
  justify-content: flex-end;
}
</style>