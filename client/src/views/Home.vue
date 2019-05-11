<template>
  <div id="app">
    <addTodo v-on:add-todo="addTodo"></addTodo>
    <Todos v-bind:todos="todos" v-on:upd-todo="updatedTodo" v-on:del-todo="deleteTodo"></Todos>
  </div>
</template>

<script>
import Todos from "../components/Todos.vue";

import addTodo from "../components/addTodo.vue";

import axios from "axios";

axios.defaults.baseURL = 'http://' + location.href.split('/')[2]

console.log(axios.defaults.baseURL);

export default {
  name: "Home",
  components: {
    Todos,
    addTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete(`http://localhost:3000/api/task/${id}`)
        .then(res => (this.indexTodo()))
        .catch(err => console.log(err));
      // this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(e) {
      const { name, completed } = e;

      axios
        .post("http://localhost:3000/api/task/", {
          name,
          completed
        })
        .then(res => (this.indexTodo()))
        .catch(err => console.log(err));
    },
    updatedTodo(e){

      
      const { name, completed } = e;
      axios
        .put(`http://localhost:3000/api/task/${e._id}`, {
          name,
          completed
        })
        .then(res => (
          this.indexTodo()
          ))
        .catch(err => console.log(err))
    },
    indexTodo(){
      console.log()
    axios
      .get("http://localhost:3000/api/task")
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err));
    }
  },
  created() {
    this.indexTodo()
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline-color: #328cc1;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  transition: background-color 0.65s ease;
  display: inline-block;
  border: none;
  background: #328cc1;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #d9b310;
  color: #fff;
}

.router-link-exact-active {
  color: #d9b310 !important;
}
</style>
