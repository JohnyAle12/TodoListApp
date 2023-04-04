import React from 'react'

type Props = {
    total: number,
    clearListCompleted: () => void
}

export const Footer = ({total, clearListCompleted}: Props) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
        <p className="text-gray-400 text-sm">
            {total} tareas por completar
        </p>
        <button onClick={() => clearListCompleted()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
            Limpiar completados
        </button>
    </div>
  )
}
