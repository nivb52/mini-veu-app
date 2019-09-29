<template >
  <div class="weather-box is-white">
    <div class="like">
      <img
        v-if="!isShowLike && city"
        @click="likeClicked"
        src="@/assets/icons/heart-multiple-outline.svg"
        alt="you don't like this city yet"
        class="like-it-symbole"
      />
      <img
        v-if="isShowLike && city"
        @click="likeClicked"
        src="@/assets/icons/heart-multiple.svg"
        alt="favorite city"
        class="like-it-symbole"
      />
    </div>

    <div class="city-box">
      <h1 class="is-white is-black-bcg-transperent">{{cityName}}</h1>
    </div>
    <error-boundary>
      <div v-if="!weatherData[0]" class="flex centered is-white">Loading ...</div>
      <div v-else>
        <div class="row">
          <div class="weather">
            <img class="weather-icon" alt="weather-icon" :src="getWeatherIcon" />
          </div>
          <span class="degree">{{fTemperature}}</span>
        </div>

        <div class="row">
          <div class="text-temp">{{weatherText}}</div>
        </div>

        <div class="row">
          <span class="rain">{{hasPrecipitation}}</span>
        </div>

        <span class="day-time">{{isDayTime}}</span>
      </div>
    </error-boundary>
  </div>
</template>

<script>
import defaultService from "@/services/default.service.js";
import utillService from "@/services/utill.service.js";
import ErrorBoundary from "@/cmps/helpers/ErrorBoundary.vue";

export default {
  name: "currentWeather",
  components: {
    ErrorBoundary
  },
  props: {
    weatherData: {
      type: Array,
      required: true,
      default: () => []
    },
    city: {
      type: [Object, String],
      required: true
    },
    tempUnit: {
      type: String,
      required: false,
      default: defaultService.tempUnit()
    },
    cityKey: {
      type: [String, Number],
      required: false
    }
  },
  mounted() {
    this.checkLike();
  },
  data() {
    return {
      like: false
    };
  },
  computed: {
    isShowLike(){
      this.checkLike()
      return this.like
    },
    cityName() {
      if (!this.city) return "";
      if (typeof this.city === "object") return this.city["LocalizedName"];
      else return this.city;
    },
    cTemperature() {
      return this.weatherData[0] && this.weatherData[0].Temperature
        ? this.weatherData[0].Temperature.Metric.Value + " °C"
        : "";
    },
    fTemperature() {
      return this.weatherData[0] && this.weatherData[0].Temperature
        ? this.weatherData[0].Temperature.Imperial.Value + " °F"
        : "";
    },
    weatherText() {
      return this.weatherData[0] ? this.weatherData[0].WeatherText : "";
    },
    isDayTime() {
      if (!this.weatherData[0] || !this.weatherData[0].IsDayTime) return "";
      return this.weatherData[0].IsDayTime ? "day time" : "night time";
    },
    hasPrecipitation() {
      if (!this.weatherData[0] || !this.weatherData[0].HasPrecipitation)
        return "";
      return this.weatherData[0].HasPrecipitation
        ? "precipitation expected"
        : "no precipitation expected";
    },
    getWeatherIcon() {
      if (!this.weatherData[0] || !this.weatherData[0].WeatherIcon)
        return "img/1px.jpg";
      const iconNum = "" + this.weatherData[0].WeatherIcon;
      const iconNumFixed = iconNum.padStart(2, "0");
      return `https://developer.accuweather.com/sites/default/files/${iconNumFixed}-s.png`;
    }
  },
  methods: {
    updateWeather() {
      const pickedCity = this.cityKey ? { Key: cityKey } : this.city;
      this.$store.dispatch({
        type: "loadWeather",
        pickedCity
      });
      //EMIT
    },
    checkLike() {
      const clickedCity = this.cityKey || this.city['Key'];
      
      const { myFavorites } = this.$store.getters;
      const isFavorite = myFavorites.filter(
        city => city.Key === clickedCity
      );
      
      if (isFavorite.length === 1) this.like = true;
      else if(isFavorite.length === 0) this.like = false;
    },
    likeClicked() {
      this.checkLike();
      const clickedCity = this.city;
      this.like = !this.like;

      clickedCity.weatherData = this.weatherData;

      if (this.like) {
        this.$store.dispatch({
          type: "likeCity",
          clickedCity
        });
      } else {
        this.$store.dispatch({
          type: "unlikeCity",
          clickedCity
        });
      }
      utillService.setSession(this.$store.getters.myFavorites);
    }
  },
  watch: {
    city: function(val) {
      return val;
    },
    weatherData: function(val) {
      return val;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";
</style>