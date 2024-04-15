import React from 'react'
function Functionclick(){
    function clickhandler(){
        console.log("button clicked")
    }
    return(
        <div>
            <button onClick={clickhandler}>click</button>
        </div>
    )
}
export default Functionclick;