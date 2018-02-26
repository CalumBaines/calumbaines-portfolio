<template>
<div class="breadcrumb">
    <div class="breadcrumb__item" :key="index" v-for="(item, index) in breadcrumb">
      <a href={item.url} class="breadcrumb__text">{{ item.title }}</a>
      <span class="breadcrumb__break">/</span>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Breadcrumb',
  props: {
    breadcrumb: {
      type: Array,
      default: [
        {
          title: 'Homepage',
          url: '/',
        },
        {
          title: 'Page One',
          url: '#na',
        },
        {
          title: 'Page Two',
          url: '#na',
        },
      ],
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";

  @import "Breadcrumb.scss";
</style>