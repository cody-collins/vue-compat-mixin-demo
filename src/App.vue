<template>
  <div id="app">
    <HelloWorld :msg="msgExtended"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorldMixin from './components/HelloWorldMixin'

export default {
  name: 'App',
  mixins: [HelloWorldMixin],
  components: {
    HelloWorld
  },
  computed: {
    msgExtended () {
      return `${this.msg}. How are you?`
    }
  }
}
</script>
