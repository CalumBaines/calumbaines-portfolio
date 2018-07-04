<template>
<a href="#na" class="Blog">
    <div class="Blog__thumbnail">
        <img class="Blog__img" src="/img/case-studies/kingspan/kingspan-thumb.png" />            
    </div>
    <div class="Blog__content">
        <span class="Blog__label">Article</span>
        <h3 class="Blog__title">Experimenting with CSS and grid and layouts</h3>
        <p class="Blog__para">Experimenting with CSS grid and how it can be used in production and still support IE11</p>
    </div>
</a>
</template>

<script>

export default {
    name: 'Blog',
    props: {
        caseStudyTitle: {
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
  @import "Blog.scss";
</style>