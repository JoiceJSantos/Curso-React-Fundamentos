import  React from 'react'
import DiretaFilho from './DiretaFilho'

export default props =>{
    return(
        <div>
            <DiretaFilho nome="João" idade={40} nerd={true}/>
            <DiretaFilho nome="Joice" idade={38} nerd={false}/>
        </div>
    )
}