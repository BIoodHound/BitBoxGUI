import accountService from "../services/account.service";
const accountState = {
    accounts: "",
    roles: null
}

export const account = {
    state: accountState,
    actions: {
        getAllAccounts({ commit }) {

            commit('getAllAccountsSuccess', accountService.getAllAccounts());

            return accountService.getAllAccounts();
        },
        removeUser({commit}, username){
            commit('getRemoveUserSuccess', accountService.removeUser(username));

            return true;
        }
    },
    mutations: {
        getAllAccountsSuccess(state, res) {
            state.Accounts = res;
            state.roles = null;
        },
        getRemoveUserSuccess(state, res){
            state.Accounts = res;
            state.roles = null;
        }
    }
}