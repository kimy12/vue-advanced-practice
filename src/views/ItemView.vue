<template>
  <div>
    <!-- 사용자 정보 -->
    <section>
      <user-profile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
        </router-link> 
        <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
        <span slot="time">{{ 'Posted ' +fetchedItem.time_ago }}</span>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <!-- 댓글 -->
    <section>
      <div v-html="fetchedItem.content">

      </div>
    </section>
    <!-- <p>title: {{ fetchedItem.title }}</p>
    <p>content: {{ fetchedItem.content }}</p> -->
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: { UserProfile },
  computed : {
    ...mapGetters(['fetchedItem']),
  },
  created(){
    const item = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', item);
  }
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>