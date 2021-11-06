import React from "react";
import './TodoItems.css';
import {TodoIcon, DeleteIcon} from '../TodoIcon'
function TodoItems(props){
    
   
 return (
     <li className="TodoItem">
         
         <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}><TodoIcon value={props.completed}/></span>
         <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
         <span className="Icon Icon-delete" onClick={props.onDelete}><DeleteIcon/></span>
     </li>
     )
}

export {TodoItems}