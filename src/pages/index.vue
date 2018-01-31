<script>
import Button from '~/components/Button/Button.vue'

export default {
  components: {
    Button
  }
}
</script>

<template>

  <section class="container">
    <div>
      <h1 class="title">
        vue-boilerplate
      </h1>
      <h2 class="subtitle">
        vue-js Boilerplate
      </h2>
      <div class="links">
        <Button btnText="Call to button"></Button>
      </div>
    </div>
  </section>

</template>



<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
