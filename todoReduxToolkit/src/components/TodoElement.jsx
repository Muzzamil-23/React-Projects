import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, setEditTodoId, setIsEditable, toggleComplete } from '../features/todo/todoSlice'

const TodoElement = ({ todo: { text, id, completed } }) => {
    const dispatch = useDispatch()
    const handleRemoveTodo = () => {
        dispatch(removeTodo(id))
    }
    
    const handleEditTodo = () => {
        dispatch(setEditTodoId(id))
        dispatch(setIsEditable(true))
    }

    const isEditable = useSelector(state => state.isEditable)
    
    const handleCheckToggle = () => {
        if(!isEditable) dispatch(toggleComplete(id))
    }
    
    return (
        <div className={`flex justify-between border border-gray-600 rounded-md py-4 pr-6 pl-6 ${completed ? 'bg-gray-800 text-gray-400 transition-all duration-200 ease-in': ''}`}>
            <div className='flex gap-3 w-full'>
                <input type="checkbox" className={`text-xl border border-gray-600 px-3 rounded-md checked:bg-white checked:text-black`}
                    checked={completed}
                    onChange={handleCheckToggle}
                />
                <p className={`text-xl ${completed ? 'line-through' : ''}`}>{text}</p>
            </div>
            <div className='flex gap-2'>
                <button className={`cursor-pointer hover:bg-gray-700 px-2 py-1 rounded ${isEditable ? 'hover:bg-gray-900' : ''}`} onClick={handleEditTodo} disabled={isEditable}>✏️</button>
                <button className={`cursor-pointer hover:bg-gray-700 px-2 py-1 rounded ${isEditable ? 'hover:bg-gray-900' : ''}`} onClick={handleRemoveTodo} disabled={isEditable}>❌</button>
            </div>
        </div>
    )
}

export default TodoElement