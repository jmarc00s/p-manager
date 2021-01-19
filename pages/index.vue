<template>
  <div class="container">
    <Dashboard />
    <tabela-sprint/>
  </div>
</template>

<script>
import Dashboard from '~/components/Dashboard.vue'
import TabelaSprint from '~/components/TabelaSprint.vue'
export default {
  components: { Dashboard, TabelaSprint },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
* {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
}

</style>
