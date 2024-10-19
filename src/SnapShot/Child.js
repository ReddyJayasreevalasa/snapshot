import { useContext, useState } from "react"
import { MyContext } from "./ContextFile"
import "./index.css"
export default function Child(){
    const {data,getFilter}=useContext(MyContext)
    const [type,setType]=useState("mountain")
    const OnChange=(e)=>{

    }
    const OnClick=(type)=>{
        setType(type)
        getFilter(type)
    }
    return <div className="child-main-div">
        <input />
        <button onClick={()=>OnClick("mountain")} style={{background:type==="mountain"?'green':'red'}}>Mountain</button>
        <button onClick={()=>OnClick("beaches")} style={{background:type==="beaches"?'green':'red'}}>Beaches</button>
        <button onClick={()=>OnClick("birds")} style={{background:type==="birds"?'green':'red'}}>Birds</button>
        <button onClick={()=>OnClick("food")} style={{background:type==="food"?'green':'red'}}>Food</button>
        <div className="flex-display">
        {data.map((val)=>{
            return <img src={val.url}></img>
        })}
        </div>
    </div>
}