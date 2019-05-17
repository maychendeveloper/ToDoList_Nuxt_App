<template>
  <div class="container">
      <p>{{task.text}}</p>
      <button @click="remove(task)">Remove</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['task'], 
  methods: {
    ...mapMutations({
      remove: 'tasks/remove',
    })
  }
}
</script>


