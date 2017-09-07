<template>
  <div>
    Hello {{msg}}
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {msg: 'world'}
    },
    created () {
    },
    methods: {},
    computed: {},
    mounted () {
    }
  }
</script>
<style scoped>
</style>

