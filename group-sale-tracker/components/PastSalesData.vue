<template>
  <b-card no-body class="mb-1" v-if="transaction.length">
    <b-card-header header-tag="header" class="p-0 bg-white" role="tab">
      <b-button
        block
        v-b-toggle="'accordion-' + index"
        variant="link"
        class="text-left text-dark text-decoration-none d-flex align-items-center"
        ><span>{{categorizedTransactionTotal.amount | toPrice}} <small class="text-secondary">{{categorizedTransactionTotal.quantity}} items sold</small></span>
        <i class="fas fa-caret-down text-secondary ml-auto"></i
      ></b-button>
    </b-card-header>
    <b-collapse
      :id="`accordion-${index}`"
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body class="px-3 pb-3 pt-1">
        <div class="d-flex flex-wrap">
          <div
            class="align-items-center mr-3"
            v-for="(ctc, index) in categorizedTransactionCombined"
            :key="index"
            :class="ctc.amount > 0 ? 'd-flex' : 'd-none'"
          >
            <div
              class="category-color mr-2"
              :style="`background-color: ${categories[index].color}`"
            ></div>
            <div><span class="d-none app-print-inline">{{categories[index].name}}:</span> {{ ctc.amount | toPrice }} ({{ ctc.quantity }})</div>
          </div>
        </div>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'PastSalesData',
  props: ['index', 'transaction', 'categories'],
  computed: {
    categorizedTransactionCombined: function() {
      let combined = []
      for (var i = 0; i < this.categories.length; i++) {
        combined.push({ amount: 0, quantity: 0 })
      }
      this.transaction.forEach(t => {
        combined[t.category].amount += parseFloat(t.price)
        combined[t.category].quantity += 1
      })
      return combined
    },
    categorizedTransactionTotal: function(){
      let totalAmount = this.transaction.reduce((currentTotal, i) => {
        return currentTotal + parseFloat(i.price)
      }, 0)
      return {amount: totalAmount, quantity: this.transaction.length}
    }
  },
  filters: {
    toPrice: function(value) {
      return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
  }
}
</script>

<style scoped lang="scss">
.card::v-deep {
  .card-header {
    border-bottom: 0;
    border-radius: calc(0.25rem - 1px);
    button {
      border-radius: 3px;
      &.not-collapsed i {
        transform: rotate(180deg);
      }
    }
  }
  .card-body {
    .category-color {
      width: 1em;
      height: 1em;
      border-radius: 100%;
    }
  }
}
</style>
