<template>
  <div class="container">
    <h1 class="title is-capitalized">my favorites cities</h1>

    <div>
      <div v-if="!myFavorites" class="is-capitalized subtitle centerd">
        when your add favorites you will see them here</div>
      <div class="columns is-multiline" v-else>
        <div class="column 
        is-3-desktop is-4-tablet is-full-mobile " 
        v-for="(favorite,index) in myFavorites" :key="index">
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
  },
};
</script>
