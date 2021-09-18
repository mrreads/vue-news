<template>
    <div class="change" v-on:click="this.toggleCategory">|||</div>
    <div class="categories" v-if="this.openedCategory">
        <router-link to="/" class="category home"> Главная </router-link>
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

.change
{
  width: 0;
  height: 0;
  display: none;
}

.home
{
  display: none;
}

@media screen and (max-width: 1024px)
{
  .categories
  {
    min-width: 200px;
  }
}

@media screen and (max-width: 768px)
{
    .home
    {
      margin-top: 25px;
      display: block;
    }
    .categories
    {
      /* display: none; */
      position: fixed;
      top: 60px;
      border-radius: 0;
      right: 0;
      background-color: rgb(255 240 230);
      width: 100%;
      margin: 0;
      padding: 0 25px;
      padding-bottom: 25px;
      overflow-x: scroll;
      height: calc(100vh - 60px);
    }
    .category
    {
      margin-bottom: 5px;
    }
    .change
    {
      cursor: pointer;
      min-height: 40px;
      min-width: 45px;
      position: fixed;
      top: 10px;
      left: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 38px;
      transform: rotate(90deg);
    }
}
</style>
    
<script>
export default {
  data() {
    return {
      openedCategory: false,
      categories: null,
    };
  },

  created() {
    this.loadCategories();
    window.addEventListener("resize", this.checkWidth);
  },
  unmounted() {
    window.removeEventListener("resize", this.checkWidth);
  },

  methods: {
    checkWidth() {
      this.openedCategory = (window.innerWidth > 768) ? true : false;
    },
    toggleCategory() {
      this.openedCategory = !this.openedCategory;
    },

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