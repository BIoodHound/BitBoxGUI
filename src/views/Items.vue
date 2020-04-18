<template>
  <v-row>
    <v-col>
      <v-card class="ma-1" id="itemHeader">
        <h2 class="ml-3 ma-1">Item Code</h2>
        <v-spacer />
        <h2 class="mr-12 ma-1">Description</h2>
        <v-spacer />
        <h2 class="mr-12 ma-1">State</h2>
        <CreateItemDialog />
        <div v-if="this.isItemActive">
          <v-btn class="ma-2" small @click="onIsItemActive">Show All</v-btn>
        </div>
        <div v-else>
          <v-btn class="ma-2" small @click="onIsItemActive">show Active</v-btn>
        </div>
      </v-card>
      <div id="itemList" v-if="this.isItemActive">
        <ItemListActive :items="items" />
      </div>
      <div id="itemList" v-else>
        <ItemlistAll :items="items" />
      </div>
    </v-col>
    <v-col class="mr-2" id="infoCards">
      <div id="itemCard">
        <v-card class="ma-1">
          <div v-if="item!=null">
            <ItemInfo :itemInfo="item" />
          </div>
          <div v-else-if="item==null">
            <h2 class="ma-12" id="itemInfoText">ITEM info</h2>
          </div>
        </v-card>
      </div>
      <div id="supprice">
        <v-card class="ma-1" id="supplierCard">
          <v-container class="ma-1">
            <h2>Supplier Info</h2>
          </v-container>
          <div v-if="item!=null">
            <div class="ma-3 mr-5">
              <CreateSupplierDialog :itemCode="item.itemCode" />
            </div>
          </div>
        </v-card>
        <v-card class="ma-1" id="supplierCard">
          <v-container class="ma-1">
            <h2>Price Reduction</h2>
          </v-container>
          <div v-if="item!=null">
            <div class="ma-3 mr-5">
              <CreatePriceReductionDialog :itemCode="item.itemCode" />
            </div>
          </div>
        </v-card>
      </div>
      <div v-if="item!=null" id="supprice">
        <SupplierInfo :supplierInfo="item" />
        <priceInfo :priceInfo="item" />
      </div>
      <div v-else id="supprice">
        <v-card class="ma-1" id="supplierCard">
          <v-container class="ma-9">
            <h1>Supplier Info</h1>
          </v-container>
        </v-card>
        <v-card class="ma-1" id="priceCard">
          <v-container class="ma-9">
            <h1>Price Reduction Info</h1>
          </v-container>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import ItemInfo from "../components/modelInfo/ItemInfo";
import ItemlistAll from "../components/lists/ItemListAll";
import ItemListActive from "../components/lists/ItemListActive";
import SupplierInfo from "../components/modelInfo/SupplierInfo";
import priceInfo from "../components/modelInfo/PriceInfo";
import CreateItemDialog from "../components/dialog/CreateItemDialog";
import CreateSupplierDialog from "../components/dialog/CreateSupplierDialog";
import CreatePriceReductionDialog from "../components/dialog/CreatePriceReductionDialog";
export default {
  name: "Items",
  data() {
    return {
      items: [],
      item: null,
      isItemActive: true
    };
  },
  components: {
    ItemlistAll,
    ItemListActive,
    CreateItemDialog,
    CreateSupplierDialog,
    CreatePriceReductionDialog,
    ItemInfo,
    SupplierInfo,
    priceInfo
  },
  methods: {
    init() {
      this.$store
        .dispatch("getAllItems")
        .then(res => {
          this.items = res;
        })
        .catch((this.items = null));
    },
    onIsItemActive() {
      this.isItemActive = !this.isItemActive;
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>
#itemHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#itemCard #itemInfoText {
  display: flex;
  justify-content: center;
  align-items: center;
}
#infoCards {
  display: flex;
  flex-direction: column;
}
#supprice {
  display: flex;
  flex-direction: row;
}
#supplierCard {
  display: flex;
  width: 50%;
}
#priceCard {
  display: flex;
  width: 50%;
}
</style>