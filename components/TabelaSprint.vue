<template>
  <div>
    <b-card title="Sprint">
      <b-table striped hover :items="itens" :fields="fields"></b-table>
    </b-card>
  </div>
</template>

<script>
export default {
  computed: {
    itens(){
      return [...this.$store.getters.sprints];
    }
  },
  data() {
    return {
      fields: [
        {key: 'numeroSprint', label: 'Sprint', class:"text-center"},
        {key: 'pontosEntregues', label: 'Pontos', class:"text-center"},
        {key: 'historiasHomologadas', label: 'Homologadas', class:"text-center"},
        {key: 'erros', label: 'Erros', class:"text-center"},
      ]
    }
  }
}
</script>

<style>
</style>
