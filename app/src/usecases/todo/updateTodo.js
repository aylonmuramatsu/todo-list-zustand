export const updateTodo = (set, todo) => {
  set((state) => ({
    todo: state.todo.map(currentTodo => currentTodo.id === todo.id ? ({...currentTodo, ...todo}) : currentTodo),
  }));
}
