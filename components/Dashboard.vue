<template>
  <div>
    <b-card title="Dashboard">
      <div class="row mb-5">
        <div class="col-md-4" v-for="card in cards" :key="card.descricao">
          <b-card class="text-center pt-3" no-body>
            <h4>{{ card.quantidade }}</h4>
            <p>{{ card.descricao }}</p>
          </b-card>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-card title="Gráfico"></b-card>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  computed: {
    cards(){
      return [
        {descricao: 'Sprints', quantidade: this.$store.getters.totalSprints},
        {descricao: 'Histórias homologadas', quantidade: this.$store.getters.totalHistoriasHomologadas},
        {descricao: 'Erros', quantidade: this.$store.getters.totalErros}
      ]
    },
    quantidadeSprint() {
      return this.$store.getters.totalSprints
    },
    quantidadeHistoriasHomologadas() {
      return this.$store.getters.totalHistoriasHomologadas
    },
    quantidadeErros() {
      return this.$store.getters.totalErros
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style>
</style>
