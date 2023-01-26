<template>
  <div>
    <div v-for="user in users" v-bind:key="user.title">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data(){
    return {
      users : []
    }
  },
  created() {
    const vm = this;
    fetchAskList()
    .then(response => {
      console.log(response);
      vm.users = response.data;
    })
    .catch(e => {
      console.log(e);
    });
  }
}
</script>

<style>

</style>