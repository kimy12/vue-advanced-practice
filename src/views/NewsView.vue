<template>
  <div>
    <p v-for="item in this.$store.state.news" v-bind:key="item.title">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by 
        <!-- <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link> -->
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
// import axios from 'axios';
// import { fetchNewsList } from '../api/index.js';

export default {
  created(){
    //new promise();
    // axios.get('https://api.hnpwa.com/v0/news/1.json')
    // fetchNewsList()
    //   .then(response => {
    //     this.users = response.data;
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   });

    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>