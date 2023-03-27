import React from 'react'
import { Link } from 'react-router-dom'

import "./Cripto.css"

const Cripto = ({name, priceUsd, id, symbol, changePercent24Hr}) => {
  return (
    <div className='cripto'>
        <h2>{name}</h2>
        <div className="info">
            <p><span className='label'>Precio: </span>{parseFloat(priceUsd).toFixed(4)}</p>
            <p><span className='label'>Codigo: </span>{symbol}</p>
            <p>
                <span className='label'>Variacion 24hrs: </span>
                <span className={ parseFloat(changePercent24Hr).toFixed(4)>0 ? 'positivo' : 'negativo'}>
                    {parseFloat(changePercent24Hr).toFixed(4)}%
                </span>
            </p>
        </div>
        <Link to={`/criptomonedas/${id}`}> Ver Detalle de la Criptomoneda</Link>

    </div>
  )
}

export default Cripto