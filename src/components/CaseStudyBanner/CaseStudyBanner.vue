<template>
<section class="CaseStudyBanner">
    <div class="CaseStudyBanner__imageWrap">
        <img class="CaseStudyBanner__img" :src="caseStudyBanner" />   
    </div>
    <div class="CaseStudyBanner__content" v-bind:style="{ 'background-image': 'linear-gradient(-180deg, transparent 0%, ' + caseStudyColour + ' 30%, ' + caseStudyColour + ' 100%)' }" style="background-image: linear-gradient(-180deg, transparent 0%, #02020C 30%, #00000A 100%);">
        <div class="CaseStudyBanner__wrap">
            <span class="CaseStudyBanner__label">Case Study</span>
            <h1 class="CaseStudyBanner__title">{{caseStudyTitle}}</h1>
            <!-- <div class="CaseStudyBanner__details">
                <img class="CaseStudyBanner__logo" :src="caseStudyLogo" />                                
                <div class="CaseStudyBanner__para">
                    <vue-markdown>{{caseStudyDescription}}</vue-markdown>
                </div>
            </div> -->
        </div>
    </div>                             
</section>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
    name: 'CaseStudyBanner',
    props: {
        caseStudyDescription: {
            type: String,
            default: 'Add a description in contentful for it to be added here'
        },
        caseStudyTitle: {
            type: String,
            default: 'Add a title in contentful for it to be added here'
        },
        caseStudyLogo: {
            type: String,
            default: 'Logo missing'            
        },
        caseStudyBanner: {
            type: String
        },
        caseStudyColour: {
            type: String,
            default: '#000000'
        },
    },
    components: {
        VueMarkdown
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "CaseStudyBanner.scss";
</style>