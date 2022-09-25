import React from "react"

function Heading(){
    return(<h1 className="Heading">This is a Heading</h1>)
    //we mentioned css class Heading in index.css
    // despite not importing index.css here
    //still it will work
    //bcoz index.css is imported in index.js 
    // & this Heading tag will also be imported in index.js via App.js
}
export default Heading