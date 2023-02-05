<template>
  <div>
    <div v-for="user in this.$store.state.jobs" v-bind:key="user.title">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
// import { fetchJobsList } from '../api/index.js';

export default {
  created(){
    // fetchJobsList()
    // .then(response => {
    //   this.users = response.data;
    // })
    // .catch( e => {
    //   console.log(e);
    // })
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>