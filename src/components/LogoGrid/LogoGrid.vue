<template>
<section class="LogoGrid">
    <div class="LogoGrid__container">
        <div class="LogoGrid__item">
            <img class="LogoGrid__logo" src="/img/logo-grid/ruddocks-logo.png" />            
        </div>
        <div class="LogoGrid__item">
            <img class="LogoGrid__logo" src="/img/logo-grid/kingspan-logo.png" />            
        </div>
        <div class="LogoGrid__item">
            <img class="LogoGrid__logo" src="/img/logo-grid/interled-logo.png" />            
        </div>
        <div class="LogoGrid__item">
            <img class="LogoGrid__logo" src="/img/logo-grid/residence-one-logo.png" />            
        </div>
        <div class="LogoGrid__item">
            <img class="LogoGrid__logo" src="/img/logo-grid/efficiency-north-logo.png" />            
        </div>
        <div class="LogoGrid__item">
            <img class="LogoGrid__logo" src="/img/logo-grid/nhs-logo.png" />            
        </div>
        <div class="LogoGrid__item">
            <img class="LogoGrid__logo" src="/img/logo-grid/rape-crisis-logo.png" />            
        </div>
        <div class="LogoGrid__item">
            <img class="LogoGrid__logo" src="/img/logo-grid/joriside-logo.png" />            
        </div>
    </div>
</section>
</template>

<script>

export default {
    name: 'HomeBanner',
    props: {
        /**
        * The content for the banner
        */
        bannerTitle: {
        type: String,
        default: 'Title'
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "LogoGrid.scss";
</style>