import React from "react";

function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false)
    const [loading, setLoading]=React.useState(true)
    const [item, setItem]=React.useState(initialValue);
     
    React.useEffect(()=>{
      setTimeout(()=>{
          try{
            const localeStorageItem = localStorage.getItem(itemName);
            let parsedItem;
          
            if(!localeStorageItem){
              localStorage.setItem(itemName, JSON.stringify(initialValue))
              parsedItem=initialValue
            }else{
              parsedItem= JSON.parse(localeStorageItem)
            }
            setItem(parsedItem)
            setLoading(false)
          }catch(error){
            setError(error)
          }
      },3000)
    },[])
  
    
  
    const saveItem = (newItem)=>{
      try{
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName,stringifiedItem)
      setItem(newItem)
      }catch(error){
        setError(error)
      }
   }
  
   return {
     item,
     saveItem,
     loading,
     error
   }
  }

  export { useLocalStorage };