import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo",
            isChecked: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCheck: (id) => {}
})

export const TodoProvider = TodoContext

export const useTodo = () => {
    return useContext(TodoContext)
}