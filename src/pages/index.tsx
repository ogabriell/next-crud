import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";


export default function Home() {

  const { cliente, clienteExcluido, clienteSelecionado, salvarCliente, clientes, novoCliente, tabelaVisivel, exibirTabela} = useClientes()

  return (
    <div className={`bg-lime-100 h-screen flex justify-center items-center`}>
      <Layout titulo="Crud">
      {tabelaVisivel ? (
        <>
        <div className={`flex justify-end`}>
          <Botao className={`mb-4 flex justify-end bg-lime-200`} onClick={novoCliente}>Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </>
      ):(
        <Formulario cliente={cliente} cancelado={()=> exibirTabela()} clienteMudou={salvarCliente}></Formulario>
      )}
      </Layout>
    </div>
  )
}
