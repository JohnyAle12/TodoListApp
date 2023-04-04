import { useEffect, useState } from "react"
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
    const updatedList = [
      ...todo,
      {
        id: newId,
        title,
        completed: false
      }
    ]
    setTodo(updatedList)
    updateStorage(updatedList)
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
    updateStorage(updatedList)
  }

  const removeTodo = (id: number) => {
    const updatedList = todo.filter(item => item.id !== id);
    setTodo(updatedList);
    updateStorage(updatedList)
  }

  const clearListCompleted = () => {
    const updatedList = todo.filter(item => !item.completed);
    setTodo(updatedList);
    updateStorage(updatedList)
  }

  const updateStorage = (updatedList: Todo[]) => {
    window.localStorage.setItem('todos', JSON.stringify(updatedList));
  }

  useEffect(() => {
    const updatedList = JSON.parse(window.localStorage.getItem('todos') ?? '[]');
    setTodo(updatedList);
  }, [])
  
  

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
