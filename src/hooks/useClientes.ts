import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../firebase/db/ColecaoCliente";
import { useEffect, useState } from "react";
import useTabela from "./useTabela";

export default function useClientes(){

    const { tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela } = useTabela()
    const repo: ClienteRepositorio = new ColecaoCliente()
  
  function clienteSelecionado(cliente:Cliente){
    setCliente(cliente)
    exibirFormulario()
  }
  async function clienteExcluido(cliente:Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }
  async function salvarCliente(cliente:Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }
  function novoCliente(){
    setCliente(Cliente.vazio)
    exibirFormulario()
  }
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  useEffect(obterTodos, [])
  
  function obterTodos(){
    repo.obterTodos().then(clientes=>{
      setClientes(clientes)
      exibirTabela()
    })
  }
  return{
      cliente,
      clientes,
      novoCliente,
      salvarCliente,
      clienteExcluido,
      clienteSelecionado,
      obterTodos,
      tabelaVisivel,
      exibirTabela
  }
}