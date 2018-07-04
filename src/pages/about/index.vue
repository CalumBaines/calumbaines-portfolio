
<script>
  import {createClient} from '~/plugins/contentful.js'
  import TitleBlock from '~/components/TitleBlock/TitleBlock.vue'
  import QuoteBlock from '~/components/QuoteBlock/QuoteBlock.vue'
  import ImageBlock from '~/components/ImageBlock/ImageBlock.vue'
  import ContentBlock from '~/components/ContentBlock/ContentBlock.vue'
  import ServicesFeatured from '~/components/ServicesFeatured/ServicesFeatured.vue'
  import CtaPanel from '~/components/CtaPanel/CtaPanel.vue'
  import Footer from '~/components/Footer/Footer.vue'  
  import Download from '~/components/Download/Download.vue'  
  

  const client = createClient()

  export default {
    components: {
      TitleBlock,
      QuoteBlock,
      ImageBlock,
      ContentBlock,
      ServicesFeatured,
      CtaPanel,
      Footer,
      Download
    },
    asyncData ({env, params}) {
      return Promise.all([
        client.getEntries({
          'content_type': env.CTF_ABOUT_TYPE_ID,
        })
      ]).then(([entries]) => {
        return {
          about: entries.items[0],
        }
      }).catch(console.error)
    },
}
</script>

<template>
  <div>
    <div class="AboutTitle">
      <div class="AboutTitle__container">
        <TitleBlock titleBlockTitle="About me" titleBlockPara="I’m a Designer and Developer who loves solving problems. Working in the industry for the last five years I have been involved in a great range of projects and worked at a number of agencies based in the UK." />        
        <Download />
      </div>
    </div>
    <QuoteBlock  Quote="Calum is incredibly supportive and passionate about front end development, and getting to learn with him has been a pleasure." Author="Charlie Jackson, Freelance developer and UX designer" />
    <!-- <ImageBlock ImageItems="/img/about-img.png" /> -->
    <ContentBlock v-if="about.fields.content" contentBlockTitle="" :contentBlockPara="about.fields.content" />
    <ServicesFeatured :item="about.fields.servicesSpotlights"/>    
    <CtaPanel />    
    <Footer />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";

  .AboutTitle {
    &__container {
        @include container--small;
        margin: $spacing-large auto;
    }
    .TitleBlock {
      @media (min-width: $mobile) {
            width: 70%;
        }
    }
    .TitleBlock__para {
      @media (min-width: $mobile) {
            width: 70%;
        }
    }
  }
</style>