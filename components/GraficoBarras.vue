
<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  mounted() {
    this.chartData =  {
      labels: this.$store.getters.sprints.map(c => c.numeroSprint),
      datasets: [
        {
          label: 'Pontos entregues',
          backgroundColor: '#27ae60',
          data: this.$store.getters.sprints.map(c => c.pontosEntregues)
        }
      ]
    }
    console.log(this.chartData);
    this.renderChart(this.chartData, this.options);
  },
  data() {
    return {
      chartData: null,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }

}
</script>

<style>

</style>
