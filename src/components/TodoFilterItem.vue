<template>
  <li>
    <a :class="{ selected: isCurrentStatus }" @click="changeStatus">{{ status | toUpper }}</a>
  </li>
</template>

<script>
  export default {
    props: {
      status: {
        type: String,
        required: true,
        default: '',
      }
    },
    data() {
      return {
        isCurrentStatus: false,
      }
    },
    filters: {
      toUpper(val) {
        if (val === '') {
          return ''
        }

        return val[0].toUpperCase() + val.substr(1)
      }
    },
    methods: {
      changeStatus() {
        this.$bus.$emit('changeStatus', this.status)
      },
    },
    created() {
      this.$bus.$on('changeStatus', status => {
        this.isCurrentStatus = status === this.status
      })
    }
  }
</script>

<style scoped>
  a {
    cursor: pointer;
  }
</style>
