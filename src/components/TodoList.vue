<template>
  <ul class="todo-list">
    <todo-item
        v-for="todo in filterTodos"
        :todo="todo"
        :key="todo.id"
    />
  </ul>
</template>

<script>
  import TodoItem from './TodoItem'
  export default {
    components: { TodoItem },
    props: {
      todos: {
        type: Array,
        required: true,
        default() {
          return []
        },
      },
    },
    data() {
      return {
        status: 'all'
      }
    },
    computed: {
      filterTodos() {
        switch (this.status) {
          case 'active':
            return this.todos.filter(todo => !todo.isDone)

          case 'completed':
            return this.todos.filter(todo => todo.isDone)

          case 'all':
          default:
            return this.todos
        }
      },
    },
    mounted() {
      this.$bus.$on('changeStatus', status => {
        this.status = status
      })
    },
  }
</script>

<style scoped>

</style>
