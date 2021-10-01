// This component represent every TODO-Items inside of our List
import React, {useState} from "react";

const Todo = () => {

    const [istEditing, setIstEditing] = useState(false);  // By default we will like to see the Todo-items

    const handleDOubleClick = () =>{
        setIstEditing(true);
    };

    const handleInputKeyDown = (e) =>{
        const key = e.keyCode;

        if (key === 13 || key === 27){ // Enter and Exist(ESC) keycodes
            setIstEditing(false);
        }
    };
    
    return (
        // {}= indicate a js expression it is use only if i want to whrite a JS inside of a jsx context
        // If istEditing = true render the input-tag otherwise render a row 
        istEditing ?
            <div className= "row" onDoubleClick={handleDOubleClick}>
                <div className= "column seven wide">
                    <div className= "ui input fluid">
                        <input onKeyDown={handleInputKeyDown}></input>
                    </div> 
                </div>                             
            </div>
            :
            <div className= "row" onDoubleClick={handleDOubleClick}>
                <div className= "column five wide">
                    <h2> Test </h2>
                </div>

                <div className= "column one wide">
                    <button className= "ui button circular icon green"><i className= "check icon"></i></button>
                </div>

                <div className= "column one wide">
                    <button className= "ui button circular icon red"><i className= "remove icon"></i></button>
                </div>
            </div>
        
    );
};

export default Todo;