import React, { useState, useCallback, useEffect } from "react";

// Mui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function TodoInsert({ onEdit, todoEdit }) {
    const [todo, setTodo] = useState({});
    // 주의사항
    // useState() default value not working
    // useState()로 default 값 넘겨줘도 처음 한번 외에는 반영되지 않는다.
    // useEffect()를 써서 변경해줘야한다.
    // 참고 => https://medium.com/@digruby/do-not-use-props-as-default-value-of-react-usestate-directly-818ee192f454

    useEffect(() => {
        setTodo(todoEdit);
    }, [todoEdit]);

    // Input Value
    const handleChange = useCallback((e) => {
        const value = e.target.value;
        setTodo((state) => ({
            ...state,
            value,
        }));
    }, []);

    // Edit
    const handleEdit = useCallback(
        (e) => {
            e.preventDefault();
            onEdit(todo);
        },
        [onEdit, todo]
    );
    return (
        <form className="todoInsert" onSubmit={handleEdit}>
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
