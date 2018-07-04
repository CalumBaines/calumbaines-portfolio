<template>
    <section class="ContentBlock">
        <h2 class="ContentBlock__title">{{contentBlockTitle}}</h2>
        <div class="ContentBlock__content">
            <vue-markdown>{{contentBlockPara}}</vue-markdown>
            <!-- <p class="ContentBlock__para">{{contentBlockPara}}</p> -->
            <a v-if="caseStudyLink" :href="caseStudyLink" >visit the live site <i class="fas fa-external-link-alt"></i></a>
        </div>
    </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
    name: 'ContentBlock',
    props: {
        contentBlockTitle: {
            type: String,
            default: 'Title'
        },
        contentBlockPara: {
            type: String,
            default: 'Content'
        },
        caseStudyLink: {
            type: String,
            default: ''
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
  @import "ContentBlock.scss";
</style>