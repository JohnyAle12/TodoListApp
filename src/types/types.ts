export type Todo = {
    id: number,
    title: string,
    completed: boolean
}

export type Action = {
    type: string,
    payload: Todo
}

export type ContextApp = {
    todos?: Todo[]
    addTodos?: (todo: Todo) =>void
    completedTodo?: (todo: Todo) => void
    removeTodo?: (todo: Todo) => void
    clearCompleted?: () => void
}