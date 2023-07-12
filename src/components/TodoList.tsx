import React from 'react';
import TodoItem from './TodoItem';
import s from './TodoList.module.css'

type Todo = {
    id: number
    text: string
    completed: boolean
}

type TodoListProps = {
    todos: Todo[]
    onToggle: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
    return (
        <ul className={s.list}>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
};

export default TodoList;