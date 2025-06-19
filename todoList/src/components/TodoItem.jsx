import React, { useState } from 'react'
import { useTodo } from '../contexts'

const TodoItem = ({ todo }) => {
    const {updateTodo, deleteTodo, toggleCheck} = useTodo()
    const [todoValue, setTodoValue] = useState(todo.todo)
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoValue})
        setIsTodoEditable(false)
    }

    const toggle = () => {
        toggleCheck(todo.id)
    }

    return (
        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.isChecked ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}>
            <input
                type='checkbox'
                className='cursor-pointer'
                checked={todo.isChecked}
                onChange={toggle}
            />
            <input
                type='text'
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.isChecked ? "line-through" : ""}`}
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* edit and save button */}
            <button
                className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer'
                onClick={() => {
                    if(todo.isChecked) return
                    if(isTodoEditable) {
                        editTodo();
                    } else {
                        setIsTodoEditable((prev) => !prev)
                    }
                }}
                disabled={todo.isChecked}
            >
                {isTodoEditable ? "📁" : "✏️"}

            </button>
            {/* delete button */}
            <button
                className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer'
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    )
}

export default TodoItem