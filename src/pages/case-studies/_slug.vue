<script>
  import VueMarkdown from 'vue-markdown'
  import {createClient} from '~/plugins/contentful.js'
  import CaseStudyBanner from '~/components/CaseStudyBanner/CaseStudyBanner.vue'  
  import CaseStudyFeatured from '~/components/CaseStudyFeatured/CaseStudyFeatured.vue'  
  import ContentBlock from '~/components/ContentBlock/ContentBlock.vue'  
  import Footer from '~/components/Footer/Footer.vue'  
  import CtaPanel from '~/components/CtaPanel/CtaPanel.vue'  
  import ImageBlock from '~/components/ImageBlock/ImageBlock.vue'  
  import TitleBlock from '~/components/TitleBlock/TitleBlock.vue'  
  const client = createClient()

  export default {
    components: {
      CaseStudyBanner,
      CtaPanel,
      Footer,
      ContentBlock,
      ImageBlock,
      CaseStudyFeatured,
      TitleBlock
    },
    layout: 'case-study',
      asyncData ({env, params}) {
        return Promise.all([
          client.getEntries({
            'content_type': env.CTF_CASE_STUDY_TYPE_ID,
            'fields.slug': params.slug,
          })
        ]).then(([entries]) => {
          return {
            caseStudy: entries.items[0],
          }
        }).catch(console.error)
      },
  }
</script>

<template>
  <div>
    <CaseStudyBanner v-if="caseStudy.fields.featuredImage.fields.file.url" :caseStudyBanner="caseStudy.fields.featuredImage.fields.file.url" :caseStudyTitle="caseStudy.fields.subheading" :caseStudyLogo="caseStudy.fields.logo.fields.file.url" :caseStudyDescription="caseStudy.fields.description" :caseStudyColour="caseStudy.fields.colour"/>
    <ContentBlock v-if="caseStudy.fields.overview" contentBlockTitle="An Overview" :contentBlockPara="caseStudy.fields.overview" :caseStudyLink="caseStudy.fields.websiteUrl" />
    <ImageBlock v-if="caseStudy.fields.overviewImages" :ImageItems="caseStudy.fields.overviewImages" />    
    <ContentBlock v-if="caseStudy.fields.challenge" contentBlockTitle="The Challenge" :contentBlockPara="caseStudy.fields.challenge" />
    <ImageBlock v-if="caseStudy.fields.challengeImages" :ImageItems="caseStudy.fields.challengeImages" />        
    <ContentBlock v-if="caseStudy.fields.whatWeDid" contentBlockTitle="What We Did" :contentBlockPara="caseStudy.fields.whatWeDid" />
    <ImageBlock v-if="caseStudy.fields.whatWeDidImages" :ImageItems="caseStudy.fields.whatWeDidImages" />        
    <ContentBlock v-if="caseStudy.fields.outcome" contentBlockTitle="The Outcome" :contentBlockPara="caseStudy.fields.outcome" />
    <ImageBlock v-if="caseStudy.fields.outcomeImages" :ImageItems="caseStudy.fields.outcomeImages" />        
    <!-- <div class="RelatedContent Background--lightGrey">
      <TitleBlock titleBlockContained titleBlockLabel="Case Studies" titleBlockTitle="Some of the other projects I have been working on." />    
      <CaseStudyFeatured :itemTitle="caseStudy.fields.relatedCaseStudies"/>
    </div> -->
    <CtaPanel/>
    <Footer/>
  </div>
</template>


<style>


</style>
