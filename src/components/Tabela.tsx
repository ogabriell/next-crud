import Cliente from '../core/Cliente'
import {EditIcon} from '../components/Icons'
import {TrashIcon} from '../components/Icons'

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente:Cliente) => void
    clienteExcluido?: (cliente:Cliente) => void
}
export default function Tabela(props){

    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido

    function renderizarCabecalho(){
        return(
                <tr>
                    <th className={`text-left p-2`}>Codigo</th>
                    <th className={`text-left p-2`}>Nome</th>
                    <th className={`text-left p-2`}>Idade</th>
                    {exibirAcoes ? <th className={`text-center p-2`}>Ações</th> : false} 
                </tr>
        )
    }

        function renderizarDados(){
            return props.clientes?.map((cliente,i)=>{
                return(
                    <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-lime-50' : 'bg-lime-100' }`}>
                        <td className={`text-left p-2`}>{cliente.id}</td>
                        <td className={`text-left p-2`}>{cliente.nome}</td>
                        <td className={`text-left p-2`}>{cliente.idade}</td>
                        {exibirAcoes ? renderizarIcons(cliente) : false} 
                    </tr>
                )
            })
        }

        function renderizarIcons(cliente: Cliente){
            return(
                <td className={`flex justify-center`}>
                    {props.clienteSelecionado ? (
                        <button onClick={()=> props.clienteSelecionado?.(cliente)} className={`flex justify-center items-center rounded-full hover:bg-white p-2 m-1`}>{EditIcon}</button>
                    ):false}
                    {props.clienteExcluido ? (
                        <button onClick={()=> props.clienteExcluido?.(cliente)} className={`flex justify-center items-center rounded-full hover:bg-white p-2 m-1`}>{TrashIcon}</button>
                    ):false}
                </td>
            )
        }
    return(
        <table className={`w-full`}>
            <thead className={`bg-gradient-to-r from-lime-200 to-lime-400 justify-start`}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}