<template>
  <Header></Header>
  <div class="global-wrapper">
      <Sidebar></Sidebar>
      <router-view id="content"></router-view>
  </div>

</template>

<style>
.global-wrapper
{
  padding: 0 25px;
  display: flex;
  flex-flow: row nowrap;
}
</style>

<script>
import '@/assets/css/general.css';

import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Header,
    Sidebar
  }
}
</script>
