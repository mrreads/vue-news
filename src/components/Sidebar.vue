<template>
    <div class="categories">
        <h3>Категории:</h3>
        <router-link :to="{ path: '/category/'+category.id}" v-for="category in categories" :key="category.id" class="category"> {{ category.name }} </router-link>
    </div>
</template>

<style scoped>
.categories
{
	position: sticky;
	top: 85px;

	display: flex;
	align-self: flex-start;
	flex-flow: column nowrap;

	min-width: 250px;
	margin-top: 25px;
	margin-right: 25px;
	padding: 10px;
	padding-bottom: 10px;

	border-radius: 15px;
	background-color: #FFFFFF;
}

.categories h3
{
	font-size: 23px;

	padding: 15px 20px;
}
.category
{
	font-size: 16px;
	line-height: 23px;

	padding: 10px 20px;

	transition: 0.3s all;

	border-radius: 10px;
	background-color: #FFFFFF;
}

.category:hover
{
	background-color: rgba(255, 102, 0, 0.05);
}
</style>
    
<script>
export default {
  data() {
    return {
      categories: null,
    };
  },

  created() {
    this.loadCategories();
  },

  methods: {
    loadCategories() {
      var requestOptions = { method: "GET", redirect: "follow" };
      fetch(`http://vue-news/api/categories`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          //console.log(result);
          this.categories = result;
        })
        .catch((error) => console.log("error", error));
    },
  },
}
</script>