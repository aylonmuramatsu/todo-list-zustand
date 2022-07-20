import produce from 'immer';
export const deleteTodo = (set, id) => {
  set((state) => ({
    todo: produce(state.todo,draft => {
      draft = draft.filter(i => i.id !== id);
      return draft;
    })
  }));
}
