import React from "react";
import Todo from "./Todo.js";

const TodoList = props => {
    return (
        <div className="list">
            {props.list.map(item => {
                return (
                    <Todo 
                        item={item}
                        toggleItem={props.toggleItem}
                        key={item.id} 
                    />
                )
            })}
        </div>
    );
}

export default TodoList;
