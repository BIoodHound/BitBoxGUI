<template>
  <v-card class="ma-1">
    <v-list-item-group>
      <v-list-item v-for="(item, i) in filterDiscontinuedItems(items)" :key="i" @click="onItemClick(item)">
        <div class="ma-3">
          <h4>{{item.itemCode}}</h4>
        </div>
        <v-spacer />
        <div class="ma-3">
          <h4>{{item.description}}</h4>
          
        </div>
        <v-spacer />
        <div class="ma-3">
          <h4>{{item.state}}</h4>
          
        </div>
        <v-spacer />
        <div class="mr-8 mt-2 mb-2" id="itemRowButtons">
          <EditItemDialog :itemNfo="item" />
        </div>
      </v-list-item>
    </v-list-item-group>
  </v-card>
</template>

<script>
import EditItemDialog from '../../components/dialog/EditItemDialog';
export default {
  data() {
    return {
      clickedItem: null
    };
  },
  props: ["items"],
  components: {
    EditItemDialog
  },
  methods: {
    onItemClick(item) {
      this.$parent.$data.item = item;
    },
    filterDiscontinuedItems(value){
      if(value!=null){

        var activeItems = [];
      value.forEach(item =>{
        if(item.state ==="Active"){
          activeItems.push(item);
        }
      });
      return activeItems;
      }
      return false;
      
    }
  }
    

};
</script>

<style >

h4 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}
</style>