<template>
  <v-card class="ma-1" id="supplierCard">
    <v-container class>
      <v-list-item-group>
        <v-list-item
          class="ma-1"
          v-for="(price, i) in priceInfo.priceReductions"
          :key="i"
        >
          <v-row id="centeredRow">
            <v-col>
              <p>id: {{price.id}}</p>
              <p>Price reduction: {{price.reduction}}</p>
              <v-col>
                <ComfirmPriceReductionDeleteDialog :priceRedu="price" :item="priceInfo"/>
              </v-col>
            </v-col>
            <v-col>
              <p>start: {{price.startDate}}</p>

              <p>end: {{price.endDate}}</p>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list-item-group>
    </v-container>
  </v-card>
</template>

<script>
import ComfirmPriceReductionDeleteDialog from "../dialog/ConfirmPriceReductionDeleteDialog";
export default {
  props: ["priceInfo"],
  methods: {
    onPriceClick() {
      console.log(this.priceInfo);
    }
  },
  components: {
    ComfirmPriceReductionDeleteDialog
  }
};
</script>

<style>
</style>