<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner-zone :loading="$store.state.LoadingStatus"/>
  </div>
</template>

<script>

import ToolBar from './components/ToolBar.vue';
import SpinnerZone from './components/SpinnerZone.vue';

export default {
  components:{
    ToolBar, SpinnerZone
  },
}

</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* router transtion */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
