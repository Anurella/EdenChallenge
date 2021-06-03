import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);


// using vue persist
// save the dogList 
const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: state => ({
        dogImages: state.dogImages,
        dogList: state.dogList,
        currentBreed: state.currentBreed,
    }),
  });

export default new Vuex.Store({
    state: {
        dogImages: [],
        dogList: [],
        currentBreed: '',

    },
    plugins: [vuexLocal.plugin],
    getters: {
        getCurBreed(state) {
            return state.currentBreed;
        },
    },
    mutations: {
        setDogImages(state, list) {
            state.dogImages = list;
        },
        byBreedImages(state, list) {
            state.dogImages = list
        },
        updateList(state, list) {
            state.dogList = list;
        },
        // initialiseList(state) {
        // }
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
        },
        async getDogList({ commit }) {
            try{
                 let response = await axios.get('https://dog.ceo/api/breeds/list/all');
                 let allBreeds = Object.keys(response.data.message);
                 commit('updateList', allBreeds)
            } catch (error) {
                console.log(error);
                commit('updateList', []);
            }
        },
        async getByBreed({ state, commit }, tempBreed ) {
            try{
                 let response = await axios.get(`https://dog.ceo/api/breed/${tempBreed}/images/random/100`);
                  state.currentBreed = tempBreed;
                 commit('byBreedImages', response.data);
            } catch(error) {
                console.log(error);
                commit('byBreedImages', []);
            }
            
        }
    },
    modules: {},
});
