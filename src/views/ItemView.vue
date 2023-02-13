<template>
  <div>
    <p>title: {{ itemInfo.title }}</p>
    <p>content: {{ itemInfo.content }}</p>
  </div>
</template>

<script>
export default {
  computed : {
    itemInfo(){
      return this.$store.state.content;
    }
  },
  created(){
    const item = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', item);
  }
}
</script>

<style>

</style>