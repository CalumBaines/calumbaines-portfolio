<template>
<section class="ServicesFeatured">
    <div class="ServicesFeatured__container">
        <TitleBlock titleBlockLabel="Services" titleBlockTitle="What I offer and how I can help your project" />
        <Services :key="index" v-for="(item, index) in item" :href="item.fields.slug" :servicesTags="item.fields.description" :servicesTitle="item.fields.title"/>
    </div>
</section>
</template>

<script>
import Services from '~/components/Services/Services.vue'
import TitleBlock from '~/components/TitleBlock/TitleBlock.vue'

export default {
    name: 'ServicesFeatured',
    props: {
        /**
        * The content for the banner
        */
        item: {
            type: Array
        },
    },
    components: {
        Services,
        TitleBlock
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "ServicesFeatured.scss";
</style>