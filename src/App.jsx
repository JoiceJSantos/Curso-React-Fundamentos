import "./App.css"
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Fragmento from './components/basicos/Fragmento'
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from "./components/contador/Contador"
import Mega from "./components/mega/Mega"




export default _ =>
    <div className="App">

        <h1>Fundamentos React!</h1>

        <div className="Cards">
            <Card titulo="#01 - Primeiro Componente"color="#588C73">
                <Primeiro></Primeiro>
            </Card>
            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                titulo="Situação do Aluno"
                aluno="Joice" nota="9.8" />
            </Card>
            <Card titulo="#03 - Com fragmento"color="#E94C6F">
                <Fragmento></Fragmento>
            </Card>
            
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio max={60} min={1}></Aleatorio>
            </Card>
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Amaral">
                    <FamiliaMembro nome="Joice"/>
                    <FamiliaMembro nome="João"/>
                    <FamiliaMembro nome="Fátima"/>
                </Familia>
            </Card>
            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#07 - Desafio Repetição" color="#6959CD">
                <TabelaProdutos></TabelaProdutos>
            </Card>
           
            <Card titulo="#08 - Renderização Condicional" color="#8A0886">
                <UsuarioInfo usuario = {{nome:'Joice'}}/>     
                {/* <UsuarioInfo usuario = {{email:'joice@hotmail.com'}}/>             */}
                <ParOuImpar numero={20}></ParOuImpar>
            </Card>
                       
            <Card titulo="#09 - Comunicação Direta" color="#8B0000">
                <DiretaPai></DiretaPai>
            </Card>
            
            <Card titulo="#10 - Comunicação Indireta" color="#6B8E23">
                <IndiretaPai></IndiretaPai>
            </Card>
            
            <Card titulo="#11 - Componente Controlado (INPUT)" color="	#FF8C00">
                <Input></Input>
            </Card>
            
            <Card titulo="#12 - Contador" color="#FF1493">
                <Contador numeroInicial={10}></Contador>
            </Card>
            
            <Card titulo="#13 - Desafio Mega Sena" color="#8A2BE2">
                <Mega></Mega>
            </Card>
            
        </div>
    </div>
