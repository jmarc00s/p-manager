


export const state = () => ({
  sprints: []
})

export const mutations = {
  adicionar: (state, sprint) => {
    state.sprints.push(sprint);
  },
  resetar: state => state.sprint = []
}

export const actions = {
  adicionarSprint: function({commit}, sprint) {
    if(!sprint) return;

    var pInserirSprint = this.$axios.$post('sprints.json', sprint);

    pInserirSprint
      .then(() => commit('adicionar', sprint))
      .catch(err => console.log(err))
  },
  adicionarVarios: ({commit}, sprints) =>  {
    if(!sprints.length) return;
    sprints.forEach(sprint => commit('adicionar', sprint));
  },
  carregarDados: async function({commit}) {
    const response = await this.$axios('sprints.json');

    if(!response.data) return;
    const data = Object.keys(response.data).map(key => response.data[key])
    if (data){
      commit('resetar');
      data.forEach(sprint => commit('adicionar', sprint))
    }

  }
}

export const getters = {
  sprints: state => state.sprints.sort(c => c.sprint),
  totalSprints: state => state.sprints.length,
  totalHistoriasHomologadas: state => state.sprints.reduce((acc, curr) => acc + curr.historiasHomologadas, 0),
  totalErros: state => state.sprints.reduce((acc, curr) => acc + curr.erros, 0),
  totalPontos: state => state.sprints.reduce((acc, curr) => acc + curr.pontosEntregues, 0),
  historiasHomologadas: state => state.sprints.map(c => c.historiasHomologadas),
  pontosEntregues: state => state.sprints.map(c => c.pontosEntregues),
  erros: state => state.sprints.map(c => c.erros)
}

export const strict = false
