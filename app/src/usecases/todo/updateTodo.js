import produce from 'immer';
export const updateTodo = (set, id) => {
  set((state) => ({
    // todo: state.todo.map(currentTodo => currentTodo.id === todo.id ? ({...currentTodo, ...todo}) : currentTodo),
    todo: produce(state.todo,draft => {
      let todo = draft.find(i => i.id === id);
      
      if(!todo) return draft;
      todo.done = !todo.done;
      return draft;
    })
  }));
}
