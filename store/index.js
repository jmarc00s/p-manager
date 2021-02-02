
const data = [
  {sprint: 42, pontos: 16, homologadas: 3, erros: 0},
  {sprint: 43, pontos: 14, homologadas: 3, erros: 1},
  {sprint: 44, pontos: 14, homologadas: 3, erros: 0},
  {sprint: 45, pontos: 14, homologadas: 3, erros: 0},
  {sprint: 46, pontos: 14, homologadas: 3, erros: 0}
]

export const state = () => ({
  sprints: []
})

export const mutations = {
  adicionar: (state, sprint) => {
    state.sprints.push(sprint);
  }
}

export const actions = {
  adicionarVarios: ({commit}, sprints) =>  {
    if(!sprint.length) return;

    sprints.forEach(sprint => commit('adicionar', sprint));
  },
  carregarDados: ({commit}) => {
    const sprints = data;
    sprints.forEach(sprint => commit('adicionar', sprint));
  }
}

export const getters = {
  sprints: (state) => state.sprints
}

