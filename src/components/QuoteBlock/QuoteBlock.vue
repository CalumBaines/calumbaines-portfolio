<template>
    <section class="QuoteBlock">
        <blockquote class="QuoteBlock__quote">
            <q class="QuoteBlock__content">{{ Quote }}</q>
            <footer class="QuoteBlock__footer">— {{ Author }}</footer>
        </blockquote>
    </section>
</template>

<script>

export default {
    name: 'QuoteBlock',
    props: {
        Quote: {
            type: String,
            default: 'Quote'
        },
        Author: {
            type: String,
            default: 'Author'
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "QuoteBlock.scss";
</style>