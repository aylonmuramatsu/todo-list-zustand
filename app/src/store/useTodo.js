import create from 'zustand'

//Single Responsibility Principle (SRP)
import {addTodo} from '~/usecases/todo/addTodo';
import {updateTodo} from '~/usecases/todo/updateTodo';
import {deleteTodo} from '~/usecases/todo/deleteTodo';


export const useTodo = create((set) => ({
  todo: [
    { id: 1, message:'Fazer café', done:true}
  ],
  addTodo: (message) => addTodo(set, message),
  updateTodo: (id) => updateTodo(set, id),
  deleteTodo: (id) => deleteTodo(set, id),
}))