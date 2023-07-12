import React from 'react';
import s from './TodoItem.module.css'

type Todo = {
    id: number
    text: string
    completed: boolean
}


type TodoItemProps = {
    todo: Todo
    onToggle: (id: number) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
    return (
        <li className={s.items}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
        </li>
    );
};

export default TodoItem;