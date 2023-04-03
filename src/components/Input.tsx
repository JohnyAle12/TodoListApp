import { KeyboardEvent } from 'react'
import { useForm } from '../hooks/useForm';

type Props = {
    addTodo: (title: string) => void
}

export const Input = ({ addTodo }: Props) => {
    const { todoTitle, onInputChange, onResetForm} = useForm({
        todoTitle: ''
    });

    const handleAddTodo = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter' && todoTitle.length > 4){
            addTodo(todoTitle);
            onResetForm();
        }
    }

    return (
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
            </div>
            <input
                type="text"
                className="focus:shadow-lg font-medium focus:shadow-red-500 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
                placeholder="Crear una tarea"
                name="todoTitle"
                autoComplete="off"
                value={todoTitle}
                onChange={onInputChange}
                onKeyDown={ e => handleAddTodo(e) }
            />
        </div>
    )
}
