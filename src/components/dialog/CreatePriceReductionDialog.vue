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
          <span class="headline">Insert Price reduction</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="priceReduct"
              :rules="numberRules"
              label="Price Reduction*"
              required
            ></v-text-field>
            <DatePickerFrom v-on:fromDate="onFromDateGet" />
            <DatePickerTo v-on:toDate="onToDateGet" />
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
import PriceReduction from "../../models/PriceReduction";
import InsertModelPriceReduction from "../../models/InsertModelPriceReduction";
import DatePickerFrom from "../../components/DatePickerFrom";
import DatePickerTo from "../../components/DatePickerTo";
export default {
  data() {
    return {
      priceReduct: null,
      valid: false,
      dialog: false,
      loading: false,
      fromDate: null,
      toDate: null,
      priceRedution: new PriceReduction(),
      insertModelPriceRedution: new InsertModelPriceReduction(),
      nameRules: [
        v => !!v || "Name is required",
        v =>
          (v && v.length <= 512 && v.length >= 3) ||
          "Name must be greater than 3 less than 30 characters"
      ],
      numberRules: [v => /^-?\d+\.?\d*$/.test(v) || "price must be a number"]
    };
  },
  props: ["itemCode"],
  components: {
    DatePickerTo,
    DatePickerFrom
  },
  methods: {
    onFromDateGet(value) {
      this.fromDate = value;
    },
    onToDateGet(value) {
      this.toDate = value;
    },
    validate() {
      return this.$refs.form.validate();
    },
    onCreationSubmit() {
      if (this.validate()) {
        this.priceRedution.reduction = this.priceReduct;
        this.priceRedution.startDate = this.fromDate;
        this.priceRedution.endDate = this.toDate;
        this.insertModelPriceRedution.priceReductions = [this.priceRedution];
        this.insertModelPriceRedution.itemCode = this.itemCode;

        this.$store
          .dispatch("insertPriceReductions", this.insertModelPriceRedution)
          .then(res => {
            console.log(res);
          });
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