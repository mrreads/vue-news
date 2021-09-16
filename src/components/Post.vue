<template>
    <div class="post">
        <div class="post__header">
            <router-link class="post__category" to="/category/">Категория</router-link>
            <router-link class="post__author" to="/author/">Автор,</router-link>
            <p class="post__date">2 часа назад</p>
        </div>
        <div class="post__content">
            <h2 class="post__heading"> Заголовок Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p class="post_pretext">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            voluptates libero dolor. Velit unde iusto ea ipsum totam accusamus
            dignissimos voluptate nostrum esse distinctio, consequuntur architecto
            vel beatae, voluptas dicta?
            </p>
        </div>
        <div class="post__controls"></div>
    </div>
</template>

<script>
export default {
  name: "Post",
};
</script>

<style scoped>
.post
{
    border-radius: 15px;
	max-width: 700px;
	margin: 0 auto;
	padding: 25px;

	background-color: #FFFFFF;
}

.post__category, .post__author, .post__date
{
	display: inline-block;

	margin-right: 5px;
}

.post__category
{
	font-weight: bold;

	margin-right: 15px;
}

.post__heading
{
	font-size: 23px;
	line-height: 1.3em;

	margin: 10px 0;
}

.post_pretext
{
	font-size: 16px;
	line-height: 23px;
}

</style>
