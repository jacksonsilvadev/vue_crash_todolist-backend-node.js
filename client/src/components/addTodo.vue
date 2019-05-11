<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="name" name="name" placeholder="Add To-do to list">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
// import uuid from 'uuid'

export default {
  name: "addTodo",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        //    id: uuid.v4(),
        name: this.name,
        completed: false
      };
      //    Send up to parent template

      this.$emit("add-todo", newTodo);
      this.name = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 7;
  padding: 6px;
}

input[type="submit"] {
  flex: 3;
}
</style>