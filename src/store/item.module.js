import itemService from "../services/item.service";
const itemJson = JSON.parse(localStorage.getItem('item'));
const itemState = {
    itemNfo: itemJson,
    itemData: {
        supplier: null,
        priceReduction: null,
        generatedItem: null
    }
}
//Mutations In this implementation are completely Useless 
export const item = {
    state: itemState,
    actions: {
        getAllItems({ commit }) {

            commit('getAllItemsSuccess', itemService.getAllItems());

            return itemService.getAllItems();
        },
        createItem({ commit }, payload) {
            var res = itemService.createItem(payload)
            commit('createItemSuccess', res);
            return res;
        },
        deactivateItem({ commit }, payload) {

            itemService.deactivateItem(payload)
                .then(commit('deactivateItemSuccess'));
        },
        editItem({ commit }, payload) {
            itemService.editItem(payload)
                .then(commit('editItemSuccess'));
        },
        insertSupplier({ commit }, payload) {
            itemService.insertSupplier(payload)
                .then(commit('insertPriceReductionsSuccess'));
        },
        insertPriceReductions({ commit }, payload) {
            itemService.insertPriceReductions(payload)
                .then(commit('insertPriceReductionsSuccess'));
        },
        removeSupplier({ commit }, Payload) {
            
            itemService.removeSupplier(Payload)
                .then(commit('removeSupplierSuccess'));
        },
        removePriceReductions({ commit }, payload) {
            
            
            itemService.removePriceReduction(payload)
                .then(commit('removePriceReductionsSuccess'));
        },
    },
    mutations: {
        getAllItemsSuccess(state, res) {
            state.itemNfo = res;
            state.itemData.supplier = null;
            state.itemData.priceReduction = null;
        },
        createItemSuccess(state, res) {
            state.itemData.generatedItem = res;
        },
        deactivateItemSuccess(state, res) {
            state.itemData.generatedItem = res;
        },
        editItemSuccess(state, res) {
            state.itemData.generatedItem = res;
        },
        insertSupplierSuccess(state, res) {
            state.itemData.generatedItem = res;
        },
        removeSupplierSuccess(state, res) {
            state.itemData.generatedItem = res;
        },
        insertInsertPriceReductionsSuccess(state, res){
            state.itemData.generatedItem = res;
        },
        removePriceReductionsSuccess(state, res) {
            state.itemData.generatedItem = res;
        }
    }
}