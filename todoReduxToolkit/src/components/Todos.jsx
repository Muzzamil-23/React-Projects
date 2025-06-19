import React from 'react'
import TodoElement from './TodoElement'

const Todos = ({todos}) => {
    return (
        <>
            {
                todos.map(todo => (
                    <TodoElement key={todo.id} todo={todo} />
                ))
            }
        </>
    )
}

export default Todos