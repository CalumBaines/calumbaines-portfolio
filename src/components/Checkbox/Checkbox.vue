<template>
  <label class="checkbox">{{ checkboxText }}
		<input class="checkbox__input" type="checkbox" v-bind:disabled="disabled" v-bind:checked="checked"/>
		<div class="checkbox__indicator"></div>
	</label>
</template>

<script>


export default {
  name: 'Checkbox',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checkboxText: {
      type: String,
      default: 'Checkbox'
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";

  @import "Checkbox.scss";
</style>