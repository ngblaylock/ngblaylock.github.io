<template>
  <div class="container my-4" v-if="categories[0]">
    <div class="row">
      <div class="col-lg-7 col-md-6 app-print-hide">
        <h1>{{ saleName }}</h1>
        <h2 class="h3 mt-3">This Transaction</h2>
        <div
          class="transaction"
          v-for="(transaction, index) in thisTransaction"
          :key="index"
        >
          <div
            class="color"
            :style="
              `background-color: ${categories[transaction.category].color};`
            "
          ></div>
          ${{ Number.parseFloat(transaction.price).toFixed(2) }}
          <div class="ml-auto p-3">
            <button
              class="btn btn-link text-danger"
              @click="thisTransaction.splice(index, 1)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>

        <AddNewItem
          @add-item="thisTransaction.push({ ...$event })"
          :categories="categories"
        />
        <hr class="double-line" />
        <p class="h2 text-right">
          <small class="text-secondary">Transaction Total:</small> {{
            transactionTotal | toPrice
          }}
        </p>
        <div class="text-right" v-show="thisTransaction.length > 0">
          <button class="btn btn-dark" @click="updateCompletedTransactions">
            Save and Clear
          </button>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 app-print-full">
        <TotalSales
          :saleName="saleName"
          :categories="categories"
          :completedTransactions="completedTransactions"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainApp',
  head() {
    return {
      title: 'App | ',
    }
  },
  data: function() {
    return {
      saleName: '',
      thisTransaction: [],
      completedTransactions: [],
      categories: []
    }
  },
  methods: {
    updateCompletedTransactions: function() {
      if (this.completedTransactions.push(this.thisTransaction)) {
        this.thisTransaction = []
        localStorage.setItem(
          'completedTransactions',
          JSON.stringify(this.completedTransactions)
        )
      }
    }
  },
  computed: {
    transactionTotal: function() {
      return this.thisTransaction.reduce((currentTotal, transaction) => {
        return currentTotal + parseFloat(transaction.price)
      }, 0)
    }
  },
  mounted: function() {
    if (localStorage.completedTransactions) {
      this.completedTransactions = JSON.parse(
        localStorage.getItem('completedTransactions')
      )
    }
    if (localStorage.categories) {
      this.categories = JSON.parse(localStorage.getItem('categories'))
    } else {
      this.$router.push('/new-sale')
    }
    if (localStorage.saleName) {
      this.saleName = JSON.parse(localStorage.getItem('saleName'))
    }
  },
  filters: {
    toPrice: function(value) {
      return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  }
}
</script>

<style lang="scss" scoped>
.transaction {
  font-size: 18px;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background-color: var(--light);
  }
  .color {
    width: 32px;
    height: 32px;
    border-radius: 32px;
    margin: 12px;
  }
}
hr.double-line {
  border-top: 3px double var(--secondary);
}
</style>

<style lang="scss">
@import "~assets/app-print";

.category-select {
  .dropdown-toggle-no-caret {
    border-radius: 20px;
  }
  .category-option {
    display: inline-block;
    width: 32px;
    height: 32px;
    background-color: green;
    margin: 0.25em;
    border-radius: 32px;
  }
}
</style>
