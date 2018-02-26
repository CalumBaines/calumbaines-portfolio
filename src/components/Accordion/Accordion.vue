<template>
<div>
    <div class="accordion" :key="index" v-on:click="toggle(index)" v-for="(item, index) in contents">
      <div class="accordion__link">
        <span class="accordion__title">{{ item.title }}</span>
        <i class="accordion__icon fas fa-angle-down"></i>
      </div>
      <div class="accordion__panel" style="display: none;">
        <p class="accordion__content">{{ item.msg }}</p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Accordion',
  props: {
    contents: {
      type: Array,
      default: [
        {
          title: 'Accordion Title One',
          msg: 'I am fine thank you.',
        },
        {
          title: 'Accordion Title Two',
          msg: 'I am fine thank you.',
        },
        {
          title: 'Accordion Title Three',
          msg: 'I am fine thank you.',
        },
      ],
    },
  },
  methods: {
    toggle: function (num) {
        if (this.$el.children[num].classList.contains('accordion--open')) {
          this.$el.children[num].classList.remove('accordion--open')
          this.$el.children[num].querySelectorAll('.accordion__panel')[0].style.display = 'none'
        } else {
          var prevFaqQuestion = this.$el.querySelectorAll('.accordion--open')
          if (prevFaqQuestion.length !== 0) {
            prevFaqQuestion[0].classList.remove('accordion--open')
            prevFaqQuestion[0].querySelectorAll('.accordion__panel')[0].style.display = 'none'
          }
          this.$el.children[num].classList.add('accordion--open')
          this.$el.children[num].querySelectorAll('.accordion__panel')[0].style.display = ''
        }
      },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";

  @import "Accordion.scss";
</style>