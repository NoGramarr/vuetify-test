import Vue from 'vue'
import Router from 'vue-router'
import Flight from './views/Flight.vue'
import Hotel from './views/Hotel.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'flight',
      component: Flight
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: Hotel
    }
  ]
})
