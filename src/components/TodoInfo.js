import React from "react";
import "./TodoInfo.css";

// icons
import LinearProgress from "@material-ui/core/LinearProgress";

function TodoInfo({ todos }) {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone === true).length || 0;
    const percent = Math.round((doneCount / totalCount) * 100);

    return (
        <div className="todoInfo">
            {/* 진행도 */}
            <div className="todoInfo__progress">
                {`${doneCount} / ${totalCount} => ${percent} %`}
                <LinearProgress variant="determinate" value={percent} />
            </div>
        </div>
    );
}

export default TodoInfo;
