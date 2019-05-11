<template>
  <header class="header">
    <div>
      <a href="https://github.com/JackFront/vue_crash_todolist-backend-node.js">
        <img class="img" src="../../assets/vue-node.png" alt="GitHub - To-Do-List">
      </a>
    </div>
    <div id="nav">
      <h1 v-text="title"></h1>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <a href="https://github.com/JackFront">
        <img src="../../assets/GitHub-Mark.png" alt="Git Hub / Jackson Silva">
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      title: "Jackson To Do List"
    };
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to bottom right, #0b3c5d, #1d2731);
  color: #d9b310;
  text-align: center;
  padding: 10px;
}

.header img {
  width: 64px;
}

.header nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
  margin-right: 60px;
  margin-left: 65px;
}
</style>