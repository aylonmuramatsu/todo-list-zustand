/* eslint-disable */ 
export const addTodo = (set, message) => {
  set((state) => ({
    todo: [...state.todo, { id: state.todo.length + 1, message, done: false}]
  }));
}
