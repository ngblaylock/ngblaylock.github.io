<template>
  <div>
    <div class="card" v-if="showSaleInfo">
      <div class="d-flex justify-content-between gst-btn-group app-print-hide">
        <button class="btn btn-dark btn-sm" @click="showSaleInfo = false">
          <i class="fas fa-eye-slash"></i> Hide Sale Info
        </button>
        <button class="btn btn-dark btn-sm" @click="downloadData">
          <i class="fas fa-file-download"></i> Download Data
        </button>
        <button class="btn btn-dark btn-sm" v-b-modal.modal-delete-all-data>
          <i class="fas fa-trash"></i> Delete Sale
        </button>
      </div>
      <div class="card-header bg-dark text-white text-center">
        <p class="h4">
          <span class="d-none app-print-inline">{{saleName}} </span>Total Sales
        </p>
        <p class="h1">{{ totalSales | toPrice }}</p>
      </div>
      <div class="card-body bg-light pb-0">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="d-flex mb-3 align-items-center"
        >
          <div
            class="mr-2 rounded-circle"
            :style="`background-color: ${category.color}`"
            style="width: 3em; height: 3em;"
          ></div>
          <div>
            <p class="mb-0" style="font-size: 1.8em;">
              {{ categorizedTransactionTotals[index].amount | toPrice }}
              <small class="text-muted"
                >{{ categorizedTransactionTotals[index].quantity }} items
                sold</small
              >
            </p>
            <p class="mb-0">
              <strong>{{ category.name }}</strong>
            </p>
          </div>
        </div>
      </div>
      <div class="card-body bg-light border-top">
        <h2>Past Transactions</h2>
        <div role="tablist">
          <PastSalesData
            v-for="(transaction, index) in reversedCompletedTransactions"
            :key="index"
            :index="index"
            :transaction="transaction"
            :categories="categories"
          />
        </div>
      </div>
      <b-modal
        id="modal-delete-all-data"
        hide-header
        ok-title="Yes, Delete"
        ok-variant="danger"
        @ok="deleteAllData"
      >
        <p class="mt-3">
          Are you sure you want to delete your data? Make sure that you download
          any data you want to keep in the future.
        </p>
      </b-modal>
    </div>
    <div class="card" v-else>
      <div class="card-body text-center">
        <i class="fas fa-eye-slash fa-5x mb-3 text-muted"></i>
        <p>
          <button class="btn btn-dark" @click="showSaleInfo = true">
            <i class="fas fa-eye"></i> Show Sale Info
          </button>
        </p>
        <p class="small text-muted mb-0">
          Your sale information have been hidden.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  name: 'TotalSales',
  props: ['categories', 'completedTransactions', 'saleName'],
  data: function() {
    return {
      showSaleInfo: true
    }
  },
  computed: {
    categorizedTransactionTotals: function() {
      let transformed = []
      for (var i = 0; i < this.categories.length; i++) {
        transformed.push({ amount: 0, quantity: 0 })
      }
      this.completedTransactions.forEach(transaction => {
        transaction.forEach(t => {
          transformed[t.category].amount += parseFloat(t.price)
          transformed[t.category].quantity++
        })
      })
      return transformed
    },
    totalSales: function() {
      return this.categorizedTransactionTotals.reduce((currentTotal, i) => {
        return currentTotal + i.amount
      }, 0)
    },
    reversedCompletedTransactions: function() {
      return this.completedTransactions.reverse()
    }
  },
  methods: {
    slugify: function(string) {
      const a =
        'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
      const b =
        'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
      const p = new RegExp(a.split('').join('|'), 'g')

      return string
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
    },
    downloadData: function() {
      let instructions =
        'Go to https://groupsaletracker.nathanblaylock.com and select Upload Data from the main navigation bar. Select this file from your folder. You should automatically be re-directed to the main app.'
      let now = new Date()
      let version = '0'
      let date = now.toString()
      let nowFormatted = moment(now).format('YYMMDD_HHmmss');
      let saleName = JSON.parse(localStorage.getItem('saleName'))
      let categories = JSON.parse(localStorage.getItem('categories'))
      let completedTransactions = JSON.parse(
        localStorage.getItem('completedTransactions')
      )
      let slugName = `${this.slugify(saleName)}-${nowFormatted}`

      let downloadObj = {
        instructions,
        date,
        version,
        saleName,
        categories,
        completedTransactions
      }

      let data =
        'text/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(downloadObj))
      let a = document.createElement('a')
      a.href = 'data:' + data
      a.download = `${slugName}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    },
    deleteAllData: function() {
      localStorage.removeItem('saleName')
      localStorage.removeItem('categories')
      localStorage.removeItem('completedTransactions')
      this.$router.go(0)
    }
  },
  filters: {
    toPrice: function(value) {
      return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    },
    reverse: function(items) {
      return items.slice().reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
.gst-btn-group {
  button {
    border-radius: 0;
    flex: 1 1 auto;
    &:first-child {
      border-top-left-radius: 0.2rem;
    }
    &:last-child {
      border-top-right-radius: 0.2rem;
    }
  }
}
</style>
