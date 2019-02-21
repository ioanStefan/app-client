<template>
  <div id="app">
    <div id="nav">
      <span
        v-if="user"
        style="padding-right: 50px"
      >{{user}}</span>
      <router-link to="/">Projects</router-link> |
      <router-link
        v-if="!user"
        to="/login"
      >Login</router-link>
      <router-link
        v-else
        to="/cproject"
      >Create project</router-link>
      |
      <router-link
        v-if="!user"
        to="/register"
      >Register</router-link>
      <router-link
        v-else
        to="/profile"
      >Profile</router-link>
      |
      <b-button
        class="logout-btn"
        variant="link"
        v-if="user"
        @click="logout"
      >Logout</b-button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      user: false
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("user");

      this.$router.push("/");
      location.reload();
    }
  },
  created() {
    let _this = this;

    let interval = setInterval(() => {
      if (localStorage.getItem("user")) {
        _this.user = localStorage.getItem("user");
        clearInterval(interval);
      }
    }, 500);
  },
  destroyed() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("user");
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: right;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.logout-btn {
  font-weight: bold !important;
  color: #2c3e50 !important;
}
</style>
