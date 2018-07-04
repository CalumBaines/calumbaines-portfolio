<script>
  import {createClient} from '~/plugins/contentful.js'
  import CaseStudyFeatured from '~/components/CaseStudyFeatured/CaseStudyFeatured.vue'
  import TitleBlock from '~/components/TitleBlock/TitleBlock.vue'
  import CtaPanel from '~/components/CtaPanel/CtaPanel.vue'
  import Footer from '~/components/Footer/Footer.vue'  


  const client = createClient()

  export default {
    components: {
      CaseStudyFeatured,
      CtaPanel,
      Footer
    },
    // `env` is available in the context object
    asyncData ({env}) {
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ]).then(([entries, posts]) => {
        // return data that should be available
        // in the template
        return {
          person: entries.items[0],
          posts: posts.items
        }
      }).catch(console.error)
    }
  }
</script>

<template>
  <div>
    <!-- render data of the person -->
    <!-- render blog posts -->
    <CaseStudyFeatured :itemTitle="posts"/>
    
    <ul>
      <li :key="index" v-for="(post, index) in posts">
        <h4><nuxt-link :to="`blog/${post.fields.slug}`" class="title">{{ post.fields.title }}</nuxt-link></h4>
        <p>{{ post.fields.date }}</p>
        <p>{{ post.fields.description }}</p>
      </li>
    </ul>
    <CtaPanel />
    <Footer />
  </div>
</template>
