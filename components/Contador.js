
const Contador = () => {
//destructuring
    const [contador, setContador] = React.useState(0)
    console.log(contador)

    return (
        <div>
       {/* interpolacion */}

            <h1 className={contador < 0 ? 'minus' : 'more'}> Contador:{contador}</h1>
            <hr />

            <button className='mayor' onClick={()=> setContador(contador + 1)} >Aumentar</button>
            <button className='menor' onClick={()=> setContador(contador - 1)}>Disminuir</button>
        </div>
    )
}