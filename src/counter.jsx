import { useState } from "react"

export default function Counter(){
    // const [] = useState;  must be use 
    const [count, setCount] = useState(0);
    const handelAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    const handelReduce = () =>{
        const reduceCount = count - 1;
        if(reduceCount >= 0){
            setCount(reduceCount);
        }
        
    }
    return(
        <div style={{border: '2px solid yellow'}}>
            <h3>Counter:{count}</h3>
            <button
             onClick={handelAdd}>Add</button>
            <button onClick={handelReduce}>Reduce</button>
        </div>
    )
}