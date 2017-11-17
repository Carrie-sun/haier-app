
import Vue from 'vue';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex';
Vue.use(Vuex)
var store=new Vuex.Store({
    //data
    state:{
    	num:1,
    	price:2299,
    	allprice:2299,
    	money:30000
    },
    mutations:{

    }
})
export default store;