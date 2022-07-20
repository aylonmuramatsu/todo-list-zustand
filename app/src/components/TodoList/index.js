import { useTodo } from "~/store/useTodo";
import { TodoEmpty } from "./TodoEmpty";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todo } = useTodo();
  return (
    <>
      {todo.length === 0 && <TodoEmpty/>}
      {todo.map(item => <TodoItem {...item} />)}
    </>
  )
}