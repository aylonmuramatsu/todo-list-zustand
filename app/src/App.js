

import './App.css';
import {useTodo} from '~/store/useTodo'
const TodoItem = ({ id, message, done, updateTodo }) => (
  <div className="p-2">
    <input type="checkbox" checked={done} onChange={() => {updateTodo({id, done: !done})}}/>
    <span className="ml-2">{message}</span>
  </div>
)
function App() {
  const {todo, addTodo, updateTodo} = useTodo();
  const onSubmit = (evt) => {
    evt.preventDefault();    
    addTodo(evt.target.activity.value);
    evt.target.activity.value = '';
  }
  return (
    <>
      <form onSubmit={onSubmit}>
      <input className="flex w-full p-2 border-teal-500 shadow-teal-50/100" id="activity" name="activity" placeholder="digite a atividade"/>
      <button type="submit">Adiciona Ae Rapa</button>
      </form>
      <h1 className="text-lg font-bold text-red p-2">
        Lista de Tarefas
      </h1>
      <div>
        {
          todo.map((item, index) => (
            <TodoItem key={index} {...item} updateTodo={updateTodo}/>
          ))
        }
      </div>
    </>
  );
}

export default App;
