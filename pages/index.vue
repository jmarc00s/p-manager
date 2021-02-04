<template>
  <div class="container-fluid row mt-3">

    <div class="col-md-8">
      <Dashboard class="dashboard px-5" />
    </div>

    <div class="col-md-4">
      <TabelaSprint class="tabela px-5" />
    </div>
  </div>
</template>

<script>
import Dashboard from '~/components/Dashboard.vue'
import TabelaSprint from '~/components/TabelaSprint.vue'
export default {
  components: { Dashboard, TabelaSprint },
  mounted() {
    this.$store.dispatch('carregarDados');
  }
}
</script>

<style>

.main {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
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
