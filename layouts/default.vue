<template>
  <div class="center">
    <navbar></navbar>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '../components/navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
.center {
  margin: auto;
  width: 60%;
  border: 3px solid #73AD21;
  padding: 30px;
}
</style>