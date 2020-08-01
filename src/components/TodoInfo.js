import React from "react";
import "./TodoInfo.css";

// MUI
import { withStyles } from "@material-ui/core/styles";

// icons
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor:
            theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: "#1a90ff",
    },
}))(LinearProgress);

function TodoInfo({ todos }) {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone === true).length || 0;
    const percent = Math.round((doneCount / totalCount) * 100);

    return (
        <div className="todoInfo">
            {/* 진행도 */}
            <div className="todoInfo__progress">
                <BorderLinearProgress variant="determinate" value={percent} />
                <h3 className="todoInfo__text">
                    {totalCount ? percent + " %" : "일정을 추가해주세요."}
                </h3>
            </div>
        </div>
    );
}

export default TodoInfo;
