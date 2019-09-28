<template >
  <div class="weather-box is-white">
    <div class="like">
      <img
        v-if="!like"
        @click="likeClicked"
        src="@/assets/icons/heart-multiple-outline.svg"
        alt="you don't like this city yet"
        class="like-it-symbole"
      />
      <img
        v-if="like"
        @click="likeClicked"
        src="@/assets/icons/heart-multiple.svg"
        alt="favorite city"
        class="like-it-symbole"
      />
    </div>

    <div class="city-box">
      <h1>{{cityName}}</h1>
    </div>
    <error-boundary>
      <div v-if="!weatherData" class="flex centered is-white">Loading ...</div>
      <div v-else>
        <div class="row">
          <div class="weather">
            <img class="weather-icon" alt="weather-icon" :src="WeatherIcon" />
          </div>
          <span class="degree">{{fTemperature}}</span>
        </div>

        <div class="row">
          <div class="text-temp">{{WeatherText}}</div>
        </div>

        <div class="row">
          <span class="rain">{{HasPrecipitation}}</span>
        </div>

        <span class="day-time">{{IsDayTime}} time</span>
      </div>
    </error-boundary>
  </div>
</template>

<script>
import defaultService from '@/services/default.service.js'
import ErrorBoundary from "@/cmps/helpers/ErrorBoundary.vue";
// import { ToastProgrammatic as Toast } from "buefy";
// import "buefy/dist/buefy.css";

export default {
  name: "currentWeather",
  components: {
    ErrorBoundary
  },
  props: {
    weatherData: {
      type: Array,
      required: true,
      default: () => [],
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
  // ["city", "weatherData"],
  data() {
    return {
      like: false,
      isError: false,
      WeatherIcon: "img/1px.jpg"
    };
  },
  computed: {
    cityName() {
      const cityName = this.city ? this.city["LocalizedName"] : "";
      return cityName;
    },
    cTemperature() {
      return this.weatherData && this.weatherData.Temperature
        ? this.weatherData.Temperature.Metric.Value + " °C"
        : "";
    },
    fTemperature() {
      return this.weatherData && this.weatherData.Temperature
        ? this.weatherData.Temperature.Imperial.Value + " °F"
        : "";
    },
    WeatherText() {
      return this.weatherData ? this.weatherData.WeatherText : "";
    },
    IsDayTime() {
      if (!this.weatherData || !this.weatherData.IsDayTime) return "";
      return this.weatherData.IsDayTime ? "day" : "night";
    },
    HasPrecipitation() {
      if (!this.weatherData) return "";
      return this.weatherData.HasPrecipitation
        ? "precipitation expected"
        : "no precipitation expected";
    }
  },
  methods: {
    getWeatherIcon() {
      const iconNum = "" + this.weatherData.WeatherIcon;
      const iconNumFixed = iconNum.padStart(2, "0");
      return `https://developer.accuweather.com/sites/default/files/${iconNumFixed}-s.png`;
    },
    likeClicked() {
      this.like = !this.like;
      const clickedCity = this.city;
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

.weather-box {
  padding: 20px 0;
  background: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  //   justify-items: center
  &::after {
    content: "";
    position: absolute;
    background-color: $background_color_2;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
.row {
  line-height: 3;
}
.weather-icon {
  margin-top: 1rem;
}
.like {
  cursor: pointer;
  position: relative;
  .like-it-symbole {
    position: absolute;
    cursor: pointer;
    z-index: 10;
    top: -1vw;
    right: 16px;
    width: 3vw;
    max-width: 33px;
    min-width: 22px;
  }
}
@media screen and (min-width: 900px) {
  .like .like-it-symbole {
    top: -21px;
  }
}
</style>