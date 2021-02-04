
<script>
import { Bar, mixins } from 'vue-chartjs'
export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  data() {
    return {
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
