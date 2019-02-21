<template>
  <b-container>
    <b-alert
      variant="success"
      v-if="!err && msg != ''"
      show
    >{{msg}}</b-alert>
    <b-alert
      variant="danger"
      v-if="err"
      show
    >{{msg}}</b-alert>
    <b-row>
      <b-col></b-col>
      <b-col>
        <b-form>
          <b-form-group
            id="usernameGroup"
            label="Username"
            label-for="usernameInput"
          >
            <b-form-input
              id="usernameInput"
              type="text"
              v-model="username"
              required
            />
          </b-form-group>
          <b-form-group
            id="passwordGroup"
            label="Password"
            label-for="passwordInput"
          >
            <b-form-input
              id="passwordInput"
              type="password"
              v-model="password"
              required
            />
          </b-form-group>
          <b-button
            type="button"
            variant="primary"
            @click="login"
          >Login</b-button>
        </b-form>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data: function() {
    return {
      username: "",
      password: "",
      err: false,
      msg: ""
    };
  },
  methods: {
    login() {
      let _this = this;
      let data = {
        username: _this.username,
        password: _this.password
      };
      this.$axios
        .post("/users/login", data)
        .then(function(response) {
          if (response.data.success) {
            localStorage.setItem("id_token", response.data.token);
            localStorage.setItem("user", response.data.name);
            _this.$router.push("/");
            _this.err = false;
            _this.msg = "";
          } else {
            _this.err = true;
            _this.msg = response.data.msg;
          }
        })
        .catch();
    }
  }
};
</script>

<style>
</style>
