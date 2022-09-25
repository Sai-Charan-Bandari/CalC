import React, { useEffect, useState } from "react";
function TestBtn(){
    const [k,setK]=useState(10)
    const [k1,setK1]=useState(10)
    useEffect(()=>{
        // console.log("changed something")
        console.log("the value of k1 is "+k1)
    },[k1])
    return(<>
    <button onClick={()=>{setK(k+1);}}>{k}</button>
    <button onClick={()=>{
        setK1(k1+1);
        alert("the value of k1 is "+k1)
        }}>{k1}</button>
    </>)
}
export default TestBtn