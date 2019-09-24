<template>
  <div>
    <h1>home</h1>
    <input type="text" name="search" @keydown="search" v-model="city" />
    <button type="submit">search</button>
    <CurrentForecast v-if="currentWeather" :weatherData="currentWeather" />
  
  
  </div>
</template>

<script>
import DayForecast from "@/cmps/DayForecast";
import CurrentForecast from "@/cmps/CurrentForecast";
import weatherService from '@/services/weather.service.js'
import  debounce  from "lodash.debounce"

export default {
  name: "home",
  components: {
    DayForecast,
    CurrentForecast
  },
  data() {
    return {
      city: "Tel-Aviv",
      currentWeather : null
    };
  },
  async mounted(){
    this.currentWeather =  await weatherService.currentConditions()
  },
  methods: {
    search:  debounce(function() { 
        console.log('calling ajax api ' ,this.city);
       }, 300)
  }
};
</script>
