import { remote } from 'electron';

export const state = () => ({
  cars: [],
  delta: 0,
});

export const actions = {
  SOCKET_updateCars(context, data) {
    context.commit('UPDATECARS', data);
  },
  SOCKET_entryAsk(context, data) {
    const user = remote.getGlobal('user');
    user.id = data;
    const sendData = {};
    sendData.username = user.username;
    sendData.entryNumber = user.entryNumber;
    this._vm.$socket.emit('entry', sendData);
  },
};

export const mutations = {
  UPDATECARS(state, data) {
    state.cars = data.data;
    state.delta = data.delta;
  },
};

export const getters = {
  getAll(state) {
    return Object.values(state.cars);
  },
  getStandings(state) {
    return Object.values(state.cars).sort((a, b) =>
      a.pos > b.pos ? 1 : -1,
    );
  },
  getTopSpeed: (state) => (id) => {
    if (state.telemetry[id] != null) {
      return Object.values(state.telemetry[id].topspeed);
    }
    return [];
  },
  getTopSpeedkeys: (state) => (id) => {
    if (state.telemetry[id] != null) {
      return Object.keys(state.telemetry[id].topspeed);
    }
    return [];
  },
  getTelemetry: (state) => (id) => {
    return state.telemetry;
  },
};
