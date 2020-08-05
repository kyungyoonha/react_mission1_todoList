import React from "react";
import ProgressBar from "../util/ProgressBar";

function TodoProgress({ todos }) {
    console.log("todoProgress");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone === true).length || 0;
    const percent = Math.round((doneCount / totalCount) * 100);

    return (
        <div className="todoInfo">
            <div className="todoInfo__progress">
                <ProgressBar variant="determinate" value={percent} />
                <h3 className="todoInfo__text">
                    {totalCount ? percent + " %" : "일정을 추가해주세요."}
                </h3>
            </div>
        </div>
    );
}

export default React.memo(TodoProgress);
