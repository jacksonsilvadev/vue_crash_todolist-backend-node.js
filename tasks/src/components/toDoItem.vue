<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <label class="container-checkbox">
        {{todo.title}}
        <input type="checkbox" :checked="todo.completed" v-on:change="markComplete">
        <span class="checktrue"></span>
      </label>

      <button @click="$emit('del-todo', todo.id)" class="del">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "toDoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      // completed sera diferente do que esta lá
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}

.container-checkbox {
  /* display: block; */
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checktrue {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border: 1px #0b3c5d solid;
  border-radius: 50%;
  background-color: #eee;
}
.container-checkbox:hover input ~ .checktrue {
  background-color: #ccc;
}

.container-checkbox input:checked ~ .checktrue {
  background-color: #d9b310;
}

.checktrue:after {
  content: "";
  position: absolute;
  display: none;
}

.container-checkbox input:checked ~ .checktrue:after {
  display: block;
}

.container-checkbox .checktrue:after {
  left: 7px;
  top: 3.5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>