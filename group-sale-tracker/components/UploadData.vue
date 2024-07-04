<template>
  <form>
    <h2>Upload Data</h2>
    <label for="uploadData"
      >If you have an existing project saved, upload it here to continue where
      you left off.</label
    >
    <input @change="uploadData" id="uploadData" type="file" accept=".json" />
    <div class="alert alert-danger mt-3" v-if="uploadError">
      <strong>Error:</strong> {{ uploadError }}
    </div>
    <div class="alert alert-warning mt-3" v-if="currentTrackedSale">
      <strong>Warning:</strong> You have a current sale already being tracked.
      Creating a new sale will delete all currently tracked data. Please
      download your data before starting a new sale.
    </div>
  </form>
</template>

<script>
export default {
  name: 'UploadData',
  data: function() {
    return {
      uploadError: '',
      currentTrackedSale: false
    }
  },
  mounted: function() {
    if (localStorage.getItem('completedTransactions')) {
      this.currentTrackedSale = true
    }
  },
  methods: {
     uploadData: function() {
      var files = document.getElementById('uploadData').files
      if (files.length <= 0) {
        return false
      }

      var fr = new FileReader()

      fr.onload = e => {
        var result = JSON.parse(e.target.result)
        var formatted = JSON.stringify(result, null, 2)

        if (
          result.saleName &&
          result.categories &&
          result.completedTransactions
        ) {
          // Add items to localStorage
          localStorage.setItem('saleName', JSON.stringify(result.saleName))
          localStorage.setItem('categories', JSON.stringify(result.categories))
          localStorage.setItem(
            'completedTransactions',
            JSON.stringify(result.completedTransactions)
          )

          // Go to app
          this.uploadError = ''
          this.$bvModal.hide('modal-upload-data')
          this.$router.push('/app')
          if(this.$route.name === "app") this.$router.go()
        } else {
          this.uploadError =
            'The file uploaded does not have valid information. Please upload a file that was downloaded using this application'
        }
      }

      fr.readAsText(files.item(0))
    }
  }
}
</script>

<style></style>
