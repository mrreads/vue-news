<template>
  <div v-if="posts" class="content-wrapper">
    <Post v-for="post in posts" 
      :key="post.id"         
      :data="post">
    </Post>
    
  </div>
</template>

<style scoped>  
  .content-wrapper
  {
    padding-bottom: 25px;
  }
  
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
      start: 0,
      all: null,
      scrollPosition: null,
      scrollPersent: null,
      isLoading: false,

      cat: this.$route.params.id,

      posts: []
    }
  },
  created() {
    this.loadPosts(this.start);
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.updateScroll);
  },
  
  watch:{
    $route () {
      this.posts = [];
      this.start = 0;

      this.cat = this.$route.params.id;
      this.loadPosts(this.start);
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY + innerHeight;
      this.scrollPersent = parseInt(this.scrollPosition * 100 / document.body.scrollHeight);
      
      if (this.scrollPersent >= 70 && this.isLoading != true)
        this.loadPosts(this.start);
    },

    loadPosts(start) {
      if (this.cat == null) return;
      
      this.isLoading = true;
      var requestOptions = { method: 'GET', redirect: 'follow' };
      fetch(`http://localhost:3000/api/posts?s=${start}&c=${this.cat}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          let oldCount = this.posts.length;
            //console.log(result)
            result.forEach(p => {
            this.posts.push(p)
          });
          this.start += 10;
          this.isLoading = false;
          let newCount = this.posts.length;
          if (newCount == oldCount)
            window.removeEventListener('scroll', this.updateScroll);
        })
        .catch(error => console.log('error', error));
      }
  }
}
</script>
