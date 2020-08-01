import React, { useState } from "react";
import "./TodoInput.css";

// Mui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function TodoInput({ insertNewTodo }) {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        insertNewTodo(todo);
    };
    return (
        <form className="todoInput" onSubmit={handleSubmit}>
            <TextField
                className="todoInput__input"
                label="할일 입력"
                value={todo}
                onChange={handleChange}
                required
            />
            <br />
            <br />

            <Button
                className="todoInput__button"
                variant="contained"
                color="primary"
                type="submit"
            >
                추가하기
            </Button>
        </form>
    );
}

export default React.memo(TodoInput);
