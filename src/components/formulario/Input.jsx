import React, { useState } from 'react'
import './Input.css'

export default props =>{

    const [ valor, setValor]= useState("Inicial")

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return(
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{display:'flex', flexDirection:'column', marginTop: '3px'}}>
                <input  value ={valor} onChange={quandoMudar}/>
                <input style={{marginTop:'15px'}} value ={valor} readOnly/>
                <input style={{marginTop:'15px'}} value ={undefined}/>
            </div>
           
        </div>
    )
}