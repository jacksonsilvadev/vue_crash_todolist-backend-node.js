<template>
  <div id="app">
    <script data-ad-client="ca-pub-3502094030340133" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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
