<template>
  <div>
    <b-container>
      <b-list-group>
        <b-list-group-item>First Name - {{profile.firstName}}</b-list-group-item>
        <b-list-group-item>Last Name - {{profile.lastName}}</b-list-group-item>
        <b-list-group-item>Email - {{profile.email}}</b-list-group-item>
        <b-list-group-item>Username- {{profile.username}}</b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      profile: {}
    };
  },
  created() {
    let _this = this;

    this.$axios
      .get("/users/profile")
      .then(function(response) {
        _this.profile = reponse.data.profile;
      })
      .catch(function(err) {});
  }
};
</script>

<style>
</style>
