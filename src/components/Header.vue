<template>
    <div class="header">
        <router-link to="/"><h1>VUE-НОВОСТИ</h1></router-link>

        <router-link to="/about" class="last">Регистрация</router-link>
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
</style>