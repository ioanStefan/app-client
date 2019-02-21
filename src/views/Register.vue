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
    <b-form>
      <b-form-group
        id="firstNameGroup"
        label="First Name"
        label-for="firstNameInput"
      >
        <b-form-input
          id="firstNameInput"
          type="text"
          v-model="firstName"
          required
          placeholder="First Name"
        />
      </b-form-group>

      <b-form-group
        id="lastNameGroup"
        label="Last Name"
        label-for="lastNameInput"
      >
        <b-form-input
          id="lastNameInput"
          type="text"
          v-model="lastName"
          required
          placeholder="Last Name"
        />
      </b-form-group>

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
          placeholder="max.muller"
        />
      </b-form-group>

      <b-form-group
        id="emailGroup"
        label="Email"
        label-for="emailInput"
      >
        <b-form-input
          id="emailInput"
          type="email"
          v-model="email"
          required
          placeholder="ex. user@gmail.com"
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
          placeholder=""
        />
      </b-form-group>

      <b-button
        type="button"
        variant="primary"
        @click="register"
      >Register</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      err: false,
      msg: ""
    };
  },
  methods: {
    register() {
      let user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        username: this.username,
        password: this.password
      };

      let _this = this;

      this.$axios
        .post("/users/register", { user: user })
        .then(function(response) {
          if (response.data.success) {
            _this.firstName = "";
            (_this.lastName = ""),
              (_this.email = ""),
              (_this.username = ""),
              (_this.password = "");
            _this.msg = response.data.msg;
            _this.err = false;
          } else {
            _this.msg = response.data.msg;
            _this.err = true;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
