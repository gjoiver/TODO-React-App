import React from "react";
import {ImCheckboxUnchecked,ImCheckboxChecked} from 'react-icons/im'
import {TiDeleteOutline} from 'react-icons/ti'
import './TodoIcon.css'

function TodoIcon(value){
    if(!value.value){
        return (<ImCheckboxUnchecked/>)
    }else{
        return (<ImCheckboxChecked/>)
    }
    
}
function DeleteIcon(){
    return (<div className="DeleteIcon"><TiDeleteOutline/></div>)
}

export {TodoIcon, DeleteIcon}

