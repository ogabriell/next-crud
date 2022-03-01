
interface EntradaProps{
    texto: string
    tipo?: 'text' | 'number'
    valor:any
    somenteLeitura?: boolean
    valorMudou?: (valor:any) => void
}

export default function Entrada(props: EntradaProps){

    return(
        <div className={`flex flex-col mb-4`}>
            <label className={`mx-2 my-1`}>
                {props.texto}
            </label>
            <input  className={`focus:outline-none ${props.somenteLeitura ? '' : 'focus:bg-lime-200'}} rounded-md p-2 border`} 
                    readOnly={props.somenteLeitura} 
                    type={props.tipo ?? 'text'} 
                    value={props.valor}
                    onChange={e => props.valorMudou?.(e.target.value)}
            />
            
        </div>
    )
}