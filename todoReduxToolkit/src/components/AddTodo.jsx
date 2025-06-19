import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    const isEditable = useSelector(state => state.isEditable)
    const editTodo = useSelector(state => state.todos.find(todo => todo.id === state.editTodoId))
    const btnLabel = isEditable ? '✏️' : '➕'
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditable && editTodo) {
            setInput(editTodo.text);
        }
    }, [isEditable, editTodo]);

    useEffect(() => {
        if(isEditable && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isEditable])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.trim()) return
        if (isEditable && editTodo) {
            dispatch(updateTodo({ id: editTodo.id, text: input }))
        } else {
            dispatch(addTodo({ text: input }))
        }
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} className='flex justify-between gap-2'>
            <input type="text" placeholder='Add a new todo...' className='w-full border px-4 border-gray-600 rounded-md'
                onChange={(e) => setInput(e.target.value)}
                value={input}
                ref={inputRef}
                autoFocus={true}
            />
            <button className='flex justify-center items-center px-4 py-2 rounded-lg bg-white text-black text-2xl cursor-pointer hover:bg-[#e3e3e3]' type='submit'
            >{btnLabel}</button>
        </form>
    )
}

export default AddTodo