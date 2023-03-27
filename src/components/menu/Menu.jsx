import { useContext } from 'react'
import { NavLink , Link, useNavigate} from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

import "./Menu.css"
const Menu = () => {

  const usuario = useContext(UserContext)

  const navigation = useNavigate()

  return (
    <nav className='main-menu'>
        <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/criptomonedas">Lista de Criptomonedas</NavLink></li>
            <li><NavLink to="/perfil">Perfil de {usuario.name}</NavLink></li>
            <li><a onClick={ () => {
              localStorage.removeItem("tokenUser")
              navigation("/login")
            }}>Cerrar sesion</a></li>
        </ul>
    </nav>
  )
}

export default Menu