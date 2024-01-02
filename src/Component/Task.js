import React, { useState } from 'react'
const Task=()=>{
    let [sign,setSign]=useState("sign in")
    let [bool,setBool]=useState(false)
    let [para,setPara]=useState("please login")
    const signin=()=>{
        setBool(true)
        setSign("sign Out")
       
    }
    const signout=()=>{
        setPara("Welcome")
    }
    return(
        <div>
            {
                bool?<p>{para}</p>:""
            }
            {
                bool? <button onClick={signout}>{sign}</button>: <button onClick={signin}>{sign}</button>
            }
           
        </div>
    )
}
export default Task