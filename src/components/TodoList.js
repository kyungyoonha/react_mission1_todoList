import React from "react";

// Icons
import IconCheckFalse from "@material-ui/icons/CheckBoxOutlineBlank";
import IconCheckTrue from "@material-ui/icons/CheckBoxOutlined";
import IconDelete from "@material-ui/icons/DeleteOutlined";
import IconEdit from "@material-ui/icons/EditOutlined";

function TodoList({ todo, onToggle, onEdit, onDelete }) {
    const handleEdit = () => {
        onEdit({
            ...todo,
            isDone: !todo.isDone,
        });
    };

    const handleToggle = () => {
        onToggle(todo);
    };

    const handleDelete = () => {
        onDelete(todo.id);
    };

    return (
        <div
            className={`todoList ${
                todo.isDone ? "todoList__checkboxTrue" : ""
            }`}
        >
            <div className="todoList__checkbox" onClick={handleEdit}>
                {todo.isDone ? <IconCheckTrue /> : <IconCheckFalse />}
                <h3 className="todoList__text">{todo.value}</h3>
            </div>
            <div className="todoList__buttons">
                <IconEdit onClick={handleToggle} />
                <IconDelete onClick={handleDelete} />
            </div>
        </div>
    );
}

export default React.memo(TodoList);
