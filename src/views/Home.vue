<template>
  <div class="home">
    <div
      class="error"
      v-if="err"
    >{{msg}}</div>
    <b-container>
      <b-table
        striped
        hover
        :items="projects"
      />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data: function() {
    return {
      projects: [],
      err: false,
      msg: ""
    };
  },
  components: {},
  created() {
    let _this = this;
    this.$axios
      .get("/projects")
      .then(function(response) {
        if (response.data.success) _this.projects = response.data.projects;
        else {
          _this.err = true;
          _this.msg = response.data.msg;
        }
      })
      .catch(function(error) {});
  }
};
</script>
