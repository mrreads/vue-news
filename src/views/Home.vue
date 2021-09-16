<template>
  <div class="home">
    <Post></Post>
    <Post></Post>
        <Post></Post>
    <Post></Post>
        <Post></Post>
    <Post></Post>
  </div>
</template>

<style scoped>  
  .post:first-child
  {
    margin-top: 25px;
  }

  .post:not(:last-child)
  {
    margin-bottom: 25px;
  }
</style>
<script>
import Post from '@/components/Post.vue'

export default {
  components: {
    Post
  }
}
</script>
