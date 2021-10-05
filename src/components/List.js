import React from "react";
import Todo from "./Todo";

const List = ({list}) => {
    //Item refer to each element of the Todolist
    const renderedList = list.map((currentItem) => <Todo title= {currentItem.title} completed= {currentItem.completed} key= {currentItem.title}></Todo>); // puisque le title est unique pour l'instant 

    return(
        <div className= "ui grid center aligned">
            {/* <Todo title="Test #1"></Todo> */}
            {renderedList}
        </div>
    );
};

export default List;