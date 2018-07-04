<template>
    <nuxt-link class="buttonComponent" 
      v-bind:class="[size ? 'buttonComponent--' + size : '', icon ? 'buttonComponent--i' : '', secondary ? 'buttonComponent--secondary' : '', white ? 'buttonComponent--white' : '']" 
      exact :to="btnUrl">
      {{ btnText }} 
      <i v-if="icon" v-bind:class="[icon ? 'buttonComponent__icon fas fa-' + icon : '']"></i>
    </nuxt-link>
</template>

<script>
export default {
  name: 'Button',
  props: {
    /**
    * The content for the Button
    */
    btnText: {
      type: String,
      default: 'Button'
    },
    btnUrl: {
      type: String,
      default: '#na'
    },
    /**
    * The size of the Button
    * `small, normal`.
    * This will create a custom class modifier 'buttonComponent__small'
    */
    size: {
      type: String,
      default: 'normal'
    },
    /**
    * Use this string to set an icon using font awesome 
    * Find the icon you wish to add here: https://fontawesome.com/icons?d=gallery
    */
    icon: {
      type: String,
      default: ''
    },
    /** 
     * Use this boolean to select the type of button (primary or secondary)
     */
    secondary: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "Button.scss";
</style>