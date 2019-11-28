<template>
  <div class="main-container">
    <div class="bg-image" :style="{ backgroundImage: 'url(bgimg/'+ bgImg +'.jpg)' }"></div>
    <div class="flex centered">
      <Autocomplete @onSearch="onSearch" @onPickCity="onPickCity" :items="autocompleteItems" />
    </div>
    <div class="flex centered preference">
      <button @click="getMyLoc">
        <img src="@/assets/icons/my_loc-24px.svg" alt="get weather to your location" />
      </button>
      <button v-if="isFahrenheit" @click="changeIsFahrenheit(false)">°F</button>
      <button v-else @click="changeIsFahrenheit(true)">°C</button>
    </div>

    <div class="weather-container">
      <CurrentWeather
        :city="city"
        :isFahrenheit="isFahrenheit"
        :weatherData="weatherData"
        :style="{ backgroundImage: 'url(bgimg/'+ bgImg +'.jpg)' }"
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
    Autocomplete
  },
  data() {
    return {
      autocompleteItems: [],
      isFahrenheit: this.$store.getters.tempUnitToShow,
      bgImg: "clear.jpg"
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
    async getBgImg() {
      return this.bgImg;
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
      try {
        const cityItems = await weatherService.autocomplete(term);

        this.autocompleteItems = cityItems.map(item => {
          let city = {};
          city["LocalizedName"] = item["LocalizedName"];
          city["Key"] = item["Key"];
          return city;
        });
      } catch (err) {
        this.createToast();
      }
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

    async changeIsFahrenheit(isFahrenheit) {
      this.isFahrenheit = !this.isFahrenheit;
      this.$store.dispatch({
        type: "changeTempUnit",
        isFahrenheit
      });
    }
  },
  async mounted() {
    setTimeout(async () => {
      // we first want to load the website and data and then decide with picture to use
      // if we load it too fast, we can end up with 2 images loaded
      // and bad user expirance -  600 ,mil'sec delay should fix it
      try {
        let imgName = "clear"; // default
        const data = await this.$store.getters.currentWeatherToShow;
        const { HasPrecipitation, WeatherText, Temperature } = await data[0];
        const timePrefix = data[0].IsDayTime ? "-day" : "-night";
        // we set default in case no temp obj
        // so we will use only the includes if
        const temp = Temperature ? Temperature.Metric.Value : 24;
        if (temp < -6) imgName = "snow";
        else if (temp < 1) imgName = "snow-light";
        else if (temp < 3 && HasPrecipitation) imgName = "ice-pellets";
        else if (temp < 8 && HasPrecipitation)
          imgName = "heavy-rain" + timePrefix;
        else if (temp < 13 && HasPrecipitation)
          imgName = "light-rain" + timePrefix;
        else if (WeatherText) {
          if (WeatherText.toLowerCase().includes("cloud")) {
            imgName = "partly-cloudy" + timePrefix;
          } else if (WeatherText.toLowerCase().includes("fog")) {
            imgName = "fog" + timePrefix;
          } else if (WeatherText.toLowerCase().includes("sun")) {
            imgName = "sunny";
          }
        } else if (temp < 8) imgName = "thunder";
        else if (temp > 25) imgName = "sunny";
        this.bgImg = imgName;
      } catch (e) {
        console.log(e);
      }
    }, 600);
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/pages/homepage.scss";
</style>