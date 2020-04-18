<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="mt-2 mr-6" color="green" v-on="on">
          <v-icon left>mdi-pencil</v-icon>create
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="username"
              :counter="20"
              :rules="usernameRules"
              label="username"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              type="password"
              label="Password"
              required
            ></v-text-field>

            <v-select
              v-model="role"
              :items="['USER', 'ADMIN']"
              :rules="[v => !!v || 'Role is required']"
              label="Role"
              required
            ></v-select>
            <div id="createButtons">
              <v-btn color="error" @click="dialog = false">close</v-btn>

              <v-btn
                :disabled="!valid"
                color="success"
                class="ml-4"
                @click="onCreationSubmit"
              >create</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import User from "../../models/NewUser";
export default {
  data() {
    return {
      username: "",
      password: "",
      role: [""],
      valid: false,
      dialog: false,
      loading: false,
      user: new User("", "", ""),
      usernameRules: [
        v => !!v || "Username is required",
        v => (v && v.length <= 20 && v.length >=3) || "Username must be less than 20 characters"
      ],
      passwordRules: [v => !!v || "Password is required"]
    };
  },
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    onCreationSubmit() {
      if (this.validate()) {
        this.user.username = this.username;
        this.user.password = this.password;
        this.user.role = [this.role];
        this.dialog = false;
        this.$store
          .dispatch("auth/register", this.user)
          .then(this.$router.go());
      } else {
        console.log("not valid");
      }
    }
  }
};
</script>

<style scoped>
#createButtons {
  display: flex;
  justify-content: flex-end;
}
</style>