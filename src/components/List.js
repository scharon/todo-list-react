import React from "react";
import Todo from "./Todo";

const List = ({list, removeTodoItem}) => {
    //Item refer to each element of the Todolist
    const renderedList = list.map((currentItem) => <Todo title= {currentItem.title} completed= {currentItem.completed} removeTodoItemProp= {(e) => removeTodoItem(currentItem.id)} key= {currentItem.title}></Todo>); // puisque le title est unique pour l'instant 

    return(
        <div className= "ui grid center aligned">
            {/* <Todo title="Test #1"></Todo> */}
            {renderedList}
        </div>
    );
};

export default List;