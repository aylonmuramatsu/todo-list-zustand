import produce from 'immer';

export const addTodo = (set, message) => {
  set((state) => ({
      //   todo: [...state.todo, { id: state.todo.length + 1, message, done: false}]
      todo: produce(state.todo, draft => {
        if(!message) {
          return draft;
        }
        draft.push({
          id: draft.length + 1,
          message,
          done: false
        });
      }),
  }));
}
