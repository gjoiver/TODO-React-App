import React from "react";

import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue} ){
    
    
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