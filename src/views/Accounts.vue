<template>
  <v-container class="userList">
    <v-row>
      <v-col>
        <v-card class="ma-1" id="userHeader">
          <h2 class="ma-2 ml-5">username</h2>
          <v-spacer />
          <h2 class="mt-2 ml-12">user role</h2>
          <v-spacer />
          <createUserDialog />
        </v-card>
        <userList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import createUserDialog from "../components/dialog/CreateUserDialog";
import userList from "../components/lists/UserList";
export default {
  name: "Accounts",
  components: {
    createUserDialog,
    userList
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
.userList {
  max-width: 50vw;
}
#userHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>


