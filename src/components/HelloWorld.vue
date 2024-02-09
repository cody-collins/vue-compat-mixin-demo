<template>
  <h1>{{ msg }}</h1>
</template>

<script>
import HelloWorldMixin from './HelloWorldMixin'
export default {
  name: 'HelloWorld',
  mixins: [HelloWorldMixin]
}
</script>
