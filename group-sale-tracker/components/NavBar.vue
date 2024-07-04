<template>
  <nav>
    <b-navbar toggleable="md" variant="light">
      <b-navbar-brand to="/" class="d-flex align-items-center">
        <img
          src="~/assets/group-sale-tracker-logo.png"
          alt="Group Sale Tracker Logo"
          class="logo mr-2 rounded border"
        />
        Group Sale Tracker
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item v-show="appHasData" to="/app">App</b-nav-item>
          <b-nav-item to="/new-sale">New Group Sale</b-nav-item>
          <b-nav-item v-b-modal.modal-upload-data>Upload Data</b-nav-item>
        </b-navbar-nav>
        <b-modal
          id="modal-upload-data"
          hide-header
          hide-footer
        >
          <UploadData />
        </b-modal>
      </b-collapse>
    </b-navbar>
    <div id="container"></div>
    <div class="alert alert-danger m-0 rounded-0 text-center">
      This site has been archived. It still works, but I will no longer be making updates or fixes.
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data: function() {
    return {
      appHasData: false
    }
  },
  methods: {
    appDataExists: function() {
      if (
        localStorage.saleName &&
        localStorage.categories &&
        localStorage.completedTransactions
      ) {
        this.appHasData = true
      } else {
        this.appHasData = false
      }
    }
  },
  mounted: function() {
    this.appDataExists()
  },
  watch: {
    $route(to, from) {
      this.appDataExists()
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  .logo {
    height: 30px;
    width: 30px;
  }
  .navbar-light .navbar-nav .nuxt-link-exact-active {
    color: var(--dark);
    border-bottom: 2px solid var(--secondary);
    padding-bottom: 6px;
  }
}
</style>
