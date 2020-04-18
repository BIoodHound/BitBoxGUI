<template>
  <v-card class="ma-1">
    <v-list-item-group>
      <v-list-item v-for="(item, i) in items" :key="i" @click="onItemClick(item)">
        <v-col class="ma-3">
          <h4>{{item.itemCode}}</h4>
        </v-col>
        <v-col class="ma-3">
          <h4>{{item.description}}</h4>
          
        </v-col>
        <v-col class="ma-3">
          <h4>{{item.state}}</h4>
          
        </v-col>
        <v-col class="mr-8 mt-2 mb-2" id="itemRowButtons">

          <EditItemDialog :itemNfo="item" />
          <div v-if="item.state === 'Active'">
            <div class="ma-2 ml-7">

            <ConfirmItemDeleteDialog v-bind:item="item" />
            </div>
          </div>
        </v-col>
      </v-list-item>
    </v-list-item-group>
  </v-card>
</template>

<script>
import ConfirmItemDeleteDialog from "../../components/dialog/ConfirmItemDeleteDialog";
import EditItemDialog from '../../components/dialog/EditItemDialog'
export default {
  data() {
    return {
      clickedItem: null
    };
  },
  props: ["items"],
  components: {
    ConfirmItemDeleteDialog,
    EditItemDialog
  },
  methods: {
    onItemClick(item) {
      this.$parent.$data.item = item;
    }
  }
};
</script>

<style scoped>
#itemRowButtons {
  display: flex;
  justify-content: flex-end;
}
h4 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}
</style>