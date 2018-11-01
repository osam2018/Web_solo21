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
      path: "/messenger",
      name: "messenger",
      component: () => import("./views/Messenger.vue")
    },
    {
      path: "/notes",
      name: "notes",
      component: () => import("./views/Messenger.vue")
    },
    {
      path: "/schedule",
      name: "schedule",
      component: () => import("./views/Schedule.vue")
    }
  ]
});
