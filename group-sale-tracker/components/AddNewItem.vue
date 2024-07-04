<template>
  <form @submit.prevent="addItem">
    <div class="d-flex align-items-center mt-3 category-select">
      <div class="category-select">
        <button
          class="btn btn-secondary rounded-circle mx-2"
          @click.stop.prevent="showCategoryDropdown = !showCategoryDropdown"
          @keydown.esc="showCategoryDropdown = false"
          :style="[
            newItem.category !== ''
              ? {
                  backgroundColor: categories[newItem.category].color,
                  borderColor: categories[newItem.category].color
                }
              : null
          ]"
        >
          <i class="fas fa-plus"></i>
        </button>
        <div
          class="category-options rounded"
          v-show="showCategoryDropdown"
          @click.stop
        >
          <button
            class="category-option"
            :style="`background-color: ${category.color}`"
            v-for="(category, index) in categories"
            :key="index"
            @click.prevent="addCategory(index)"
          ></button>
        </div>
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text rounded-left">$</span>
        </div>
        <input
          type="number"
          class="form-control rounded-right"
          aria-label="Amount"
          v-model="newItem.price"
          step="0.01"
          required
        />
      </div>
      <button class="btn btn-link text-muted" @click.prevent="clearInput">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <p class="text-right">
      <button class="btn btn-outline-secondary btn-block mt-3" type="submit"><i class="fas fa-plus"></i> Add Item</button>
    </p>
  </form>
</template>

<script>
export default {
  name: 'AddNewItem',
  props: ['categories'],
  data: function() {
    return {
      activeColor: 'red',
      newItem: {
        category: '0',
        price: ''
      },
      showCategoryDropdown: false
    }
  },
  methods: {
    clearInput: function() {
      this.newItem.category = '0'
      this.newItem.price = ''
    },
    addCategory: function(category) {
      this.newItem.category = category
    },
    addItem: function(){
      this.$emit('add-item', this.newItem)
      this.clearInput();
    }
  },
  mounted: function() {
    let self = this
    document.body.addEventListener('click', function(e) {
      self.showCategoryDropdown = false
    })
    document.body.addEventListener('keyup', function(e) {
      if(e.key == "Escape"){
        self.showCategoryDropdown = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.category-select {
  .category-options {
    position: absolute;
    max-width: 100px;
    background-color: white;
    padding: 0.3em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 1px solid #ced4da;
    margin-top: 5px;
    margin-left: 5px;
    button{
      border: 2px solid #0000001c;
    }
  }
}
</style>
