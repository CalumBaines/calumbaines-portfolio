<template>
<section class="CaseStudyFeatured"
v-bind:class="[caseStudyBackground ? 'CaseStudyFeatured--bg' : '']" >
    <div class="CaseStudyFeatured__container">
        <CaseStudy :key="index" v-for="(item, index) in itemTitle" :caseStudySlug="item.fields.slug" :caseStudyThumb="item.fields.thumbnail.fields.file.url" :caseStudyBrand="item.fields.title" :caseStudyTitle="item.fields.subheading"/>
    </div>
</section>
</template>

<script>
import CaseStudy from '~/components/CaseStudy/CaseStudy.vue'

export default {
    name: 'CaseStudyFeatured',
    props: {
        /**
        * The content for the banner
        */
        itemTitle: {
            type: Array
        },
        caseStudyBackground: {
            type: Boolean,
            default: false
        }
    },
    components: {
        CaseStudy
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "CaseStudyFeatured.scss";
</style>