<template>
  <v-app id="inspire">
    <div v-if="showAdminNav">
      <AdminNavigationDrawer :open="drawer"></AdminNavigationDrawer>
    </div>
    <div v-else-if="showUserNav">
      <UserNavigationDrawer :open="drawer"></UserNavigationDrawer>
    </div>
    <div v-else>
      <EmptyNavigationDrawer :open="drawer"></EmptyNavigationDrawer>
    </div>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title @click="onHomeClick()">Application</v-toolbar-title>
      <v-spacer />
      <div class="my-2">
        <v-btn
          v-if="!this.$store.state.auth.status.loggedIn"
          depressed
          color="primary"
          text-color="blue"
          @click="onLoginClick()"
        >Log in</v-btn>
        <v-btn v-else depressed color="primary" text-color="blue" @click="onLogoutClick()">Log out</v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import AdminNavigationDrawer from "@/components/vueNavigationDrawers/AdminNavigationDrawer.vue";
import UserNavigationDrawer from "@/components/vueNavigationDrawers/UserNavigationDrawer.vue";
import EmptyNavigationDrawer from "@/components/vueNavigationDrawers/EmptyNavigationDrawer.vue";

export default {
  data: function() {
    return {
      drawer: true,
      info: null,
      loggedUser: null
    };
  },
  components: {
    AdminNavigationDrawer,
    UserNavigationDrawer,
    EmptyNavigationDrawer
  },
  computed: {
    currentUser() {      
      return this.$store.state.auth.user;
    },
    showAdminNav() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_ADMIN");
      }
      return false;
    },
    showUserNav() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_USER");
      }
      return false;
    }
  },
  methods: {
    onLoginClick() {
      this.$router.push("login");
    },
    onHomeClick() {
      this.$router.push("/");
    },
    onLogoutClick() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
    onLoadItems(){
      this.$router.push("items")
    }
  }
};
</script>

