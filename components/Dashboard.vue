<template>
  <div>
    <b-card title="Dashboard">
      <div class="row mb-5">
        <div class="col-md-3" v-for="card in cards" :key="card.descricao">
          <b-card class="text-center pt-3" no-body>
            <h4>{{ card.quantidade }}</h4>
            <p>{{ card.descricao }}</p>
          </b-card>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-card title="Gráfico">
            <GraficoBarras v-if="sprints" :chartData="dadosGrafico" />
          </b-card>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import GraficoBarras from './GraficoBarras.vue';
export default {
  components: { GraficoBarras },
  computed: {
    cards(){
      return [
        {descricao: 'Sprints', quantidade: this.$store.getters.totalSprints},
        {descricao: 'Pontos entregues', quantidade: this.$store.getters.totalPontos},
        {descricao: 'Histórias homologadas', quantidade: this.$store.getters.totalHistoriasHomologadas},
        {descricao: 'Erros', quantidade: this.$store.getters.totalErros}
      ]
    },
    sprints() {
      return this.$store.getters.sprints;
    },
    dadosGrafico() {
      return  {
        labels: this.$store.getters.sprints.map(c => c.numeroSprint),
        datasets: [
          {
            label: 'Pontos entregues',
            backgroundColor: '#27ae60',
            data: this.$store.getters.pontosEntregues
          },
          {
            label: 'Histórias homologadas',
            backgroundColor: '#3498db',
            data: this.$store.getters.historiasHomologadas
          },
          {
            label: 'Erros',
            backgroundColor: '#c0392b',
            data: this.$store.getters.erros
          }
        ]
      }
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
