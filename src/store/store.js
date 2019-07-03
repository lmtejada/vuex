import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter.js';

import * as actions from './actions.js';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations, // cant be used for asynchronous tasks like set time out or http requests
    actions,
    modules: {
        counter
    }
});