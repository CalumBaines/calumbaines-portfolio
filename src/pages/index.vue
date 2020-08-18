
<script>
  import {createClient} from '~/plugins/contentful.js'
  import HomeBanner from '~/components/HomeBanner/HomeBanner.vue'
  import CaseStudyFeatured from '~/components/CaseStudyFeatured/CaseStudyFeatured.vue'
  import LogoGrid from '~/components/LogoGrid/LogoGrid.vue'
  import ServicesFeatured from '~/components/ServicesFeatured/ServicesFeatured.vue'
  import BlogFeatured from '~/components/BlogFeatured/BlogFeatured.vue'
  import CtaPanel from '~/components/CtaPanel/CtaPanel.vue'
  import Footer from '~/components/Footer/Footer.vue'
  const client = createClient()

  export default {
    components: {
      HomeBanner,
      CaseStudyFeatured,
      LogoGrid,
      ServicesFeatured,
      BlogFeatured,
      CtaPanel,
      Footer
    },
    layout: 'home',
    asyncData ({env, params}) {
      return Promise.all([
        client.getEntries({
          'content_type': env.CTF_HOMEPAGE_TYPE_ID,
        })
      ]).then(([entries]) => {
        return {
          homepage: entries.items[0],
        }
      }).catch(console.error)
    },
}

</script>

<template>
  <div>
    <HomeBanner v-bind:bannerTitle="homepage.fields.title" />
    <CaseStudyFeatured  caseStudyBackground :itemTitle="homepage.fields.caseStudySpotlights"/>
    <LogoGrid/>
    <ServicesFeatured :item="homepage.fields.servicesSpotlights"/>
    <!-- <BlogFeatured :item="homepage.fields.blogSpotlights"/> -->
    <CtaPanel />
    <Footer />
  </div>
</template>
