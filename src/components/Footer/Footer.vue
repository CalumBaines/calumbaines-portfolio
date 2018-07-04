<template>
    <footer class="Footer">
        <div class="Footer__container">
            <div class="Footer__left">
                <h3 class="Footer__title">Contact</h3>
                <address class="Footer__address">
                    Unit 21, New Mesters<br>
                    53 Mowbray Street<br>
                    Sheffield<br>
                    S3 8EN<br>
                </address>
                <a href="#na" class="Footer__contact"><b>T:</b> 07855466485</a>
                <a href="#na" class="Footer__contact"><b>E:</b> hello@calumbaines.com</a>
            </div>
            <div class="Footer__right">
                <ul class="Footer__list">
                    <li class="Footer__item">
                        <nuxt-link exact to="/about" class="Footer__link">About</nuxt-link>
                    </li>
                    <li class="Footer__item">
                        <nuxt-link exact to="/case-studies" class="Footer__link">Case Studies</nuxt-link>
                    </li>

                    <li class="Footer__item">
                        <nuxt-link exact to="/contact" class="Footer__link">Contact</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="Footer__container FooterBottom">
            <ul class="FooterBottom__list">
                <!-- <li class="FooterBottom__item">
                    <a href="#na" class="FooterBottom__link">Terms & Conditions</a>
                </li> -->
                <!-- <li class="FooterBottom__item">
                    <a href="#na" class="FooterBottom__link">Sitemap</a>                    
                </li> -->
            </ul>
            <!-- <div class="FooterBottom__social">
                <ul class="FooterBottom__list">
                    <li class="FooterBottom__item">
                        <a href="#na" class="FooterBottom__link"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="FooterBottom__item">
                        <a href="#na" class="FooterBottom__link"><i class="fab fa-dribbble"></i></a>                    
                    </li>
                    <li class="FooterBottom__item">
                        <a href="#na" class="FooterBottom__link"><i class="fab fa-twitter"></i></a>                    
                    </li>
                    <li class="FooterBottom__item">
                        <a href="#na" class="FooterBottom__link"><i class="fab fa-linkedin-in"></i></a>                    
                    </li>
                    <li class="FooterBottom__item">
                        <a href="#na" class="FooterBottom__link"><i class="fab fa-github"></i></a>                    
                    </li>
                    <li class="FooterBottom__item">
                        <a href="#na" class="FooterBottom__link"><i class="fab fa-medium"></i></a>                    
                    </li>
                </ul>
            </div> -->
        </div>
    </footer>
</template>

<script>

export default {
    name: 'Footer',
    props: {
        caseStudyTitle: {
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
  @import "Footer.scss";
</style>