import React, {useState} from "react";

const Form = ({addTodoItem}) => {
    //Declare a new state varieable 
    const [inputValue, setInputvalue] = useState("");

    //create event handler
    const handleInputChange = (e) => {
        setInputvalue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(); //add item without the whole page refreshing 

        if(inputValue.trim() === ""){
           return; 
        }else{
            addTodoItem({title: inputValue, completed: false});
        }        
        setInputvalue(""); // Emtying the input
    };


    return (
        <form className="ui form" onSubmit= {handleFormSubmit}>
            <div className = "ui grid center aligned"> {/*la class center aligned centre  */}
                <div className= "row">
                    <div className = "column five wide"> {/*size of column it is 16 columns */}
                        <input
                            value = {inputValue} 
                            onChange = {handleInputChange}
                            type= "text" 
                            placeholder= "Enter something to do...">
                        </input> 
                    </div>

                    <div className= "column one wide"> 
                        {/* <button type="submit">+</button> */}
                        <button type= "submit" className= "ui button circular icon green"><i className= "white plus icon"></i></button>
                    </div>
                </div>
            </div>
        </form>
    );

}

export default Form;