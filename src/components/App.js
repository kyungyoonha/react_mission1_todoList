import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoInfo from "./TodoInfo";

const defualtTodos = [
    {
        id: 1,
        text: "Todo List Application 만들기",
        isDone: true,
    },
    {
        id: 2,
        text: "알고리즘 공부",
        isDone: false,
    },
    {
        id: 3,
        text: "기술면접",
        isDone: false,
    },
];

function App() {
    const [todos, setTodos] = useState([]);
    const nextId = useRef(defualtTodos.length + 1);

    useEffect(() => {
        setTodos(defualtTodos);
    }, []);

    const insertNewTodo = useCallback((todo) => {
        setTodos((state) => [
            ...state,
            {
                id: nextId.current,
                text: todo,
                isDone: false,
            },
        ]);

        nextId.current += 1;
    }, []);

    const updateNewTodo = useCallback((newTodo) => {
        setTodos((state) =>
            state.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
        );
    }, []);

    return (
        <div className="app">
            <div className="app__container">
                <div className="app__title">
                    <h1>React</h1>
                    <h2 style={{ color: "#ffffff" }}>Todo 리스트 만들기</h2>
                </div>

                <TodoInput insertNewTodo={insertNewTodo} />
                <TodoInfo todos={todos} />
                <div className="app__list">
                    {todos &&
                        todos.map((todo) => (
                            <TodoList
                                key={todo.id}
                                todo={todo}
                                updateNewTodo={updateNewTodo}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
