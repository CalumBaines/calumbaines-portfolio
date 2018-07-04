<template>
    <section class="Contact">
        <div class="Contact__location">
            <h3 class="Contact__title">Address</h3>
            <address class="Contact__address">
                Unit 21, New Mesters<br>
                53 Mowbray Street<br>
                Sheffield<br>
                S3 8EN<br>
            </address>
        </div>
        <div class="Contact__number">
            <h3 class="Contact__title">Contact</h3>            
            <p href="#na" class="Contact__contact"><b>T:</b> 07855466485</p>
            <p href="#na" class="Contact__contact"><b>E:</b> hello@calumbaines.com</p>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Contact',
    props: {
        contentBlockTitle: {
            type: String,
            default: 'Title'
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "Contact.scss";
</style>