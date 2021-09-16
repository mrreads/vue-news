<template>
  <Header></Header>
  <router-view id="content"></router-view>
</template>

<style>

</style>

<script>
import '@/assets/css/general.css';

import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
