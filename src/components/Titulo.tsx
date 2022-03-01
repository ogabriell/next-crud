
export default function Titulo(props){
    
    return(
        <div className={`flex flex-col justify-center`}>
            <h1 className={`pl-2 px-2 text-4xl`}>{props.children}</h1>
            <hr className="border-lime-400 border-y-2"/>
        </div>
    )
}