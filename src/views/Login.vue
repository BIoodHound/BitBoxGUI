<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="username"
              v-model="user.username"
              prepend-icon="mdi-account"
              type="text"
              name="username"
              :rules="[v => !!v || 'Username is required']"
              required
            />

            <v-text-field
              id="password"
              label="Password"
              v-model="user.password"
              prepend-icon="mdi-lock"
              type="password"
              :rules="[v => !!v || 'Password is required']"
              required
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="handleLogin()" color="primary">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import User from "../models/User";
export default {
  name: "Login",
  data() {
    return {
      user: new User("", ""),
      loading: false
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;

      if (this.user.username && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(
          () => {
            this.$router.push("/");
          },
          error => {
            this.loading = false;
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      }
    }
  }
};
</script>
