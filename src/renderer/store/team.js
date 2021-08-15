import Vue from 'vue';

export const state = () => ({
  car: {},
  telemetry: {
    currentTelemetry: [],
    lastlaptel: [],
  },
  laptimes: [],
  log: [],
});

export const actions = {
  SOCKET_teamUpdate(context, data) {
    context.commit('UPDATETEAM', data);
  },
};

export const mutations = {
  UPDATETEAM(state, data) {
    // state.car = data.data;
    // state.log = data.log;
    if (
      state.telemetry.currentTelemetry.length >
      data.telemetry.currentTelemetry.length
    ) {
      Object.freeze(state.telemetry.currentTelemetry);
      state.telemetry.lastlaptel = Object.freeze(
        state.telemetry.currentTelemetry,
      );
    }
    Vue.set(
      state.telemetry,
      'currentTelemetry',
      data.telemetry.currentTelemetry,
    );
    state.laptimes = data.telemetry.laptimes;
  },
};

export const getters = {
  getTelemetry: (state) => (id) => {
    return state.telemetry.currentTelemetry.map((a) => [
      a.pos,
      a.val,
    ]);
  },
  getDeltaTelemetry: (state) => (id) => {
    return state.telemetry.currentTelemetry.map((a) => [
      a.pos,
      a.delta,
    ]);
  },
  getLastLapTelemetry: (state) => (id) => {
    return state.telemetry.lastlaptel.map((a) => [a.pos, a.val]);
  },
  getBestLapTelemetry: (state) => (id) => {
    return state.telemetry.lastlaptel.map((a) => [a.pos, a.val]);
  },
  getTelemetryNormal: (state) => (id) => {
    return state.telemetry.currentTelemetry;
  },
  getTelemetryKeys: (state) => {
    return {
      keys: state.telemetry.currentTelemetry.map((a) =>
        Math.floor(a.pos),
      ),
      values: state.telemetry.currentTelemetry.map((a) => a.val),
    };
  },
  getTelemetryLastLap: (state) => {
    return {
      keys: state.telemetry.lastlaptel.map((a) => Math.floor(a.pos)),
      values: state.telemetry.lastlaptel.map((a) => a.val),
    };
  },
  getLaptimes: (state) => {
    return state.laptimes.forEach((val, index) => {
      return { num: index, time: val };
    });
  },
  getLiveTelemetry: (state) => {
    return state.telemetry.currentTelemetry.slice(-1)[0];
  },
};
