<template>
  <div class="forecastday">
    <img class="weather-icon" alt="weather-icon" :src="iconImg" />

    <div class="day">{{dayName}}</div>

    <div class="temp-container">
      <span class="temp">{{maxTemp}}-{{minTemp}}</span>
      <span class="degree">&nbsp; {{getTempUnit}}</span>
    </div>
  </div>
</template>

<script>
import utillService from "@/services/utill.service.js";
import defaultService from "@/services/default.service.js";

export default {
  name: "DayForecast",
  props: {
    forecast: {
      type: Object,
      required: true,
      default: () => {}
    },
    tempUnit: {
      type: String,
      required: false,
      default: defaultService.tempUnit()
    }
  },
  computed: {
    dayName() {
      const day = this.forecast.Date;
      return utillService.dayNameFromUTC(day);
    },
    maxTemp() {
      return this.forecast.Temperature.Maximum.Value;
    },
    minTemp() {
      return this.forecast.Temperature.Minimum.Value;
    },
    getTempUnit() {
      return this.tempUnit;
    },
    iconImg() {
      const iconNum = "" + this.forecast.Day.Icon;
      const iconNumFixed = iconNum.padStart(2, "0");
      return `https://developer.accuweather.com/sites/default/files/${iconNumFixed}-s.png`;
    }
  }
};
</script>

<style lang="scss" scoped>
.forecastday {
  display: inline-grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  justify-content: space-around;

  border-top: 1px solid rgba(50, 65, 70, 0.5);
  padding: 20px 10px;
  &:first-child {
    border: none;
  }
  .weather-icon {
    max-width: 12vw;
  }

  .day {
    font-weight: bold;
    text-align: center;
  }
}
.temp-container {
  width: max-content;
}
</style>