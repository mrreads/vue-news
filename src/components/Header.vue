<template>
    <div class="header">
        <router-link to="/"><h1>VUE-НОВОСТИ</h1></router-link>

        <router-link to="/signin" class="last">Вход</router-link>
        <router-link to="/signup">Регистрация</router-link>
        <!-- <router-link to="/about">Войти</router-link> -->
    </div>
</template>

<style scoped>
.header
{
	position: sticky;
	top: 0;

	display: flex;
	align-items: center;
	flex-flow: row nowrap;
	justify-content: space-between;

	min-height: 60px;
	padding: 15px 15px;

	background: var(--color-primary);
}

.header .last
{
	margin-left: auto;
}

.header a
{
	padding: 0px 25px;
}

.header h1
{
	font-size: 18px;
}

@media screen and (max-width: 1024px)
{
	.header a
	{
		padding: 0px 20px;
	}
}

@media screen and (max-width: 768px)
{
	.header h1
	{
		display: none;
	}
}

@media screen and (max-width: 425px)
{
	.header a
	{
		padding: 0px 15px;
	}
}
</style>