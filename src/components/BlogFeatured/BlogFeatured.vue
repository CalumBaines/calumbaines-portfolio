<template>
<section class="BlogFeatured">
    <div class="BlogFeatured__container">
        <TitleBlock titleBlockTitle="What I’m thinking about, experimenting with and working on." />        
        <Blog :key="index" v-for="(item, index) in item" :href="item.fields.slug" :blogTitle="item.fields.title"/>
    </div>
</section>
</template>

<script>
import Blog from '~/components/Blog/Blog.vue'
import TitleBlock from '~/components/TitleBlock/TitleBlock.vue'


export default {
    name: 'BlogFeatured',
    props: {
        /**
        * The content for the banner
        */
        item: {
            type: Array
        },
    },
    components: {
        Blog,
        TitleBlock
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "BlogFeatured.scss";
</style>