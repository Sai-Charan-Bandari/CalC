//This calc can calulate for positive integers
//can have only one operator
//no '()' can be used
import React, { useEffect, useState } from "react";
function CalcButton(props){
    const [prevVal,setprevVal]=useState()
    useEffect(()=>{
        console.log("prevVal = "+prevVal)
    })
//VIP:
// basically we defined a prevVal variable for every individual component(button) 
//so each one is initialized with its prevVal as undefined
//but for the '=' button we calculate the result and store it in its prevVal variable
//so this value of prevVal is not available in all other buttons
//so we can access this prevVal only while using '=' button
//hence i used the combination '^'+'=' to print prevVal
    function returnval(){
      const D=document.querySelector('#t1')
      let txt=D.innerHTML;

      if(props.k=='=' && txt.substring(txt.length-2,txt.length)=='^^'){
        txt=txt.substring(0,txt.length-2)
        console.log('bsc')
        D.innerHTML='DESIGNED BY BSC'
        setTimeout(()=>D.innerHTML=txt,2000)
      }else if(props.k=='=' && txt.charAt(txt.length -1)=='^'){
        console.log('prevVal is '+prevVal)
       txt=txt.substring(0,txt.length-1)
        D.innerHTML=txt+prevVal
      }else if(props.k=='='){
        let i=0;
        for(;i<txt.length;i++){
            if(txt[i]=='+') {
                break;
            } else if(txt[i]=='-') {
                break;
            } else if(txt[i]=='*') {
                break;
            }else if(txt[i]=='/') {
                break;
            }else if(txt[i]=='%') {
                break;
            }else if(txt[i]=='^') {
                break;
            }
        }
        //if not operator is found we return back
        if(i==txt.length)
        return
        //else we can continue
        let v1=parseFloat(txt.substring(0,i))
        let v2=parseFloat(txt.substring(i+1,txt.length))
        switch(txt.charAt(i)){
            case '+': v2=v1+v2  ;break;
            case '-': v2=v1-v2  ;break;
            case '*': v2=v1*v2  ;break;
            case '/': v2=v1/v2  ;break;
            case '%': v2=v1%v2  ;break;
            case '^': v2=Math.pow(v1,v2)  ;break;
        }
        if(v2+''=='NaN')
        D.innerHTML=''
        else{
            D.innerHTML=v2+''
            setprevVal(v2)
            //make sure u dont write any printing statements here
            //bcoz they will get executed before setprevVal()..use useEffect()
        }
      }else if(props.k=='C'){
        D.innerHTML=''
      }else if(props.k=='<[x]'){
        D.innerHTML=txt.substring(0,txt.length -1)
      }else{
          D.innerHTML+=props.k;
      }
    };
   
    return(
        <>
        <button className="calcbutton" onClick={returnval}>{props.k}</button>
        </>
    )
}

export { CalcButton};
