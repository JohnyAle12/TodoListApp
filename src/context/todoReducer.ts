import { Action, Todo } from '../types/types';

const types = {
    saveTodos: '[save] Todos',
    completedTodo: '[completed] Todo',
    removeTodo: '[remove] Todo',
    clearCompleted: '[clear] Todo',
}

export const todoReducer = (todos: Todo[], action: Action): Todo[] => {
    switch (action.type) {
        case types.saveTodos:
            return [
                ...todos,
                action.payload
            ];
        case types.completedTodo:
            return todos?.map(todo => {
                if(todo.id === action.payload.id){
                    return {
                        ...action.payload,
                        completed: !action.payload.completed
                    }
                }
                return todo;
            })
        case types.removeTodo:
            return todos?.filter(todo => todo.id !== action.payload.id)
        case types.clearCompleted:
            return todos?.filter(todo => !todo.completed)
        default:
            return todos;
    }
}
