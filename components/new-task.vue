<template>
  <div>
      <input name="task" id="task" v-model="task" type="text" placeholder="New Task">
      <button @click="submit">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: ''
    }
  },
  methods: {
    submit() {
        this.$emit('submitted', this.task)
    }
  }
}
</script>






