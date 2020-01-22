<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ count }}</strong> item left</span>

    <ul class="filters">
      <todo-filter-item v-for="status in filterTodos" :key="status" :status="status" />
    </ul>

    <button class="clear-completed" @click="removeCompletedTodo">Clear completed</button>
  </footer>
</template>

<script>
  import TodoFilterItem from './TodoFilterItem'
  export default {
    components: { TodoFilterItem },
    data() {
      return {
        filterTodos: [ 'all', 'active', 'completed' ],
        count: 0,
      }
    },
    methods: {
      removeCompletedTodo() {
        this.$bus.$emit('removeCompletedTodos')
      },
    },
    created() {
      this.$bus.$on('changeTodos', count => {
        this.count = count
      })
    },
    mounted() {
      this.$bus.$emit('changeStatus', 'all')
    },
  }
</script>

<style scoped>

</style>
