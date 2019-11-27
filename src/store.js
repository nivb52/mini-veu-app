import Vue from "vue";
import Vuex from "vuex";
import weatherService from "@/services/weather.service.js";
import utillService from "@/services/utill.service.js";
import * as config from "@/services/app.config.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentWeather: [],
    forecastWeather: {},
    favorites: utillService.getSession() || [],
    currCity: config.default_city,
    isFahrenheit: JSON.parse(config.isFahrenheit)
  },
  mutations: {
    setTempUnit(state, context) {
      state.isFahrenheit = context.isFahrenheit;
    },
    setCurrCity(state, context) {
      state.currCity = context.pickedCity;
    },
    setCurrWeather(state, context) {
      state.currentWeather = context.currentWeather;
    },
    setForcastWeather(state, context) {
      state.forecastWeather = context.forecastWeather;
    },
    setFavorites({ favorites }) {
      favorites = utillService.setSession(favorites);
    },
    addFavorites({ favorites }, { clickedCity }) {
      favorites.push(clickedCity);
    },
    removeFavorites({ favorites }, { clickedCity }) {
      const cityKey = clickedCity["Key"];
      const idx = favorites.findIndex(city => city.Key === cityKey);
      favorites.splice(idx, 1);
    }
  },
  actions: {
    async loadWeather({ commit }, { pickedCity }) {
      commit({ type: "setCurrCity", pickedCity });
      try {
        const cityKey = pickedCity ? pickedCity["Key"] : "";
        const currentWeather = await weatherService.currentConditions(cityKey);
        commit({ type: "setCurrWeather", currentWeather });
      } catch (err) {
        throw err;
      }
    },

    async loadForecast({ commit }, { pickedCity }) {
      const cityKey = pickedCity ? pickedCity["Key"] : "";
      try {
        const forecastWeather = await weatherService.forecasts5Days(cityKey);
        commit({ type: "setForcastWeather", forecastWeather });
      } catch (err) {
        throw err;
      }
    },

    async changeTempUnit({ commit }, { isFahrenheit }) {
      commit({ type: "setTempUnit", isFahrenheit });
    },
    async changeCurrCity({ commit }, { pickedCity }) {
      commit({ type: "setCurrCity", pickedCity });
    },
    async likeCity({ commit }, { clickedCity }) {
      commit({ type: "addFavorites", clickedCity });
    },
    async unlikeCity({ commit }, { clickedCity }) {
      commit({ type: "removeFavorites", clickedCity });
    },
    async loadFavorites({ commit }, { favorites }) {
      commit({ type: "setFavorites" }, favorites);
    }
  },
  getters: {
    tempUnitToShow({ isFahrenheit }) {
      return isFahrenheit;
    },
    currentCity({ currCity }) {
      return currCity;
    },
    currentWeatherToShow({ currentWeather }) {
      return currentWeather;
    },
    currentForecastToShow({ forecastWeather }) {
      return forecastWeather;
    },
    myFavorites({ favorites }) {
      return favorites;
    }
  }
});
