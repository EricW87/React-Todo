import React from "react";
import Todo from "./Todo.js";

const TodoList = props => {
    let list = "";

    const filteredList = (search, list) => {
        return list.filter( (item) => 
             search.toLowerCase() === item.task.toLowerCase()
        );
     };

    if(props.search === "")
        list = props.list;
    else
        list = filteredList(props.search, props.list);



    return (
        <div className="list">
            {list.map(item => {
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
