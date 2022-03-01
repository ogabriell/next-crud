interface BotaoProps{
    className?: string
    children:any
    onClick?: () => void
}

export default function Botao(props: BotaoProps){
    return(
        <button className={`p-2 rounded-md ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}