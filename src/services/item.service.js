import axios from 'axios';
import authHeader from '../services/auth-header.js'
const API_URL = 'http://localhost:7070/';

class ItemService{
    getAllItems(){
        return axios.get(API_URL + 'items', { headers: authHeader() })
            .then(response => {
                
                return response.data;
            })
            .catch(function (error){
                return error;
                
            });
    }
    
    createItem(item){
        console.log("create " , item);
        
        return axios.post(API_URL + 'items', item, {headers: authHeader()}).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    deactivateItem(item){
        return axios.put(API_URL + 'items/' + item, null, {headers: authHeader()}).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    editItem(item){
        return axios.put(API_URL + 'items/', item, {headers: authHeader()})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    insertSupplier(payload){
        return axios.put(API_URL + 'item-insert-supplier', payload, {headers: authHeader()})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    insertPriceReductions(payload){
        console.log("banana ",payload);
        
        return axios.put(API_URL + 'item-insert-price-reduction', payload, {headers: authHeader()})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    removeSupplier(Payload){
        
        
        return axios.put(API_URL + 'item-remove-supplier', Payload,  {headers: authHeader()}).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    removePriceReduction(payload){
        console.log("this boys: " , payload);
        return axios.put(API_URL + 'item-remove-price-reduction', payload, {headers: authHeader()} )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
}
export default new ItemService();