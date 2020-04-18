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
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "UserNavigationDrawer",
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
    onClickHome(){
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>