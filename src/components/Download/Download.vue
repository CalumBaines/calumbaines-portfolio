<template>
<section class="Download">
    <a class="Download__link" target="_blank" href="/img/cv-2018.pdf">
        <span class="Download__text">Download my CV</span>
        <div class="Download__icon">
            <svg width="26px" height="31px" viewBox="0 0 26 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <linearGradient x1="13.6817932%" y1="69.2323923%" x2="85.3881836%" y2="69.2323935%" id="linearGradient-1">
                        <stop stop-color="#37EEA4" offset="0%"></stop>
                        <stop stop-color="#52FCDA" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="about" transform="translate(-680.000000, -290.000000)" fill="url(#linearGradient-1)" fill-rule="nonzero">
                        <g id="CV-download" transform="translate(641.000000, 234.000000)">
                            <g id="Group" transform="translate(0.000000, 23.000000)">
                                <path d="M45.7407234,48.9843603 C45.7407234,49.3854652 45.9025015,49.7487461 46.163479,50.0112486 L50.9782875,54.8549372 C51.2402422,55.1184654 51.6013539,55.281258 51.9999788,55.281258 C52.3986036,55.281258 52.7597578,55.1184654 53.0206928,54.8549372 L57.8355438,50.0112486 C58.0974985,49.7487461 58.2592766,49.3854652 58.2592766,48.9843603 C58.2592766,48.182236 57.6131415,47.5312366 56.8148298,47.5312366 C56.4161624,47.5312366 56.0550507,47.6939865 55.7941157,47.9565317 L53.444468,50.3202938 L53.444468,34.4531237 C53.444468,33.6509994 52.798333,33 52.0000212,33 C51.2017095,33 50.5555744,33.6509994 50.5555744,34.4531237 L50.5555744,50.3202938 L48.2059268,47.957472 C47.9449493,47.6939865 47.5838376,47.5312366 47.1851702,47.5312366 C46.386901,47.5312366 45.7407234,48.182236 45.7407234,48.9843603 Z M63.0741276,39.781258 L57.7778085,39.781258 C56.9794967,39.781258 56.3333617,40.4322574 56.3333617,41.2343817 C56.3333617,42.0365059 56.9794967,42.6875053 57.7778085,42.6875053 L62.1111489,42.6875053 L62.1111489,61.0937527 L41.8888936,61.0937527 L41.8888936,42.6875053 L46.222234,42.6875053 C47.0205458,42.6875053 47.6666808,42.0365059 47.6666808,41.2343817 C47.6666808,40.4322574 47.0205458,39.781258 46.222234,39.781258 L40.9259149,39.781258 C39.8637792,39.781258 39,40.6511662 39,41.718742 L39,62.0624733 C39,63.1300491 39.8637792,64 40.9259149,64 L63.0740851,64 C64.1362208,64 65,63.1300491 65,62.0624733 L65,41.718742 C65.0000425,40.6511662 64.1362633,39.781258 63.0741276,39.781258 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </a>
</section>
</template>

<script>


export default {
    name: 'Download',
    props: {
        /**
        * The content for the banner
        */
        item: {
            type: Array
        },
    },
    components: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";
  // If creating a new component import component style sheet here as shown below 
  @import "Download.scss";
</style>