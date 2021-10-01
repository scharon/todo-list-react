import React, {useState} from "react";

const Form = () => {
    //Declare a new state varieable 
    const [inputValue, setInputvalue] = useState("");

    //create event handler
    const handleInputChange = (e) => {
        setInputvalue(e.target.value);
    }

    return (
        <form className="ui form">
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