<template>
  <v-app>
    <v-app-bar hide-on-scroll dark class="elevation-6" app>
      <v-toolbar-title class="headline">
        <span class="font-weight-light">e</span>
        <span class="primary--text">TRIP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="goRoute('/hotel')"><v-icon left>fas fa-home</v-icon>Hotel</v-btn>
      <v-btn text @click="goRoute('/')"><v-icon left>fas fa-plane</v-icon>Flight</v-btn>
    </v-app-bar>
    <v-content id="content">
      <router-view/>
      <v-slide-x-reverse-transition>
          <v-btn fixed
                  small
                  fab
                  v-if="returnVisible"
                  style="top: 90vh"
                  draggable
                  right
                  color="dark"
                  dark
                  @click="$vuetify.goTo('#content', scrollOptions)">
              <v-icon>
                  fas fa-arrow-up
              </v-icon>
          </v-btn>
      </v-slide-x-reverse-transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    scrollOptions () {
      return {
        duration: 500,
        offset: 0,
        easing: 'easeInOutCubic'
      }
    },
    returnVisible: false
  }),
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    goRoute (rt) {
      if (this.$router.currentRoute.fullPath !== rt) {
        this.$router.push(rt)
      }
    },
    handleScroll () {
      if (window.scrollY > 600) {
        this.returnVisible = true
      } else {
        this.returnVisible = false
      }
    }
  }
}
</script>
