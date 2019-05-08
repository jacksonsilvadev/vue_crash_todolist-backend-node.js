<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todos">
            
            <!-- Enviando o  loop para o todoitem.vue template-->
            <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)"></TodoItem>
        </div>
    
    </div>
</template>

<script>

import TodoItem from './toDoItem.vue'
export default {
    name: "Todos",
    components: {
        TodoItem
    },
    // props é para pgar um valor que foi passado no v-bind quando chamou o template
    props:["todos"]
}
</script>


<style scoped>
    
</style>