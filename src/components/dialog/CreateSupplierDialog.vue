<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-1" color="green" v-on="on">
          <v-icon left>mdi-pencil</v-icon>Insert
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create Item</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :rules="supplierRules" label="Supplier name*" required></v-text-field>

            <v-text-field v-model="country" label="Country*" required></v-text-field>

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
import Supplier from "../../models/Supplier";
import InsertModelSupplier from "../../models/InsertModelSupplier";
export default {
  data() {
    return {
      name: null,
      country: null,
      valid: false,
      dialog: false,
      loading: false,
      supplier: new Supplier(),
      insertModelSupplier: new InsertModelSupplier(),
      supplierRules: [
        v => !!v || "Description is required",
        v =>
          (v && v.length <= 30 && v.length >= 3) ||
          "Description must be greater than 3 less than 30 characters"
      ]
    };
  },
  props: ["itemCode"],
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    onCreationSubmit() {
      if (this.validate()) {
        this.supplier.name = this.name;
        this.supplier.country = this.country;
        this.insertModelSupplier.suppliers = [this.supplier];
        this.insertModelSupplier.itemCode = this.itemCode;
        console.log(this.insertModelSupplier);
        
        this.$store
          .dispatch("insertSupplier", this.insertModelSupplier)
          .then(res => console.log(res));
        this.$router.go();
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