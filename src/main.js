import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


//
// router.prototype.open = function (routeObject) {
//   const {href} = this.resolve(routeObject)
//   window.open(href, '_blank')
// }


import money from 'v-money'



import VCurrencyField from 'v-currency-field'
import { VTextField } from 'vuetify/lib'  //Globally import VTextField

Vue.component('v-text-field', VTextField)
Vue.use(VCurrencyField, {
  // decimalLength: 2,
  autoDecimalMode: true,

  defaultValue: 0,
  valueAsInteger: false,
  allowNegative: true
})




// register directive v-money and component <money>
Vue.use(money, {precision: 4})


// import VueMask from 'v-mask'
// Vue.use(VueMask);


// import VueTheMask from 'vue-the-mask'
// Vue.use(VueTheMask)
// import {mask} from 'vue-the-mask'
// export default {
//   directives: {mask}
// }

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)


Vue.config.productionTip = false


//
// Vue.directive('scroll', {
//   inserted: function(el, binding) {
//     let f = function (evt) {
//       if (binding.value(evt, el)) {
//         window.removeEventListener('scroll', f)
//       }
//     }
//     window.addEventListener('scroll', f)
//   }
// })




new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
