import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dogImages: [],
    },
    getters: {
        dogList(state){
            return state.dogImages.message;
        }
    },
    mutations: {
        setDogImages(state, list) {
            state.dogImages = list
        }
    },
    actions: {
        async getDogListing({ commit }) {
            try {
                let response = await axios.get('https://dog.ceo/api/breeds/image/random/50');
                commit('setDogImages', response.data);
            } catch (error) {
                console.log(error);
                commit('setDogImages', []);
            }
        }
    },
    modules: {},
});
