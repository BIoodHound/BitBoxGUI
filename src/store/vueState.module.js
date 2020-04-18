export const vueState = {
    state: {
        userListRefresh: false
    },
    mutations: {
        userReload(state){
            state.userListRefresh = !state.userListRefresh;
        }
    },
    getters: {
        userListRefresh: state => state.userListRefresh
    }
}