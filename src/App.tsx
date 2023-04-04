import { useState } from "react"
import { Input } from "./components/Input"
import { List } from "./components/List"
import { Title } from "./components/Title"
import { TodoItem } from "./components/TodoItem"
import { Todo } from "./types/types"
import { Footer } from "./components/Footer"

function App() {

  const [todo, setTodo] = useState<Todo[]>([]);

  const totalIncompleted = todo.filter(t => t.completed === false).length

  const addTodo = (title: string) => {
    const newId = todo.length > 0 ? (todo[todo.length -1].id) + 1 : 1;
    setTodo([
      ...todo,
      {
        id: newId,
        title,
        completed: false
      }
    ])
  }

  const completedTodo = (id: number) => {
    const updatedList = todo.map(item => {
      if(item.id === id){
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    })
    setTodo(updatedList)
  }

  const removeTodo = (id: number) => {
    const updatedList = todo.filter(item => item.id !== id);
    setTodo(updatedList);
  }

  const clearListCompleted = () => {
    const updatedList = todo.filter(item => item.completed === false);
    setTodo(updatedList);
  }

  return (
    <div className="bg-gray-800 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <Input addTodo={addTodo} />
        <List>
          { todo.map((item) => (
            <TodoItem key={item.id} todo={item} completedTodo={completedTodo} removeTodo={removeTodo} />
          )) }
          <Footer total={totalIncompleted} clearListCompleted={clearListCompleted}/>
        </List>
      </div>
    </div>
  )
}

export default App
