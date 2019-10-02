<template>
  <div class="main-container">
    <div class="bg-image" :style="{ backgroundImage: 'url(' + getBgImg + ')' }"></div>
    <div class="flex centered">
      <Autocomplete @onSearch="onSearch" @onPickCity="onPickCity" :items="autocompleteItems" />
    </div>
    <div class="my-location">
    <button 
    @click="getMyLoc">
      <img src="@/assets/icons/my_loc-24px.svg"  alt="get weather to your location"/>
    </button>
    <button  v-if="isFahrenheit"
    @click="changeIsFahrenheit(false)">
     °F
    </button>
    <button  v-else
    @click="changeIsFahrenheit(true)">
     °C
    </button>
    </div>

    
    <div class="weather-container">
      <CurrentWeather
        :city="city"
        :isFahrenheit="isFahrenheit"
        :weatherData="weatherData"
        :style="{ backgroundImage: 'url(' + getBgImg + ')' }"
      />

      <day-forecast-list :city="city" :forecastData="forecastData" :isFahrenheit="isFahrenheit" />
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
    Autocomplete,
  },
  data() {
    return {
      autocompleteItems: [],
       isFahrenheit: this.$store.getters.tempUnitToShow
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
      return "bgimg/sunny.jpg";
    },
    city() {
      if (typeof this.$route.params.city === String) {
        const currentCity = {
          LocalizedName: this.$route.params.city,
          Key: this.$route.params.id
        };
        return currentCity;
      } else {
        return this.$store.getters.currentCity;
      }
    }
  },
  methods: {
    async getMyLoc() {
      if (navigator.geolocation) {
        try {
          navigator.geolocation.getCurrentPosition(pos => {
            weatherService
              .getLanLonWeather(pos.coords.latitude, pos.coords.longitude)
              .then(async res => {
                let pickedCity = {};
                pickedCity["LocalizedName"] = await res["LocalizedName"];
                pickedCity["Key"] = await res["Key"];
                pickedCity.Key = await res.Key;
                this.onPickCity(pickedCity);
              });
          });
        } catch (err) {
          this.createToast();
        }
      } else this.createToast("Geolocation is not supported by this browser.");
    },
    async onSearch(term) {
      if (!term || this.cityKey) return;
      const cityItems = await weatherService.autocomplete(term);

      this.autocompleteItems = cityItems.map(item => {
        let city = {};
        city['LocalizedName'] = item['LocalizedName'];
        city['Key'] = item['Key'];
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
    },

    async changeIsFahrenheit(isFahrenheit){
      if (isFahrenheit !== true && isFahrenheit !== false) return
      this.isFahrenheit = !this.isFahrenheit
      this.$store.dispatch({
        type:"changeTempUnit",
        isFahrenheit
      })

    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/pages/homepage.scss";
</style>