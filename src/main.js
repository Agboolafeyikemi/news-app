import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./plugins/vue-axios";
import Storage from "vue-ls";
import "./main.css";
import "./element-variables.scss";

const options = {
  namespace: "vuejs__",
  name: "ls",
  storage: "local",
};

var filter = function (text, length, clamp) {
  clamp = clamp || "...";
  var node = document.createElement("div");
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.use(Storage, options);
Vue.filter("truncate", filter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
