<script>
  import {createClient} from '~/plugins/contentful.js'
  import CaseStudyFeatured from '~/components/CaseStudyFeatured/CaseStudyFeatured.vue'
  import TitleBlock from '~/components/TitleBlock/TitleBlock.vue'
  import CtaPanel from '~/components/CtaPanel/CtaPanel.vue'
  import Footer from '~/components/Footer/Footer.vue'  

  const client = createClient()

  export default {
    components: {
      TitleBlock,
      CaseStudyFeatured,
      CtaPanel,
      Footer
    },
    asyncData ({ env, params }) {
      return client.getEntries({
        'content_type': env.CTF_CASE_STUDY_TYPE_ID,
        order: '-sys.updatedAt'
      }).then(entries => {
        return {
          caseStudies: entries.items
        }
      })
    }
  }
</script>

<template>
  <div>
    <TitleBlock titleBlockContained titleBlockTitle="Case Studies" titleBlockPara="A selection of my recent work" />            
    <CaseStudyFeatured :itemTitle="caseStudies" />
    <CtaPanel />
    <Footer />
    <!-- <ul>
      <li :key="index" v-for="(caseStudy, index) in caseStudies">
        <h4><nuxt-link :to="`case-studies/${caseStudy.fields.slug}`" class="title">{{ caseStudy.fields.title }}</nuxt-link></h4>
        <p>{{ caseStudy.fields.date }}</p>
        <p>{{ caseStudy.fields.description }}</p>
      </li>
    </ul> -->
  </div>
</template>

