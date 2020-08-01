import React, { useState, Fragment } from "react";
import "./TodoList.css";

// Icons
import IconCheckFalse from "@material-ui/icons/CheckBoxOutlineBlank";
import IconCheckTrue from "@material-ui/icons/CheckBoxOutlined";
import IconDelete from "@material-ui/icons/DeleteOutlined";
import IconEdit from "@material-ui/icons/EditOutlined";
import TextField from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";

function TodoList({ todo, updateNewTodo, deleteTodo }) {
    console.log("Todolist");
    const [input, setInput] = useState(todo.text);
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleCheck = () => {
        updateNewTodo({
            ...todo,
            isDone: !todo.isDone,
        });
    };

    const handleShowInput = () => {
        setShow(true);
    };

    const handleSave = () => {
        updateNewTodo({
            ...todo,
            text: input,
        });
        setShow(false);
    };

    const handleDelete = () => {
        console.log(todo.id);
        deleteTodo(todo.id);
    };

    const IconCheck = todo.isDone ? <IconCheckTrue /> : <IconCheckFalse />;
    return (
        <div
            className={`todoList ${todo.isDone ? "todoList__check-true" : ""}`}
        >
            {/* 
                Edit: true => input 창 보임
                Edit: fasel => Todo 목록 보임
            */}
            {show ? (
                <Fragment>
                    <TextField
                        className="todoList__input"
                        color="primary"
                        label="수정사항"
                        value={input}
                        onChange={handleChange}
                        variant="outlined"
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleSave}
                    >
                        저장
                    </Button>
                </Fragment>
            ) : (
                <Fragment>
                    <div className="todoList__check" onClick={handleCheck}>
                        {IconCheck}
                        <h3 className="todoList__text">{input}</h3>
                    </div>
                    <div className="todoList__buttons">
                        <IconEdit onClick={handleShowInput} />
                        <IconDelete onClick={handleDelete} />
                    </div>
                </Fragment>
            )}
        </div>
    );
}

export default React.memo(TodoList);
