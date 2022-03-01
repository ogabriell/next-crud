import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps{
    cliente:Cliente
    clienteMudou?: (cliente: Cliente)=>void
    cancelado?: ()=>void
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id ? (
                <Entrada texto="Codigo" valor={id} somenteLeitura></Entrada>
                ): false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome}></Entrada>
            <Entrada texto="Idade" valor={idade} tipo="number" valorMudou={setIdade}></Entrada>
            <div className={`flex justify-end`}>    
                <Botao  className={`bg-blue-400 mr-2 p-2`} 
                        onClick={()=>props.clienteMudou?.(new Cliente(nome,idade,id))} >{id ? 'Alterar':'Salvar'}</Botao>
                <Botao className={`bg-red-400 p-2`} onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    )
}