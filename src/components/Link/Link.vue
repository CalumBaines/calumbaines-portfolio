<template>
  <a href="#na" class="link">Link example</a>

</template>

<script>


export default {
  name: 'Link',
  props: {
    contents: {
      type: Array,
    },
  },
  methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";

  @import "Link.scss";
</style>