<template>
  <label class="radio">{{ radioText }}
		<input class="radio__input" type="checkbox" v-bind:disabled="disabled" v-bind:checked="checked"/>
		<div class="radio__indicator"></div>
	</label>
</template>

<script>


export default {
  name: 'RadioButton',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    radioText: {
      type: String,
      default: 'Radio'
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";

  @import "RadioButton.scss";
</style>