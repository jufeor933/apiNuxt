export const state = () => ({
  logged: false,
});

export const getters = {
  logged(state) {
    return state.logged;
  },
};

export const mutations = {
  SET_LOGGED(state, payload) {
    state.logged = payload;
  },
};
