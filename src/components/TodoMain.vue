<template>
  <section class="main">
    <input class="new-todo" placeholder="What needs to be done?" v-model="input" @keypress.enter="addTodo" autofocus>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="toggleAll">
    <label for="toggle-all">Mark all as complete</label>
    <todo-list :todos="todos" />
  </section>
</template>

<script>
  import TodoList from './TodoList'
  let uniqId = 2

  export default {
    components: { TodoList },
    data() {
      return {
        input: '',
        todos: [
          { id: 0, label: '안녕', isDone: true },
          { id: 1, label: '잘가', isDone: true },
        ]
      }
    },
    watch: {
      todos(val) {
        this.$bus.$emit('changeTodos', val.length)
      },
    },
    computed: {
      toggleAll: {
        get() {
          return this.todos.every(todo => todo.isDone)
        },
        set(val) {
          this.todos = this.todos.map(todo => {
            return Object.assign({}, todo, { isDone: val })
          })
        },
      },
    },
    methods: {
      removeTodo(id) {
        this.todos = this.todos.filter(item => id !== item.id)
      },
      addTodo() {
        if (this.input === '') {
          return
        }

        this.todos.push({
          id: uniqId++,
          label: this.input,
          isDone: false,
        })

        this.input = ''
      },
    },
    created() {
      this.$bus.$on('removeTodo', this.removeTodo.bind(this))

      this.$bus.$on('removeCompletedTodos', () => {
        this.todos = this.todos.filter(todo => !todo.isDone)
      })

      this.$bus.$on('changeTodo', val => {
        this.todos = this.todos.map(todo => {
          if (todo.id !== val.id) {
            return todo
          }

          const { label, isDone } = val

          return Object.assign({}, todo, { label, isDone })
        })
      })
    },
    mounted() {
      this.$bus.$emit('changeTodos', this.todos.length)
    },
  }
</script>

<style scoped>

</style>
