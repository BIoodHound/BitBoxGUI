<template>
  <v-card class="ma-1" id="supplierCard">
    <v-container class>
      <v-list-item-group>
        <v-list-item
          class="ma-1"
          v-for="(supplier, i) in supplierInfo.suppliers"
          :key="i"
          @click="onItemClick(item)"
        >
          <v-row id="centeredRow">
            <p>{{supplier.name}}</p>
          </v-row>
          <v-row id="centeredRow">
            <p>{{supplier.country}}</p>
          </v-row>
          <v-row class="mb-3">
            <ConfirmSupplierDeleteDialog :supplier="supplier" :item="supplierInfo" />
          </v-row>
        </v-list-item>
      </v-list-item-group>
    </v-container>
  </v-card>
</template>

<script>
import ConfirmSupplierDeleteDialog from "../dialog/ConfirmSupplierDeleteDialog";
export default {
  data() {
    return {
      dialog: false
    };
  },
  components: {
    ConfirmSupplierDeleteDialog
  },
  props: ["supplierInfo"]
};
</script>

<style>
</style>