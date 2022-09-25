import React from 'react';
import {CalcButton} from './Calc';
import './App.css';

let arr=[7,8,9,'+',4,5,6,'-',1,2,3,'/','.',0,'*','^','C','%','<[x]','=']
function SetBtn(obj){
  return(<CalcButton k={obj} key={obj} />)
  //key is like id of a tag
  //it is a good practice to provide these key values to each element created in map
 }

function App() {
  return (
    <>
    <div className="outerbox" >
    <div id='t1' contentEditable='true'></div>
    {arr.map(SetBtn)}
    {/* arr.map sends each element of the array to the function specified */}
    </div>
    </>
  );
}
export default App;

