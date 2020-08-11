export const state = () => ({
  characters: [],
});

export const getters = {
  characters(state) {
    return state.characters.map(({ id, image, name, status, species }) => ({
      id,
      image,
      name,
      status,
      species,
    }));
  },
};

export const mutations = {
  SET_CHARACTERS(state, payload) {
    state.characters = payload;
  },
};
