import React from 'react'
function Childcomponent(props){
    return(
        <div>
            <button onClick={props.greetHandler()}>Greet parent</button>
            {/* <button>Greet parent</button> */}
        </div>
    )
}
export default Childcomponent