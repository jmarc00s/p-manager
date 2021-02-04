


export const state = () => ({
  sprints: []
})

export const mutations = {
  adicionar: (state, sprint) => {
    state.sprints.push(sprint);
  },
  resetar: (state) => state.sprint = []
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
    if(!sprint.length) return;
    sprints.forEach(sprint => commit('adicionar', sprint));
  },
  carregarDados:  function({commit}) {
    this.$axios('sprints.json').then(res => {

        if(!res.data) return;

        const data = Object.keys(res.data).map(key => res.data[key])

        if (data){
          //commit('resetar');
          data.forEach(sprint => commit('adicionar', sprint))
        }

    }).catch(err => console.log(err));
  }
}

export const getters = {
  sprints: (state) => state.sprints.sort(c => c.sprint),
  totalSprints: (state) => state.sprints.length,
  totalHistoriasHomologadas: (state) => state.sprints.reduce((acc, curr) => acc + curr.historiasHomologadas, 0),
  totalErros: (state) => state.sprints.reduce((acc, curr) => acc + curr.erros, 0),
  totalPontos: (state) => state.sprints.reduce((acc, curr) => acc + curr.pontosEntregues, 0)
}

