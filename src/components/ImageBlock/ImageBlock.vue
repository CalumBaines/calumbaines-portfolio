<template>
    <section class="ImageBlock">
        <div v-if="ImageItems.length == 1" class="ImageBlock__wrap ImageBlock--one">
            <div class="ImageBlock__item" :key="index" v-for="(item, index) in ImageItems" >
                <img class="ImageBlock__img" :src="item.fields.file.url" />   
            </div>
        </div>  
        <div v-else-if="ImageItems.length == 2" class="ImageBlock__wrap ImageBlock--two">
            <div class="ImageBlock__item" :key="index" v-for="(item, index) in ImageItems" >
                <img class="ImageBlock__img" :src="item.fields.file.url" />   
            </div> 
        </div>   
        <div v-else-if="ImageItems.length == 3" class="ImageBlock__wrap ImageBlock--three">
            <div class="ImageBlock__item" :key="index" v-for="(item, index) in ImageItems" >
                <img class="ImageBlock__img" :src="item.fields.file.url" />   
            </div>
        </div>                 
    </section>
</template>

<script>

export default {
    name: 'ImageBlock',
    props: {

        ImageItems: {
            type: Array
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "ImageBlock.scss";
</style>