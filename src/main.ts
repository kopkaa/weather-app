import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import VueCompositionAPI from '@vue/composition-api';
import store from '@/store';
import Toasted from 'vue-toasted';
import App from './App.vue';

import './styles/main.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueCompositionAPI);
Vue.use(Toasted, {
  iconPack: 'material',
});
Vue.use(Donut);

const options = {
  type: 'error',
  duration: 2400,
  position: 'top-center',
};

Vue.toasted.register('input_error',
  (payload) => {
    if (!payload.message) {
      return 'Something Went Wrong..';
    }

    return `${payload.message}`;
  },
  options);

Vue.config.productionTip = false;
Vue.$store = store;
new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
