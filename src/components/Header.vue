<template>
    <div class="header">
        <router-link to="/"><h1>VUE-НОВОСТИ</h1></router-link>

        <router-link to="/signup" class="last">Регистрация</router-link>
        <router-link to="/signin">Войти</router-link>
    </div>
</template>

<style scoped>
.header
{
	display: flex;
	align-items: center;
	flex-flow: row nowrap;
	justify-content: space-between;

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