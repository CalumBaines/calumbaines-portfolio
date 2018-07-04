<template>
  <div>

    <section class="body-container">
      <main class="wrapper">
        <div class="headline">
          <h1>{{ post.fields.title }}</h1>
        </div>
      </main>
    </section>

  </div>
</template>

<script>
// import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'
// import Navigation from '~components/navigation.vue'
const client = createClient()

export default {

    asyncData ({env, params}) {
      return Promise.all([
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          'fields.slug': params.slug,
        })
      ]).then(([entries]) => {
        return {
          post: entries.items[0],
        }
      }).catch(console.error)
    },
}
</script>

<style>



</style>
