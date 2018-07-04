<template>
<div class="Services">
    <h3 class="Services__title">{{servicesTitle}}</h3>
    <span class="Services__tags">{{servicesTags}}</span>
</div>
</template>

<script>

export default {
    name: 'Services',
    props: {
        servicesTitle: {
        type: String,
        default: 'Title'
        },
        servicesTags: {
        type: String,
        default: 'Title'
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "Services.scss";
</style>