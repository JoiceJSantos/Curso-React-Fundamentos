import React from 'react'

export default function ComParamentro(props){
    
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                A aluna 
                <strong> {props.aluno} </strong>
                tem nota
                <strong> {props.nota}</strong></p>
        </div>
    )
}