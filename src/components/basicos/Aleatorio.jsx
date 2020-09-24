import React from 'react'

export default (props)=>{
    const {min, max} = props
    const aleatorio = parseInt(Math.random()*(max- min))+min
    return(
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Mínimo: {min} - Máximo: {max}</strong>
            </p>
            <p> 
                <strong> Valor sorteado: {aleatorio}</strong>
            </p>
            
        </div>
    )
}
    
    