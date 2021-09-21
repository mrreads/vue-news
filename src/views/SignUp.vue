<template>
  <form class="content-wrapper auth"
    @submit="register">
    <h1>Регистрация</h1>

    <p v-if="loginError" class="error">Ваши логин занят</p>
    <p v-if="emailError" class="error">Вашиа почта занята</p>
    <p v-if="passwordError" class="error">Ваши пароли не совпадают</p>

    <p v-if="successRegister" class="success">Вы зарегистрированы</p>

    <input v-model="fullName" type="text" placeholder="Полное имя"  min="6" required>
    <input v-model="login" type="text" placeholder="Логин" min="4" required>
    <input v-model="email" type="email" placeholder="Почта" required>
    <input v-model="password" type="password" placeholder="Пароль" min="6" required>
    <input v-model="rePassword" type="password" placeholder="Повтор пароля" min="6" required>

    <button>Зарегистрироваться</button>
  </form>
</template> 

<script>
export default {
  data() {
    return {
      passwordError: false,
      loginError: false,
      emailError: false,

      successRegister: false,

      fullName: null,
      login: null,
      email: null,
      password: null,
      rePassword: null
    }
  },
  methods: {
    register(e) {
      e.preventDefault();
      this.successRegister = false;
      this.passwordError = false;
      this.loginError = false;
      this.emailError = false;

      this.passwordError = (this.password == this.rePassword) ? false : true;

      if (!this.passwordError)
      {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var formdata = new URLSearchParams();
        formdata.append("fullname", this.fullName);
        formdata.append("login", this.login);
        formdata.append("email", this.email);
        formdata.append("password", this.password);

        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow',
          headers: myHeaders,
        };

        fetch("http://localhost:3000/api/signup", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result);
            this.loginError = false;
            this.emailError = false;

            if (result.indexOf('login error') >= 0)
            {
              this.loginError = true;
            }
            if (result.indexOf('email error') >= 0)
            {
              this.emailError = true;
            }

            if (result.indexOf('success') >= 0)
            {
              this.successRegister = true;
            }
          })
          .catch(error => console.log('error', error));
      }
    }
  }
}
</script>