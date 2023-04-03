import { useState } from "react"
import { Input } from "./components/Input"
import { List } from "./components/List"
import { Title } from "./components/Title"
import { TodoItem } from "./components/TodoItem"
import { Todo } from "./types/types"

function App() {

  const [todo, setTodo] = useState<Todo[]>([
    {
      id: 1,
      title: 'Arreglar el jardin',
      completed: false
    },
    {
      id: 2,
      title: 'Sacar la basura',
      completed: true
    }
  ]);

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

  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <Input addTodo={addTodo} />
        <List>
          { todo.map((item) => (
            <TodoItem key={item.id} todo={item} completedTodo={completedTodo} />
          )) }
        </List>
      </div>
    </div>
  )
}

export default App
