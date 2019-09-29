<template>
  <div class="main-container">
    <div class="bg-image" :style="{ backgroundImage: 'url(' + getBgImg + ')' }"></div>
    <div class="flex centered">
      <Autocomplete @onSearch="onSearch" @onPickCity="onPickCity" :items="autocompleteItems" />
    </div>
    <button class="myLoc" @click="getMyLoc">get my location</button>
    <div class="weather-container">
      <CurrentWeather
        :city="city"
        :weatherData="weatherData"
        :style="{ backgroundImage: 'url(' + getBgImg + ')' }"
      />

      <day-forecast-list :city="city" :forecastData="forecastData" />
    </div>
  </div>
</template>

<script>
import DayForecastList from "@/cmps/DayForecastList";
import CurrentWeather from "@/cmps/CurrentWeather";
import Autocomplete from "@/cmps/Autocomplete";
import weatherService from "@/services/weather.service.js";

export default {
  name: "home",
  components: {
    DayForecastList,
    CurrentWeather,
    Autocomplete
  },
  data() {
    return {
      autocompleteItems: []
    };
  },
  async created() {
    const pickedCity = this.$store.getters.currentCity;
    if (
      typeof this.$route.params.city === String &&
      this.$route.params.city !== "undefined"
    ) {
      (pickedCity.LocalizedName = this.$route.params.city),
        (pickedCity.Key = this.$route.params.id);
    }

    try {
      await this.$store.dispatch({
        type: "loadForecast",
        pickedCity
      });
      await this.$store.dispatch({
        type: "loadWeather",
        pickedCity
      });
    } catch (err) {
      this.createToast();
    }
  },
  computed: {
    forecastData() {
      return this.$store.getters.currentForecastToShow;
    },
    weatherData() {
      return this.$store.getters.currentWeatherToShow;
    },
    getBgImg() {
      if (!this.currentWeather || !this.currentWeather[0].WeatherText)
        return "bgimg/sunny.jpg";
      else return `bgimg/${this.currentWeather[0].WeatherText}.jpg`;
    },
    city() {
      if (typeof this.$route.params.city === String) {
        const currCity = {
          LocalizedName: this.$route.params.city,
          Key: this.$route.params.id
        };
        return currCity;
      } else {
        return this.$store.getters.currentCity;
      }
    }
  },
  methods: {
    async getMyLoc() {
      if (navigator.geolocation) {
        try {
          const pickedCity = await navigator.geolocation.getCurrentPosition(
            weatherService.getLanLonWeather)
        } catch (err) {
          this.createToast();
        }
      } else this.createToast("Geolocation is not supported by this browser.");
    },
    async onSearch(term) {
      if (!term || this.cityKey) return;
      const cityItems = await weatherService.autocomplete(term);
      const Name = "LocalizedName";
      const Code = "Key";

      this.autocompleteItems = cityItems.map(item => {
        let city = {};
        city[Name] = item[Name];
        city[Code] = item[Code];
        return city;
      });
    },

    async onPickCity(pickedCity) {
      if (!pickedCity) return;
      const { LocalizedName, Key } = pickedCity;
      try {
        await this.$store.dispatch({
          type: "changeCurrCity",
          pickedCity
        });

        this.$store.dispatch({
          type: "loadForecast",
          pickedCity
        });
        this.$store.dispatch({
          type: "loadWeather",
          pickedCity
        });

        this.$router.push(`/city/key=${Key}&city=${LocalizedName}`); // /city/215854&new-york
      } catch (err) {
        this.createToast();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/pages/homepage.scss";
</style>