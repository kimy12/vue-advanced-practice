<template>
  <div>
    <!-- 질문상세 -->
    <section>
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
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
import { mapGetters } from 'vuex';

export default {
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