<template>
<div>
  <p>{{WeatherText}}</p>
  <p>{{WeatherIcon}}</p>
  <p>{{IsDayTime}}</p>
  <p>{{cTemperature}} </p>
  <p>{{fTemperature}} </p>
</div>
</template>

<script>
export default {
  name: "CurrentForecast",
  props: ["weatherData"],
  computed: {
    cTemperature() {
      return this.weatherData.Temperature.Metric.Value + 'c';
    },
    fTemperature() {
      return this.weatherData.Temperature.Imperial.Value + 'f';
    },
    WeatherText() {
       return this.weatherData.WeatherText
    },
    WeatherIcon() {
       return this.weatherData.WeatherIcon
    },
    IsDayTime() {
       return this.weatherData.IsDayTime ? 'day' : 'night'
    },
    HasPrecipitation() {
       return this.weatherData.HasPrecipitation
    }
  }
};
</script>

<style>
</style>