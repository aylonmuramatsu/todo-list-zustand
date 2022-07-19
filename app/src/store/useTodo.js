import create from 'zustand'

//Single Responsibility Principle (SRP)
import {addTodo} from '~/usecases/todo/addTodo';
import {updateTodo} from '~/usecases/todo/updateTodo';


export const useTodo = create((set) => ({
  todo: [
    { id: 1, message:'Fazer café', done:true}
  ],
  addTodo: (message) => addTodo(set, message),
  updateTodo: (todo) => updateTodo(set, todo),
}))