import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("./views/Favorites.vue")
    },
    {
      path: "/city/key=:id?&city=:city?",
      name: "city",
      component: Home
    },
    {
      path: '*',
      name: 'page-not-found',
      component: () => import("./cmps/helpers/PageNotFound.vue")
    }
  ]
});
