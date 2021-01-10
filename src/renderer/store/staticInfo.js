export const state = () => ({
  track: {},
});

export const actions = {
  SOCKET_staticInformation(context, data) {
    context.commit('UPDATEINFO', data);
  },
};

export const mutations = {
  UPDATEINFO(state, data) {
    state.track = data.track;
  },
};

export const getters = {
  getInfo(state) {
    return state;
  },
};
