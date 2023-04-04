import { useContext } from "react"
import { Input } from "./components/Input"
import { List } from "./components/List"
import { Title } from "./components/Title"
import { TodoItem } from "./components/TodoItem"
import { Footer } from "./components/Footer"
import { TodoContext } from "./context/todoContext"

function App() {
  const { todos, addTodos, completedTodo, removeTodo, clearCompleted } = useContext(TodoContext);
  const totalIncompleted = todos?.filter(t => !t.completed).length

  const addTodo = (title: string) => {
    const newId = todos && todos.length > 0 ? (todos[todos.length -1].id) + 1 : 1;
    addTodos && addTodos({
      id: newId,
      title,
      completed: false
    });
  }
  
  return (
    <div className="bg-gray-800 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <Input addTodo={addTodo} />
        <List>
          { todos?.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              completedTodo={todo => completedTodo && completedTodo(todo)}
              removeTodo={todo => removeTodo && removeTodo(todo)} />
          )) }
          <Footer total={totalIncompleted ?? 0} clearCompleted={() => clearCompleted && clearCompleted()}/>
        </List>
      </div>
    </div>
  )
}

export default App
