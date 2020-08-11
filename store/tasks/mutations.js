export default {
  ADD_TASK(state, text) {
    const id = state.data.length + 1;
    state.data.push({ id, text, completed: false });
  },
  EDIT_TASK(state, { index, text }) {
    state.data[index].text = text;
  },
  DELETE_TASK(state, index) {
    state.data.splice(index, 1);
  },
  TOGGLE(state, index) {
    state.data[index].completed = !state.data[index].completed;
  },
};
