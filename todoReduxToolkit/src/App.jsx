import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector } from 'react-redux'


function App() {
  const [filter, setFilter] = useState('all')
  const todosCount = useSelector(state => state.todos.length)
  const allTodos = useSelector(state => state.todos)
  
  const activeTodosCount = allTodos.filter(todo => !todo.completed).length
  const completedTodosCount =  allTodos.filter(todo => todo.completed).length
  const completedTodos = allTodos.filter(todo => todo.completed)
  const activeTodos = allTodos.filter(todo => !todo.completed)
  
    

  const getFilteredTodos = () => {
    if(filter === 'all') return allTodos
    if(filter === 'active') return activeTodos
    if(filter === 'completed') return completedTodos
  }
  
  return (
    <div className='bg-gray-800 w-full min-h-screen flex justify-center items-center text-white'>
      <div className='bg-gray-900 flex flex-col container max-w-[600px] rounded-lg border border-gray-600 px-4 py-6 my-20'>
        <div className='flex items-center gap-2 mb-6'>
          <span className='text-4xl'>📑</span>
          <h1 className='text-4xl font-bold'>Todo List</h1>
        </div>
        <div className='flex gap-2 text-sm'>
          <div className='flex items-center gap-6 rounded-4xl bg-gray-800 px-4 py-1 justify-center'>
            🔵 {activeTodosCount} Active
          </div>
          <div className='flex items-center gap-6 rounded-4xl bg-gray-800 px-4 py-1 justify-center'>
            ✅ {completedTodosCount} Completed
          </div>
        </div>
        <div className='mt-8'>
          <AddTodo />
        </div>
        <div className='flex gap-4 mt-4'>
          <button className={`hover:bg-gray-700
           px-6 py-2 rounded-lg border border-gray-700 cursor-pointer
           ${filter === 'all' ? 'bg-white text-black transition-all duration-75 ease-in hover:bg-white' : ''}
           `}
          onClick={() => setFilter('all')}>All ({todosCount})</button>

          <button className={`hover:bg-gray-700
           px-6 py-2 rounded-lg border border-gray-700 cursor-pointer
           ${filter === 'active' ? 'bg-white text-black transition-all duration-75 ease-in hover:bg-white' : ''}
           `}
           onClick={() => setFilter('active')}
            >Active ({activeTodosCount})</button>

          <button className={`hover:bg-gray-700
           px-6 py-2 rounded-lg border border-gray-700 cursor-pointer
           ${filter === 'completed' ? 'bg-white text-black transition-all duration-75 ease-in hover:bg-white' : ''}
           `}
           onClick={() => setFilter('completed')}
            >Completed ({completedTodosCount})</button>
        </div>
        <div className='mt-8 flex flex-col gap-2'>
          <Todos todos={getFilteredTodos()}/>
        </div>
      </div>

    </div>
  )
}

export default App
