<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn  class="ma-1" color="green" v-on="on">
          <v-icon left>mdi-pencil</v-icon>Edit
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
              :rules="descriptionRules"
              label="Description*"
              required
            ></v-text-field>
            <v-select
              v-model="state"
              :items="['Active', 'Discontinued']"
              :rules="[v => !!v || 'state is required']"
              label="Role"
              required
            ></v-select>
            <v-text-field
              v-model="price"
              label="Price"
            ></v-text-field>
            <v-text-field
              v-model="creator"
              label="Creator"
            ></v-text-field>

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
import Item from "../../models/Item";
export default {
  data() {
    return {
      description: this.itemNfo.description,
      state: this.itemNfo.state,
      price: this.itemNfo.price,
      creator: this.itemNfo.creator,
      itemCode: this.itemNfo.itemCode,
      valid: false,
      dialog: false,
      loading: false,
      item: new Item(),
      descriptionRules: [
        v => !!v || "Description is required",
        v =>
          (v && v.length <= 512 && v.length >= 3) ||
          "Description must be greater than 3 less than 512 characters"
      ]
    };
  },
  props: ["itemNfo"],
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    onCreationSubmit() {
      if (this.validate()) {
        this.item.description = this.description;
        this.item.state = this.state;
        this.item.price = this.price;
        this.item.creator = this.creator;
        this.item.itemCode = this.itemCode;
        this.dialog = false;
        this.$store.dispatch("editItem", this.item).then(res => console.log(res));
        this.$router.go();
      } else {
        console.log("not valid");
      }
    },
    init() {}
  }
};
</script>

<style scoped>
#createButtons {
  display: flex;
  justify-content: flex-end;
}
</style>