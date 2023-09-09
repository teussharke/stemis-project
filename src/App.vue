<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="https://media.licdn.com/dms/image/C4D0BAQGTyfIGl0yJHw/company-logo_200_200/0/1663624441444?e=1702512000&v=beta&t=rI5uSkikngc6v8R5W60xuBDogvrg2kPMNNnwK6LQrFM" width="125" height="125" />


  </header>

  <RouterView />
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header{
  display: flex;
  justify-content: center;
  padding: 2rem;
}
</style>