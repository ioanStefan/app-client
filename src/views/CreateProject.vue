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
        id="nameGroup"
        label="Project"
        label-for="nameInput"
      >
        <b-form-input
          id="nameInput"
          type="text"
          v-model="name"
          required
        />
      </b-form-group>

      <b-form-group
        id="companyGroup"
        label="Company"
        label-for="companyInput"
      >
        <b-form-input
          id="companyInput"
          type="text"
          v-model="company"
          required
        />
      </b-form-group>

      <b-form-group
        id="managerGroup"
        label="Manager"
        label-for="managerInput"
      >
        <b-form-input
          id="managerInput"
          type="text"
          v-model="manager"
          required
        />
      </b-form-group>

      <b-form-group
        id="startdateGroup"
        label="Start Date"
        label-for="startDateInput"
      >
        <b-form-input
          id="startDateInput"
          type="date"
          v-model="startDate"
          required
        />
      </b-form-group>

      <b-form-group
        id="dueDateGroup"
        label="Due Date"
        label-for="dueDateInput"
      >
        <b-form-input
          id="dueDateInput"
          type="date"
          v-model="dueDate"
          required
          placeholder=""
        />
      </b-form-group>

      <b-button
        type="button"
        variant="primary"
        @click="create"
      >Create</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data: function() {
    return {
      name: "",
      company: "",
      manager: "",
      startDate: "",
      dueDate: "",
      err: false,
      msg: ""
    };
  },
  methods: {
    create() {
      let project = {
        name: this.name,
        company: this.company,
        manager: this.manager,
        startDate: this.startDate,
        dueDate: this.dueDate
      };

      let _this = this;

      this.$axios
        .post("/projects/create", { project: project })
        .then(function(response) {
          if (response.data.success) {
            _this.name = "";
            (_this.company = ""),
              (_this.manager = ""),
              (_this.startDate = ""),
              (_this.dueDate = "");
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
