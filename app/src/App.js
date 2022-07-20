

import './App.css';
import { useTodo } from '~/store/useTodo'
import { TodoList } from './components/TodoList';


function App() {
  const { addTodo } = useTodo();
  const onSubmit = (evt) => {
    evt.preventDefault();
    const message = evt.target.activity.value;
    if(!message) {
      return;
    }
    addTodo(message);
    evt.target.activity.value = '';
  }
  return (
    <div className="p-4 sm:p-14 bg-zinc-300  w-full h-screen">
      <form onSubmit={onSubmit}>
        <div className="flex flex-row gap-x-4">
          <input className="flex-grow p-2 px-4 border-2 shadow shadow-teal-500/50 rounded-full outline-none" id="activity" name="activity" placeholder="Digite a atividade" />
          <button className="md:hidden bg-teal-500 text-white rounded-full font-bold px-4" type="submit">+</button>
          <button className="hidden md:block bg-teal-500 text-white rounded-full font-bold px-4" type="submit">Adiciona Ae Rapa</button>
        </div>
      </form>
      <h1 className="text-lg font-bold text-red my-2">
        Lista de Tarefas
      </h1>
      <TodoList/>
    </div>
  );
}

export default App;
