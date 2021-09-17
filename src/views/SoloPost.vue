<template>
  <div class="content-wrapper">
    <Post :data="post"></Post>
  </div>
</template>

<style scoped>
.content-wrapper
{
    padding-bottom: 25px;
}
.post {
  margin-top: 25px;
}
</style>
<script>
import Post from '@/components/Post.vue'

export default {
    components: {
        Post
    },

  data() {
    return {
      id: this.$route.params.id,
      post: null,
    };
  },

  created() {
    this.loadPost();
  },

  methods: {
    loadPost() {
      var requestOptions = { method: "GET", redirect: "follow" };
      fetch(`http://vue-news/api/posts/${this.id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          //console.log(result);
          this.post = result;
        })
        .catch((error) => console.log("error", error));
    },
  },
};
</script>
