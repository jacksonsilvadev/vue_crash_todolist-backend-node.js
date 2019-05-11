<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>
