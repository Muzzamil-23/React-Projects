import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    isEditable: false,
    editTodoId: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, { payload: { text } }) => {
            const todo = {
                id: nanoid(),
                text: text,
                completed: false
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        },
        updateTodo: (state, {payload: {id, text}}) => {
            state.isEditable = !state.isEditable
            state.todos = state.todos.map(todo => (todo.id === id ? {...todo, text}: todo))
            state.isEditable = false
            state.editTodoId = null
        },
        toggleComplete: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        setEditTodoId: (state, action) => {
            state.editTodoId = action.payload
        },
        setIsEditable: (state, action) => {
            state.isEditable = action.payload
        }
    }
}
)

export const { addTodo, removeTodo, updateTodo, toggleComplete, setEditTodoId, setIsEditable} = todoSlice.actions

export default todoSlice.reducer