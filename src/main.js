import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render (createEl) {
    return createEl(App, {
      props: {
        msg: 'Hi there'
      }
    })
  }
})
