<template>
  <div class="container">
    <h1 class="title is-capitalized">my favorites cities</h1>

    <div>
      <div v-if="!myFavorites" class="is-capitalized subtitle centerd">
        when your add favorites you will see them here</div>
      <div class="columns" v-else>
        <div class="column is-4" v-for="(favorite,index) in myFavorites" :key="index">
          <CurrentWeather
            :weatherData="favorite.weatherData"
            :city="favorite.LocalizedName"
            :cityKey="favorite.Key"
            :style="{ backgroundColor: 'black' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrentWeather from "@/cmps/CurrentWeather";
import utillService from '@/services/utill.service.js'

export default {
  name: "favorites",
  components: {
    CurrentWeather
  },
  created () {
    const favorites = utillService.getSession()
     this.$store.dispatch({
          type: "loadFavorites",
          favorites
        });
  },
  computed: {
    myFavorites() {
      console.log(this.$store.getters.myFavorites);
      return this.$store.getters.myFavorites;
    }
  }
};
</script>
