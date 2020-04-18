<template>
  <v-card class="ma-1">

    <v-list v-for="(account, i) in accounts" :key="i">
      <div v-if="!isLeo(account.username)">
        <v-row id="userRow">
          <v-col>
            <div class="ml-7">{{account.username}}</div>
          </v-col>
          <v-spacer />
          <v-col>
            <div class="ml-12">{{account.roles[0].name}}</div>
          </v-col>
          <v-spacer />
          <v-col>
            <div>
              <confirmUserDeleteDialog v-bind:account="account.username" />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-list>
  </v-card>
</template>

<script>
import confirmUserDeleteDialog from "../../components/dialog/ConfirmUserDeleteDialog";

export default {
  data() {
    return {
      accounts: []
    };
  },
  methods: {
    
    init() {
      this.$store
        .dispatch("getAllAccounts")
        .then(res => (this.accounts = res))
        .catch((this.accounts = null));
    },
    isLeo(username) {
      if (username == "leo") {
        return true;
      }
      return false;
    }
  },
  components: {
    confirmUserDeleteDialog
  },
  mounted() {
    this.init();
  }
};
</script>

<style>
</style>