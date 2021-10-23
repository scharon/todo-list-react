// This component represent every TODO-Items inside of our List
import React, {useState} from "react";

const Todo = ({title, completed, removeTodoItemProp, editTodoItemProp}) => {

    const [istEditing, setIstEditing] = useState(false);  // By default we will like to see the Todo-items
    const [value, setValue]  = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState(false);

    const handleDOubleClick = () =>{
        setIstEditing(true);
    };

    //
    const handleInputKeyDown = (el) =>{
        const key = el.keyCode;

        if (key === 13 ){ // Enter and Exist(ESC) keycodes
            editTodoItemProp({title: tempValue});
            setValue(tempValue); // original Value = tempValue hat our modifications 
            setIstEditing(false);
        }else if (key === 27){
            setValue(value); // set to the initial value 
            setIstEditing(false);
        }
    };

    //
    const handleInputOnChange = (eo) =>{
        setTempValue(eo.target.value);
    };

    //ability to mark the todo-item as completed
    const handleButtonClick = () =>{
        setCompleted((oldCompleted) => {
            const newState = !oldCompleted;
            editTodoItemProp({completed: newState});
            return newState;
        }); // recieving the updated version of the completed setvariable 
    };
    
    return (
        // {}= indicate a js expression it is use only if i want to whrite a JS inside of a jsx context
        // If istEditing = true render the input-tag otherwise render a row 
        <div className= "row" >
            {
            istEditing ?
                
                <div className= "column seven wide">
                    <div className= "ui input fluid">
                        <input onChange={handleInputOnChange} onKeyDown={handleInputKeyDown} autoFocus= {true} value= {tempValue}></input>
                    </div> 
                </div>                             
               
                :
                <>
                    <div className= "column five wide" onDoubleClick={handleDOubleClick}>
                        <h2 className= {"ui header" + (completedState ? " green" : "")}> {value} </h2>
                    </div>

                    <div className= "column one wide">
                        <button 
                            className= {"ui button circular icon " + (completedState ? " grey" : "green")}
                            onClick= {handleButtonClick}
                        >
                            <i className= "check icon"></i>
                        </button>
                    </div>

                    <div className= "column one wide">
                        <button 
                            className= "ui button circular icon red"
                            onClick={removeTodoItemProp}
                        >
                            <i className= "remove icon">
                        </i></button>
                    </div>
                </>
            }
        </div>
        
    );
};

export default Todo;