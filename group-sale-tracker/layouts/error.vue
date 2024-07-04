<template>
  <div class="container text-center my-auto">
    <h1 class="display-1 text-muted">OOPS</h1>
    <p class="lead" v-if="error.statusCode === 404">That page does not exist.</p>
    <p class="lead" v-else>An error occurred.</p>
    <p>
      <nuxt-link class="btn btn-outline-secondary" to="/"
        >Back to Home</nuxt-link
      >
    </p>
    <p></p>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="scss" scoped>
.container {
  align-self: center;
}
</style>
