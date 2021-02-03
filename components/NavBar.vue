<template>
  <div>
    <!-- MODAL Adicionar sprint -->

    <b-modal
      id="adicionar-sprint"
      title="Adicionar sprint"
      cancel-title="Cancelar"
      ok-title="Salvar"
      @ok="submeterDadosSprint"
    >
      <b-form @submit.stop.prevent="submeterDadosSprint">
        <b-form-group>
          <b-form-input
            placeholder="Número da sprint"
            v-model.number="adicionarSprintForm.numeroSprint"
            type="text"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input
            placeholder="Pontos entregues"
            v-model.number="adicionarSprintForm.pontosEntregues"
            type="text"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input
            placeholder="Histórias homologadas"
            v-model.number="adicionarSprintForm.historiasHomologadas"
            type="text"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input
            placeholder="Retornos de erro"
            v-model.number="adicionarSprintForm.erros"
            type="text"
            required
          >
          </b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>

    <!-- MODAL Adicionar sprint -->

    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>PManager</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="adicionarSprint">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
            Adicionar sprint
          </b-nav-item>
          <b-nav-item-dropdown text="João Marcos" right>
            <b-dropdown-item> Sair </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    adicionarSprint(event) {
      event.preventDefault()
      console.log(this.$store.getters.totalSprints)
      this.$bvModal.show('adicionar-sprint')
    },
    submeterDadosSprint() {
      this.$store.dispatch('adicionarSprint', this.adicionarSprintForm)
      this._resetarFormulario();
    },
    _resetarFormulario() {
      this.adicionarSprintForm = {
        numeroSprint: null,
        pontosEntregues: null,
        historiasHomologadas: null,
        erros: null,
      }
    }
  },
  data() {
    return {
      adicionarSprintForm: {
        numeroSprint: null,
        pontosEntregues: null,
        historiasHomologadas: null,
        erros: null,
      },
    }
  },
}
</script>

<style>
</style>
