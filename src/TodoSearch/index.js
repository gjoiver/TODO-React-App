import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    
    const onSearchButton=(event)=>{
     let valueFound=event.target.value
     console.log(valueFound);
     setSearchValue(valueFound)
    }
return (<input 
 className="TodoSearch"
 placeholder="Cebolla" 
 value={searchValue}
 onChange={onSearchButton}/>)

}

export {TodoSearch}