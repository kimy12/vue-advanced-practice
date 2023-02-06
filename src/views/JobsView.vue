<template>
  <div>
    <p v-for="job in this.$store.state.jobs" v-bind:key="job.title">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{job.time_ago}}, {{ job.domain }}</small>
    </p>
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