/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	weather: {
      id: null,
      main: {
        temp: null,
      },
    },
  },
  mutations: {
  	SET_WEATHER(state, payload) {
  		state.weather = payload;
  	},
  },
  actions: {
  	loadWeather({ commit }, city) {
      return new Promise((resolve, reject) => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54c6208e65525722577789e191782281`)
  			.then((response) => {
            commit('SET_WEATHER', response.data);
            console.log('DATA', response.data);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
  	},
  },
  modules: {
  },
});
