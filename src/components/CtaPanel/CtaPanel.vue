<template>
<section class="CtaPanel">
    <div class="CtaPanel__container">
        <TitleBlock white titleBlockTitle="Have a project you think I might be interested in?" />        
        <Button white btnText="Get in touch" btnUrl="/contact" size="large" href="#na"></Button>
        <Button white btnText="View my work" btnUrl="/case-studies" secondary size="large" href="#na"></Button>
    </div>
</section>
</template>

<script>
import TitleBlock from '~/components/TitleBlock/TitleBlock.vue'
import Button from '~/components/Button/Button.vue'


export default {
    name: 'CtaPanel',
    props: {
        /**
        * The content for the banner
        */
        item: {
            type: Array
        },
    },
    components: {
        TitleBlock,
        Button
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "CtaPanel.scss";
</style>