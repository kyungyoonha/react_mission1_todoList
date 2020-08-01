import React, { useState, Fragment } from "react";
import "./TodoList.css";

// Icons
import IconCheckFalse from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import IconCheckTrue from "@material-ui/icons/CheckBoxOutlined";
import IconDelete from "@material-ui/icons/DeleteOutlined";

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

    return (
        <div className="todoList">
            {!show && (
                <div className="todoList__check" onClick={handleCheck}>
                    {todo.isDone ? (
                        <IconCheckTrue color="primary" />
                    ) : (
                        <IconCheckFalse />
                    )}
                    <h3 className={todo.isDone ? "todoList__check-true" : ""}>
                        {input}
                    </h3>
                    <button onClick={handleShowInput}>수정</button>
                    <IconDelete onClick={handleDelete} />
                </div>
            )}

            {show && (
                <Fragment>
                    <input onChange={handleChange} value={input} />
                    <button onClick={handleSave}>저장</button>
                </Fragment>
            )}
        </div>
    );
}

export default React.memo(TodoList);
