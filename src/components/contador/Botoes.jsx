import React from 'react'

export default props =>{
    return(
        <div>
            <button onClick={props.setDec}>-</button><span>Click</span>
            <button onClick={props.setInc}> +</button>
        </div>
    )
}