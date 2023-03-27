import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import "./Login.css"

const Login = () => {

    const navigation = useNavigate()

    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(false)

    const [user, setUser] = useState({
        email : "",
        password: ""
    })
    
    const onChange = (e) => {
        setUser( prevState => ({...prevState, [e.target.name] : e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setCargando(true)
        setError(null)

        axios.post('https://reqres.in/api/login', user)
            .then( response => {
                setCargando(false)
                localStorage.setItem('tokenUser' , response.data.token)
                navigation('/')
            })
            .catch( e => {
                setCargando(false)
                console.table(e)
                setError(e.response.data.error)
            } )
    }

    if (localStorage.getItem('tokenUser')) return <Navigate to="/" />

    return (
        <div className='login-container'>
            <h1>Iniciar sesión en CriptoMarket</h1>
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label htmlFor="email">Correo Electronico</label>
                    <input 
                        required
                        type="email" 
                        name="email" 
                        onChange={onChange}
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        required
                        type="password" 
                        name="password" 
                        onChange={onChange}
                    />
                </div>
                <div className="submit">
                    <input 
                        type="submit" 
                        className='link'
                        value={ cargando ? "cargando..." : "Ingresar" }
                    />
                </div>
            </form>
            {
                error && <span className="error">Error: {error} </span>
            }
        </div>
    )
}

export default Login