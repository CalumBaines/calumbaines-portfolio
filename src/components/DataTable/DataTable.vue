<template>

  <table class="dataTable">
    <tr class="dataTable__row">
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr class="dataTable__row">
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr class="dataTable__row">
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr class="dataTable__row">
      <td>Ernst Handel</td>
      <td>Roland Mendel</td>
      <td>Austria</td>
    </tr>
    <tr class="dataTable__row">
      <td>Island Trading</td>
      <td>Helen Bennett</td>
      <td>UK</td>
    </tr>
    <tr class="dataTable__row">
      <td>Laughing Bacchus Winecellars</td>
      <td>Yoshi Tannamuri</td>
      <td>Canada</td>
    </tr>
    <tr class="dataTable__row">
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
  </table>

</template>

<script>


export default {
  name: 'DataTable',
  props: {
    contents: {
      type: Array,
    },
  },
  methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Leave import variables in here 
  @import "../../globals/scss/main.scss";

  @import "DataTable.scss";
</style>