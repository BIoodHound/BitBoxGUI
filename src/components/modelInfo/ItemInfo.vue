<template>
  <v-container class="ma-2">
    <v-row id="centeredRow">
      <h2>Item Code:</h2>
      <p class="ml-2 mt-4">{{itemInfo.itemCode}}</p>
    </v-row>
    <v-row id="centeredRow">
      <h2>Description:</h2>
      <p class="ml-2 mt-4">{{itemInfo.description}}</p>
    </v-row>
    <v-row id="centeredRow">
      <h2>State:</h2>
      <p class="ml-2 mt-4">{{itemInfo.state}}</p>
    </v-row>
    <v-row id="centeredRow">
      <h2>Price:</h2>
      <p class="ml-2 mt-4">{{itemInfo.price}}</p>
    </v-row>
    <v-row id="centeredRow">
      <h2>Creation Date:</h2>
      <p class="ml-2 mt-4">{{itemInfo.creationDate}}</p>
    </v-row>
    <v-row id="centeredRow">
      <h2>Creator :</h2>
      <p class="ml-2 mt-4">{{itemInfo.creator}}</p>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["itemInfo"]
};
</script>

<style scoped>
#centeredRow {
  display: flex;
  align-items: center;
}
</style>