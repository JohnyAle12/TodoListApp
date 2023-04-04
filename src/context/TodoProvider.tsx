import { ReactNode, useEffect, useReducer } from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer';
import { Todo } from '../types/types';

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || '[]');
}

export const TodoProvider = ({ children }: any) => {
    
    const [todos, dispatch] = useReducer(todoReducer, {}, init);

    const addTodos = (todo: Todo) => {
        dispatch({
            type: '[save] Todos',
            payload: todo
        })
    }

    const completedTodo = (todo: Todo) => {
        dispatch({
            type: '[completed] Todo',
            payload: todo
        })
    }

    const removeTodo = (todo: Todo) => {
        dispatch({
            type: '[remove] Todo',
            payload: todo
        })
    }

    const clearCompleted = () => {
        dispatch({
            type: '[clear] Todo',
            payload: todos[0]
        })
    }

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
    return (
        <TodoContext.Provider value={{ todos, addTodos, completedTodo, removeTodo, clearCompleted }}>
            {children}
        </TodoContext.Provider>
    )
}
