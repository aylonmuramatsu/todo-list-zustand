import { useTodo } from "~/store/useTodo";

export const TodoItem = ({ id, message, done }) => {
  const {  updateTodo, deleteTodo } = useTodo();
  return (
    <div className="p-2 flex flex-row items-center bg-zinc-200 rounded-lg my-2">
      <div className="mt-[4px]"onClick={() => { updateTodo(id) }}>
        <input className="checkbox " type="checkbox" checked={done}  />
        <label htmlFor=""></label>
      </div>
      
      <span className="mx-2 flex-grow">{message}</span>
      <button className="p-2 bg-teal-500 rounded-full" type="button" onClick={() => deleteTodo(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  )
}