<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" v-bind:key="item.title" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
        <!-- 기타 정보 영역 -->
        <!-- <a v-bind:href="item.url">
          {{ item.title }}
        </a>
        <small>
          {{ item.time_ago }} by 
          <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small> -->
      </li>
    </ul>
    <!-- <p v-for="item in this.$store.state.news" v-bind:key="item.title">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by 
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p> -->
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

<style scoped>
.news-list{
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title{
  margin: 0;
}
.link-text{
  color: #828282;
}
</style>