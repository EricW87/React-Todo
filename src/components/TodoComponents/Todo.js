import React from "react";

const Todo = props => {
    let className = "task";
    if(props.item && props.item.completed)
        className = "taskComplete";

    return (
        <div 
            className = {className}
            onClick={e => props.toggleItem(props.item.id)}
        >
            {props.item.task}
        </div>
    );
}

export default Todo;