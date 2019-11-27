<template>
  <div class="forecastday">
    <img class="weather-icon" alt="weather-icon" :src="iconImg" />

    <div class="day">{{dayName}}</div>

    <div class="temp-container">
      <span class="temp">{{maxTemp | fixed}}-{{minTemp | fixed}}</span>
      <span class="degree">&nbsp; {{getTempUnit}}</span>
    </div>
  </div>
</template>

<script>
import utillService from "@/services/utill.service.js";
import * as config from "@/services/app.config.json";

export default {
  name: "DayForecast",
  props: {
    forecast: {
      type: Object,
      required: true,
      default: () => {}
    },
    isFahrenheit: {
      type: Boolean,
      required: false,
      default: JSON.parse(config.isFahrenheit)
    }
  },
  computed: {
    dayName() {
      const day = this.forecast.Date;
      return utillService.dayNameFromUTC(day);
    },
    maxTemp() {
      const temp = this.forecast.Temperature.Maximum.Value;
      if (this.isFahrenheit) return temp;
      else return ((temp - 32) * 5) / 9;
    },
    minTemp() {
      let temp = this.forecast.Temperature.Minimum.Value;
      if (this.isFahrenheit) return temp;
      else return ((temp - 32) * 5) / 9;
    },
    getTempUnit() {
      return this.isFahrenheit ? " °F" : " °C";
    },
    iconImg() {
      const iconNum = "" + this.forecast.Day.Icon;
      const iconNumFixed = iconNum.padStart(2, "0");
      return `https://developer.accuweather.com/sites/default/files/${iconNumFixed}-s.png`;
    }
  },
  filters: {
    fixed: function(value) {
      if (!value) return "";
      return value.toFixed(0);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/cmps/day-forecast.scss";
</style>