import React, { useState, useCallback, useEffect } from "react";

// Mui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function TodoInsert({ onEdit, todoEdit }) {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        setTodo(todoEdit);
    }, [todoEdit]);

    const handleChange = useCallback((e) => {
        const value = e.target.value;
        setTodo((state) => ({
            ...state,
            value,
        }));
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            onEdit(todo);
        },
        [onEdit, todo]
    );
    return (
        <form className="todoInsert" onSubmit={handleSubmit}>
            <TextField
                className="todoInsert__input"
                label="할일 입력"
                value={todo.value || ""}
                onChange={handleChange}
                required
            />
            <br />
            <br />

            <Button
                className="todoInsert__button"
                variant="contained"
                color={todo.id ? "secondary" : "primary"}
                type="submit"
            >
                {todo.id ? "수정하기" : "추가하기"}
            </Button>
        </form>
    );
}

export default React.memo(TodoInsert);
