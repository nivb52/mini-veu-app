<template>
  <div class="other-days flex centered">
    <div v-if="!forecastData" class="flex centered is-black">Loading ...</div>
    <DayForecast
      v-else
      v-for="forecast in dailyForecasts"
      :forecast="forecast"
      :key="forecast.Date"
    />
  </div>
</template>

<script>
import defaultService from '@/services/default.service.js'
import DayForecast from "@/cmps/DayForecast";

export default {
  name: "DayForecastList",
  components: {
    DayForecast
  },
  props: {
    forecastData: {
      type: Object,
      required: true,
      default: () => {},
    },
    city: {
      type: Object,
      required: false,
      default: defaultService.city()
    },
    tempUnit: {
      type: String,
      required: false,
      default: defaultService.tempUnit()
    }
  },
  // props: ["city", "forecastData"], 
  computed: {
    dailyForecasts() {
      return this.forecastData["DailyForecasts"];
    }
  },
  watch: {
    city: function(val) {
      return val;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";

.other-days {
  background-color: rgba(255, 255, 255, 0.7);
  flex-direction: column;
  color: $color_2;
}
</style>