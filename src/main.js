import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import { ToastProgrammatic as Toast } from "buefy";
import "buefy/dist/buefy.css";

Vue.config.productionTip = false;
Vue.use(Toast); 
Vue.mixin({
  methods: {
    createToast (message = 'Something went wrong', type = "is-warning"){
        Toast.open({
          position: "is-top",
          type,
          message
        });
    },
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

/*  
  
    */
