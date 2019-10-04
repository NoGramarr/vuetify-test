import Vue from 'vue'
import Vuetify, {
  VCheckbox,
  VIcon,
  VDatePicker,
  VBtn
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VCheckbox,
    VIcon,
    VDatePicker,
    VBtn
  }
})

export default new Vuetify({
  icons: {
    iconfont: 'fa'
  },
  theme: {
    themes: {
      light: {
        primary: '#007a5c',
        secondary: '#a799b7',
        info: '#9888a5',
        error: '#776472',
        accent: '#333333'
      },
      dark: {
        primary: '#ffffff'
      }
    }
  }
})
