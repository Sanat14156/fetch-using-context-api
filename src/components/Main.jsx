import React from 'react'
import { useEffect,createContext } from 'react';
import { useState } from 'react';


export const userStore=createContext("default");
const Main = (props) => {
   let [user,setUser]=useState([]);

   useEffect(()=>{
    let userData= async()=>{
       let res=await fetch(`https://jsonplaceholder.typicode.com/users`);
       let data=await res.json();
       console.log(data);
       setUser(data);
    }
    userData();
   },[])

  return (
    <userStore.Provider value={{user}}>
        {props.children}
    </userStore.Provider>
  )
}

export default Main