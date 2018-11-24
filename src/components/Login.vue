<template>
  <div class="container">
    <div class="form">
      <h2>Little Bakery</h2>

      <div class="error" v-show="error">
        {{ error }}
      </div>

      <form class="creds" id="loginform" name="loginform" @submit="handleLogin">
        <label>Username</label>
        <input id="username" type="text" v-model="username" :class="{ 'wrong': error }"/>
        <label>Password</label>
        <input id="password" type="password" v-model="password" :class="{ 'wrong': error }"/>

        <input class="submit" type="submit" value="Login"/>

      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: ""
    };
  },
  methods: {
    handleLogin(e) {
      e.preventDefault();
      if (this.password.length > 0 && this.username.length > 0) {
        var username = this.username;
        var password = this.password;

        const reqestOption = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password })
        };

        return fetch("http://localhost:8080/login", reqestOption)
          .then(response => response.json())
          .then(data => {
            localStorage.token = data.token;
            this.$router.push('/admin');
          })
          .catch(e => {
            this.error = 'Wrong login or password';
          });
      } else {
        this.error = 'Fill username and password';
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/login.jpg");
}

.form {
  background-color: rgb(243, 243, 243);
  border: 1px solid #bbb;
  padding: 10px 10px 15px 10px;
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 5px rgb(15, 15, 15);
}

.creds {
  width: 100%;
}

input {
  display: inline-block;
  width: 100%;
  padding: 12px 10px;
  margin: 5px 0 10px 0;
  box-sizing: border-box;
  font-size: 20px;
}

label {
  display: block;
  font-family: cursive;
  font-size: 20px;
  font-weight: 400;
}

h2 {
  font-size: 40px;
  margin: 0 0 20px 0;
  color: rgb(138, 66, 66);
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  text-align: center;
}

.username {
  margin-bottom: 10px;
}

.submit {
  display: inline-block;
  width: 100%;
  padding: 10px 10px;
  margin: 10px 0 0 0;
  color: rgb(138, 66, 66);
  font-size: 20px;
  font-family: cursive;
  font-weight: 700;
}

.submit:hover {
  background-color: rgb(138, 66, 66);
  color: #fff;
  cursor: pointer;
}

.error {
  background: rgba(255, 60, 60, 0.3);
  border: 2px solid rgba(253, 100, 100, 0.6);
  color: #fff;
  padding: 7px 10px;
  box-sizing: border-box;
  font-size: 18px;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
}

input.wrong {
  border: 1px solid red;
}
</style>
