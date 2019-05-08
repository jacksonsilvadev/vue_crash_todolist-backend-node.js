<template>
  <div id="app">
     <addTodo v-on:add-todo="addTodo"></addTodo>
   <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"></Todos>
  </div>
</template>

<script>


import Todos from '../components/Todos.vue';

import addTodo from '../components/addTodo.vue';

import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Todos,
    addTodo
  },
  data() {
    return{
      todos: []
    }
  },
  methods: {
    deleteTodo(id){
      axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
      .catch(err => console.log(err))
      // this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(e){
      const { title, completed} = e;

      axios.post('http://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
      .then(res => this.todos = [...this.todos, res.data])
      .catch(err => console.log(err))
    }
  },
  created() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.todos = res.data)
    .catch(err => console.log(err))
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
