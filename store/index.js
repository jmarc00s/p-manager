
export const state = () => ({
  sprints: []
})

export const mutations = {
  adicionar: (state, sprint) => {
    state.sprints.push(sprint);
  }
}

export const actions = {

  adicionarSprint: ({commit}, sprint) => {
    if(!sprint) return;
    commit('adicionar', sprint)
  },
  adicionarVarios: ({commit}, sprints) =>  {
    if(!sprint.length) return;

    sprints.forEach(sprint => commit('adicionar', sprint));
  },
  carregarDados: ({commit}) => {
    const sprints = [];
    sprints.forEach(sprint => commit('adicionar', sprint));
  }
}

export const getters = {
  sprints: (state) => state.sprints
}

