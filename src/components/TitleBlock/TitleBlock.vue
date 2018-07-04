<template>
<div v-if="titleBlockContained" href="#na" class="TitleBlock TitleBlock__container" 
    v-bind:class="[white ? 'TitleBlock--white' : '', titleBlockPara ? 'TitleBlock--subheading' : '']">
    <div class="TitleBlock__wrap">
        <span v-if="titleBlockLabel" class="TitleBlock__label">{{titleBlockLabel}}</span>
        <h2 class="TitleBlock__title">{{titleBlockTitle}}</h2>
        <p v-if="titleBlockPara" class="TitleBlock__para">{{titleBlockPara}}</p>
    </div>
</div>
<div v-else href="#na" class="TitleBlock" 
    v-bind:class="[white ? 'TitleBlock--white' : '', titleBlockPara ? 'TitleBlock--subheading' : '']">
    <span v-if="titleBlockLabel" class="TitleBlock__label">{{titleBlockLabel}}</span>
    <h2 class="TitleBlock__title">{{titleBlockTitle}}</h2>
    <p v-if="titleBlockPara" class="TitleBlock__para">{{titleBlockPara}}</p>
</div>
</template>

<script>

export default {
    name: 'TitleBlock',
    props: {
        titleBlockTitle: {
            type: String,
            default: 'Title'
        },
        titleBlockLabel: {
            type: String,
            default: ''
        },
        titleBlockPara: {
            type: String,
            default: ''
        },
        white: {
            type: Boolean,
            default: false
        },
        titleBlockContained: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "TitleBlock.scss";
</style>