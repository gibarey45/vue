<template>
  <div id="app">
    <chatbotchallenge msg="Welcome"/>
  </div>
</template>

<script>
  import chatbotchallenge from './components/chatbotchallenge.vue'
  export default {
    name: 'App',
    components: {
      chatbotchallenge
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
