<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-list-item @click="onClickHome()">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="onClickItem()">
        <v-list-item-action>
          <v-icon>mdi-sofa</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Items</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="onClickAccounts()">
        <v-list-item-action>
          <v-icon>mdi-account-group</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Accounts</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "AdminNavigationDrawer",
  props: {
    open: Boolean
  },
  data: function() {
    return {
      drawer: false
    };
  },
  watch: {
    open() {
      this.drawer = !this.drawer;
    }
  },
  methods: {
    onClickItem(){
      this.$router.push("/items");
    },
    onClickAccounts(){
      this.$router.push("/accounts");
    },
    onClickHome(){
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>