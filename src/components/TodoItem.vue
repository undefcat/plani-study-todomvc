<template>
  <li :class="{ completed: todo.isDone, editing: isEdit }" @dblclick="editTodo" >
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.isDone">
      <label>{{ todo.label }}</label>
      <button class="destroy" @click="removeTodo"></button>
    </div>
    <input ref="edit" class="edit" v-model="edit" @blur="changeTodo" @keypress.enter="changeTodo">
  </li>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true,
        default() {
          return {
            id: -1,
            label: '',
            isDone: false,
          }
        },
      },
    },
    data() {
      return {
        edit: this.todo.label,
        isEdit: false,
      }
    },
    methods: {
      removeTodo() {
        this.$bus.$emit('removeTodo', this.todo.id)
      },
      editTodo() {
        if (this.isEdit) {
          return
        }

        this.isEdit = true

        this.edit = this.todo.label

        this.$nextTick(() => {
          this.$refs.edit.focus()
        })
      },
      changeTodo() {
        const e = Object.assign({}, this.todo, { label: this.edit })

        this.$bus.$emit('changeTodo', e)

        this.isEdit = false
      }
    },
  }
</script>

<style scoped>

</style>
