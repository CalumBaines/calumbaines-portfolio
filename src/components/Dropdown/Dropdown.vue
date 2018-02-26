<template>
  <ul class="dropdown">
    <li class="dropdown__label" v-on:click="clickedDropdown()" >Dropdown label</li>
    <ul class="dropdown__list">
      <li class="dropdown__item">
        <a class="dropdown__link" v-on:click="selectDropdown($event)" data-value="All">All</a>
      </li>
      <li class="dropdown__item">
        <a class="dropdown__link" v-on:click="selectDropdown($event)" data-value="Pizza">Pizza</a>
      </li>
      <li class="dropdown__item">
        <a class="dropdown__link" v-on:click="selectDropdown($event)" data-value="Burger">Burger</a>
      </li>
      <li class="dropdown__item">
        <a class="dropdown__link" v-on:click="selectDropdown($event)" data-value="Burrito">Burrito</a>
      </li>
    </ul>
  </ul>

</template>

<script>


export default {
  name: 'Dropdown',
  props: {
    contents: {
      type: Array,
    },
  },
  methods: {
      clickedDropdown: function() {
        console.log(this);
        this.$el.classList.toggle('dropdown__open');
      },
      selectDropdown: function() {
        const value = event.target.dataset.value
         const label = this.$el.querySelectorAll('.dropdown__label').innerHTML = "new text"
         console.log(label);
         label.innerHTML = "value";
        // this.$el.children.querySelectorAll('.dropdown__link')
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";

  @import "Dropdown.scss";
</style>