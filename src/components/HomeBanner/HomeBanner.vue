<template>
<section class="HomeBanner">
    <div class="HomeBanner__container">
        <h1 class="HomeBanner__title">{{bannerTitle}}</h1>
        <Workflow/>
    </div>
</section>
</template>

<script>
import Workflow from '~/components/Workflow/Workflow.vue'

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
    components: {
        Workflow
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "HomeBanner.scss";
</style>