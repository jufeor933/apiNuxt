export default async function({ app, store }) {
  // get only if before has not been loaded
  if (!store.getters['api/characters'].length) {
    try {
      const res = await app.$axios.get(
        'https://rickandmortyapi.com/api/character/',
      );

      // set in store
      return store.commit('api/SET_CHARACTERS', res.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  return;
}
