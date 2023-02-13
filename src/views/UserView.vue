<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
    <!-- <p>name : {{ this.$store.state.user.id }}</p>
    <p>karma : {{ this.$store.state.user.karma }}</p>
    <p>created : {{ this.$store.state.user.created }}</p> -->
  </div>
</template>

<script>

export default {
  computed : {
    userInfo(){
      return this.$store.state.user;
    }
  },
  created(){
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
}
</script>

<style>

</style>