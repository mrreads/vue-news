<template>
  <div class="wrapper">
    <Post v-for="post in posts" 
      :key="post.id"         
      :data="post">
    </Post>
    
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
import Post from '@/components/PostMini.vue'

export default {
  components: {
    Post
  },

  data() {
    return {
      posts: null
    }
  },

  created() {
    this.loadPosts()
  },

  methods: {
    loadPosts() {
      var requestOptions = { method: 'GET', redirect: 'follow' };
      fetch("http://vue-news/api/posts", requestOptions)
        .then(response => response.json())
        .then(result => {
          //console.log(result)
          this.posts = result;
        })
        .catch(error => console.log('error', error));
      }
  }
}
</script>
