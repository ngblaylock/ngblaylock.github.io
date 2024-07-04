<template>
  <footer class="bg-secondary text-white p-3">
    <div class="d-flex justify-content-center flex-wrap">
      <div class="p-2">
        <img
          src="https://nathanblaylock.com/images/logos/logo-white-nathan-blaylock-media.svg"
          style="width: 2em;"
        />
      </div>
      <div class="p-2">
        <a href="https://nathanblaylock.com" target="_blank"
          ><i class="fas fa-copyright"></i> Nathan Blaylock Media,
          {{ new Date().getFullYear() }}</a
        >
      </div>
      <div class="p-2">
        <nuxt-link to="/feedback"
          ><i class="far fa-comment"></i> Feedback & Bugs</nuxt-link
        >
      </div>
      <div class="p-2">
        <a href="https://www.paypal.me/NathanBlaylock" target="_blank"
          ><i class="fas fa-donate"></i> Donate</a
        >
      </div>
      <div class="p-2">
        <a href="https://nathanblaylock.com/privacy" target="_blank"
          ><i class="fas fa-shield-alt"></i> Privacy</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>

<style lang="scss" scoped>
a {
  color: var(--light);
  padding: 15px;
  border-radius: 6px;
  transition: all 0.2s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    text-decoration: none;
  }
}
</style>
