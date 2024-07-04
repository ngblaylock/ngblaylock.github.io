<template>
  <div id="page-content">
    <div class="alert alert-warning text-center mb-0 rounded-0" v-if="isIE"><i class="fas fa-exclamation-triangle"></i> This app requires a modern browser. If you continue to use Internet Explorer, many features will not work correctly.</div>
    <NavBar />
    <main>
      <nuxt />
    </main>
    <FooterBar />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data: function() {
    return {
      isIE: false
    }
  },
  methods: {
    detectIE: function() {
      var ua = window.navigator.userAgent

      var msie = ua.indexOf('MSIE ')
      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
      }

      var trident = ua.indexOf('Trident/')
      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:')
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
      }

      // other browser
      return false
    }
  },
  mounted: function() {
    if (this.detectIE()) {
      this.isIE = true
    }
  }
}
</script>

<style lang="scss">
#page-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }
  .container {
    max-width: 1170px;
  }
}
</style>
