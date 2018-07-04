
<script>
  // import {createClient} from '~/plugins/contentful.js'
  import TitleBlock from '~/components/TitleBlock/TitleBlock.vue'
  import ContentBlock from '~/components/ContentBlock/ContentBlock.vue'
  import Contact from '~/components/Contact/Contact.vue'
  import CtaPanel from '~/components/CtaPanel/CtaPanel.vue'
  import Footer from '~/components/Footer/Footer.vue'  
  
  export default {
    components: {
      TitleBlock,
      ContentBlock,
      CtaPanel,
      Footer,
      Contact
    },
}
</script>

<template>
  <div class="ContactPage">
    <TitleBlock titleBlockContained titleBlockTitle="Get in touch" titleBlockPara="If you’re looking to hire me or have a chat about my latest work, I’d love to hear from you." />   
    <Contact />
    <!-- <CtaPanel />     -->
    <Footer />
  </div>
</template>
