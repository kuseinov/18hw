import axios from "axios";
import { useEffect, useState } from "react"


function useFetch(list,url) {
  const [todos, setTodos] = useState(list);

  const addItem= async(newItem)=>{
    try{
      const response=await fetch(url,{
        method:'POST',
        headers:{
          'content-Type':'application/json'
        },
        body:JSON.stringify(newItem)
      })
    }catch(error){

    }
    getTodo()
  }

  const getTodo=async()=>{
    try{
      const response=await fetch(url)
      const data=await response.json()
      const loding=[]
      for (const key in data){
        loding.push({
          id:key,
          text:data[key].text
        })
      }
      setTodos(loding)
    }catch(error){
      console.log(error);
    }
  }
  const removeItemHandler=async(todoId)=>{
    try{
      await fetch(`https://todo-a3c5e-default-rtdb.firebaseio.com/todo/${todoId}.json`,{
        method:'DELETE',
      })
    }catch(error){
      console.log(error);
    }
    getTodo()
  }


  const getData = async () => {
    const response = await axios.get()
    const result = response.data
  }
  return{
    todos,
    addItem,
    getTodo,
    removeItemHandler
  }
}

export default useFetch