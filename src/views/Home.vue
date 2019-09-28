<template>
  <div class="main-container">
    <div class="bg-image" :style="{ backgroundImage: 'url(' + bgImg + ')' }"></div>
    <div class="flex centered">
      <!-- <SearchInput  /> -->
      <Autocomplete @onSearch="onSearch" @onPickCity="onPickCity" :items="autocompleteItems" />
    </div>

    <div class="weather-container">
      <CurrentWeather
        :weatherData="weatherData"
        :city="city"
        :style="{ backgroundImage: 'url(' + bgImg + ')' }"
      />

      <day-forecast-list :forecastData="forecastData" :city="city" />
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
      autocompleteItems: [],
      isAjaxing: "",
      cityKey: "",
      bgImg: "bgimg/sunny.jpg"
    };
  },
  async created() {
    const pickedCity = this.city;

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
      // CHECK ## maybe delete it
      if (this.currentWeather && this.curremtWeather.WeatherText)
        this.bgImg = `bgimg/${this.currentWeather.WeatherText}.jpg`;
    },
    city() {
      const currCity = {
        LocalizedName: this.$route.params.city,
        Key: this.$route.params.id
      };
      return currCity.Key || this.$store.getters.currentCity;
    }
  },
  methods: {
    async onSearch(term) {
      if (!term || this.cityKey) return;
      const cityItems = await weatherService.autocomplete(term);
      const key1 = "LocalizedName";
      const key2 = "Key";
      this.autocompleteItems = cityItems.map(item => {
        let city = {};
        city[key1] = item[key1];
        city[key2] = item[key2];
        return city;
      });
      console.log("api cityItems: ", this.autocompleteItems);
    },

    async onPickCity(pickedCity) {
      if (!pickedCity) return;
      const { LocalizedName, Key } = pickedCity;
      this.$router.push(`/city/key=${Key}&city=${LocalizedName}`); // /city/215854&new-york
      try {
        await this.$store.dispatch({
          type: "changeCurrCity",
          pickedCity
        });
        // await this.$store.dispatch({
        //   type: "loadForecast",
        //   pickedCity
        // });
      } catch (err) {
        this.createToast();
        console.error("Could not load error:", err);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/pages/homepage.scss";

</style>