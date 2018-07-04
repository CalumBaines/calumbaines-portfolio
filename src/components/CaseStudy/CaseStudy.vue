<template>
<nuxt-link :to="`case-studies/${caseStudySlug}`" class="CaseStudy">
    <div class="CaseStudy__wrap">
        <span class="CaseStudy__label">Case Study</span>
        <div class="CaseStudy__content">
            <!-- <img class="CaseStudy__logo" src="" /> -->
            <p class="CaseStudy__brand">{{caseStudyBrand}}</p>
            <h3 class="CaseStudy__title">{{caseStudyTitle}}</h3>
        </div>
    </div>
    <img class="CaseStudy__bg" :src="caseStudyThumb" />
</nuxt-link>
</template>

<script>

export default {
    name: 'CaseStudy',
    props: {
        caseStudyTitle: {
            type: String,
            default: 'Title'
        },
        caseStudyBrand: {
            type: String,
            default: 'Title'
        },
        caseStudySlug: {
            type: String,
            default: 'Title'
        },
        caseStudyThumb: {
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
  @import "CaseStudy.scss";
</style>