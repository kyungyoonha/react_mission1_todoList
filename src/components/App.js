import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import Header from "./Header";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import TodoInfo from "./TodoInfo";
import { constantTodos } from "../constants";

function App() {
    const [todos, setTodos] = useState(constantTodos);
    const [todoEdit, setTodoEdit] = useState({});
    const nextId = useRef(constantTodos.length + 1);

    // UPDATE
    const onEdit = useCallback((newTodo) => {
        if (!newTodo.id) {
            setTodos((state) => [
                ...state,
                {
                    id: nextId.current,
                    value: newTodo.value,
                    isDone: false,
                },
            ]);
            nextId.current += 1;
        } else {
            setTodos((state) =>
                state.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
            );
        }
        setTodoEdit({});
    }, []);

    // DELETE
    const onDelete = useCallback((id) => {
        setTodos((state) => state.filter((todo) => todo.id !== id));
    }, []);

    const onToggle = useCallback((todo) => {
        setTodoEdit(todo);
    }, []);
    return (
        <div className="app">
            <div className="app__container">
                <Header />
                <TodoInsert onEdit={onEdit} todoEdit={todoEdit} />
                <TodoInfo todos={todos} />
                <div className="app__content">
                    {todos.map((todo) => (
                        <TodoList
                            key={todo.id}
                            todo={todo}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            onToggle={onToggle}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
