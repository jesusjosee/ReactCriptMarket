
import Cripto from './cripto/Cripto'

import "./Cuadricula.css"
import usePetition from '../hooks/usePetition'

function Cuadricula() {

  const [criptos, cargandoCriptos] = usePetition('assets')

  if (!criptos) return <span>Cargando ...</span>

  return (
    <div className='app-container'>
      <h1>Lista de criptomonedas</h1><hr /><br />
      <div className='cripto-container'>
        { criptos.map( ({id, name, priceUsd, symbol, changePercent24Hr}) => (
          <Cripto key={id} id={id} name={name} priceUsd={priceUsd} symbol={symbol} changePercent24Hr={changePercent24Hr} />
        ))}
      </div>
    </div>
  )
}

export default Cuadricula

