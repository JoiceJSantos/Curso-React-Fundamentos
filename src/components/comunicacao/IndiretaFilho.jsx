import React from 'react'

export default props =>{
    const cb = props.clicando
    const geraNerd = () => Math.random() > 0.5
    const geraIdade = () => parseInt(Math.random()* (30))+ 30
    return(
        <div>
            <div>Filho</div>
            <button onClick={ _=>cb('Joice', geraIdade(), geraNerd())}>
                Fornecer Informações
            </button>
        </div>
        
    )
}