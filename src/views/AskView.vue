<template>
  <div>
    <div v-for="item in fetchedAsk" v-bind:key="item.title">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import { fetchAskList } from '../api/index.js';

export default {
  
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ]), 
    // #2
    // ...mapState({
    //   asks: state => state.ask
    // })
    // # 1
    // ask(){
    //   return this.$store.state;
    // }
  },
  // data(){
  //   return {
  //     users : []
  //   }
  // },
  created() {
    // fetchAskList()
    // .then(response => {
    //   this.users = response.data;
    // })
    // .catch(e => {
    //   console.log(e);
    // });
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>