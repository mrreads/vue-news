<template>
    <div class="post" v-if="data">
        <div class="post__header">
            <router-link class="post__category" to="/"> {{ data.category_name }}</router-link>
            <router-link class="post__author" to="/">{{ data.user_fullname }},</router-link>
            <p class="post__date"> {{ data.created_at }} </p>
        </div>
        <div class="post__content">
            <h2 class="post__heading"> {{ data.heading }} </h2>
            <p class="post_pretext"> {{ data.pretext }} </p>
            <p class="post_text"> {{ data.text }} </p>
        </div>
    </div>
</template>

<script>
export default {
  name: "Post",
  props: ['data']
};

</script>

<style scoped>
.post
{
    border-radius: 15px;
	max-width: 700px;
	margin: 0 auto;
	padding: 25px 0;

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
    font-weight: bold;
	font-size: 26px;
	line-height: 1.3em;

	margin: 10px 0;
}

.post_pretext
{
    margin-bottom: 25px;
}

.post__heading, .post_pretext, .post_text, .post__header, .post__controls
{
	padding: 0 25px;
}

.post_pretext, .post_text
{
	font-size: 16px;
	line-height: 23px;
}

</style>
