<template>
    <a class="buttonComponent" v-bind:class="[size ? 'buttonComponent--' + size : '']" href="#na">{{ btnText }}</a>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    /**
    * The content for the button.
    */
    btnText: {
      type: String,
      default: 'Button'
    },
    /**
    * The size of the button
    * `small, normal, large`.
    * This will create a custom class modifier 'buttonComponent__small'.
    */
    size: {
      type: String,
      default: 'normal'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // @import "~/variables";

  .buttonComponent {
    color: blue;
    display: inline-block;
    border: 1px solid blue;
    padding: 8px 16px;
    font-size: 14px;
    text-decoration: none;
    &:hover {
      background-color: blue;
      color: white;
    }
    &.Red {
      background-color: red;
    }
    &--large {
      font-size: 16px;
      padding: 16px 24px;
    }
    &--small {
      font-size: 12px;
      padding: 4px 8px;
    }
  }
</style>