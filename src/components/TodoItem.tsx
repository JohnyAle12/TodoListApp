import { Todo } from '../types/types'

type Props = {
  todo: Todo,
  completedTodo: (todo: Todo) => void
  removeTodo: (todo: Todo) => void
}

export const TodoItem = ({todo, completedTodo, removeTodo}: Props) => {
  const { id, title, completed } = todo;
  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
        <div className="flex items-center">
            {
              completed ? 
              (
                <div onClick={() => completedTodo(todo)} className="bg-green-700 p-1 rounded-full cursor-pointer">
                  <img className="h-4 w-4 " src="/check-icon.svg" alt="Check Icon" />
                </div>
              ): (
                <span onClick={() => completedTodo(todo)} className="border border-gray-500 border-solid p-3 rounded-full cursor-pointer"></span>
              )
            }
            <p className={"pl-3 " + (completed && "line-through")}>{ title }</p>
        </div>
        <img onClick={() => removeTodo(todo)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/close-icon.svg" alt="Close Icon" />
    </div>
  )
}
