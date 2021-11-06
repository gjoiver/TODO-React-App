import React from "react";
import './CreateTodoButton.css'


function CreateTodoButton(props){
    
    const oneClickTodoButton=()=>{
        props.setOpenModal(prevState => !prevState)
        
    }
    
 return (<button 
    className="CreateTodoButton"
    onClick={oneClickTodoButton}
    >+
    </button>)
}

export {CreateTodoButton}