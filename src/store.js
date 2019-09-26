import Vue from "vue";
import Vuex from "vuex";
import weatherService from "@/services/weather.service.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentWeather: null,//weatherService.currentConditions(),
    forcastWeather: null,//weatherService.forecasts5Days(),
    favorites: [], // ID - NAME CURRENT - WHEATER
    currCity: {LocalizedName:  'Tel - Aviv', Key: 215854}
  },
  mutations: {
    setCurrCity(state, context) {
      state.currCity = context.currCity
    },
    setCurrWeather(state, context) {
      state.currentWeather = context.currentWeather
    },
    setForcastWeather(state, context) {
      state.forcastWeather = context.setForcastWeather
    },
    addFavorites({favorites}, {clickedCity}) {
      favorites.push(clickedCity)
    },
    removeFavorites({favorites}, {clickedCity}){
      const cityKey = clickedCity['Key']
      const idx = favorites.findIndex(city => city.Key === cityKey)
      favorites.splice(idx, 1)
    }
  },
  actions: {
    async loadWeather({commit}, {pickedCity}){
      const cityKey = pickedCity ? pickedCity['Key']  : ''    
      commit({type: 'setCurrCity', pickedCity})
      try {
        const currentWeather = await weatherService.currentConditions(cityKey);
        commit({type: 'setCurrWeather', currentWeather})
      } catch (err) {
          throw err
      }
    },
    async loadForecast({commit}, {cityKey}){
      try {
        const currentWeather = await weatherService.forecasts5Days(cityKey);
        commit({type: 'setForcastWeather', currentWeather})
      } catch (err) {
          throw err
      }
    },
    async likeCity({commit},{clickedCity}){
      commit({type: 'addFavorites', clickedCity})
    },
    async unlikeCity({commit},{clickedCity}) {
      commit({type: 'removeFavorites', clickedCity})
    }
  },
  getters: {
    currentWeatherToShow({currentWeather}) {
      return currentWeather
    },
    currentForecastToShow({forcastWeather}) {
      return forcastWeather
    },
    currentCity({currCity}) {
      return currCity
    },
  }
});
