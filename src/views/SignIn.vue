<template>
  <div class="content-wrapper auth">
    <h1>Авторизация</h1>
    <input type="text" placeholder="Логин">
    <input type="password" placeholder="Пароль">
        <button v-on:click="login">Войти</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      console.log('войти');
    }
  }
}
</script>