<template>
<section class="Workflow">
    <div class="Workflow__container">
        <div class="Workflow__item">
            <span class="Workflow__label">01</span>
            <h3 class="Workflow__title">Discovery</h3>
            <p class="Workflow__description">During the discovery phase, I will work with you to establish KPI's and objectives, this can be achieved through workshops or running a design sprint.</p>
        </div>
        <div class="Workflow__item">
            <span class="Workflow__label">02</span>
            <h3 class="Workflow__title">Design</h3>
            <p class="Workflow__description">Creatively addressing the challenges highlighted during the discovery phase. Producing a prototype and user testing to validate our assumptions.</p>
        </div>
        <div class="Workflow__item">
            <span class="Workflow__label">03</span>
            <h3 class="Workflow__title">Development</h3>
            <p class="Workflow__description">Delivering a user-friendly final product is vital, building a product that can be iterated on and develop further based on data tracked over time.</p>
        </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'Workflow',
  props: {
    /**
    * The content for the Button
    */
    bannerTitle: {
      type: String,
      default: 'Title'
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "Workflow.scss";
</style>