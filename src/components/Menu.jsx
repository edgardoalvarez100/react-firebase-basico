import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'



const Menu = () => {
    let navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsuario(user.email);
            }
        })
    }, [])

    const salir = () => {
        auth.signOut().then(res => {
            setUsuario(null)
            navigate('/login')
        }).catch(e => console.error(e))
    }


    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container'>
                    <Link to="/" className='navbar-brand'>REACT APP</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className='navbar-nav me-auto'>
                            <li className='nav-item'>
                                <Link to={'/'} className="nav-link">Inicio</Link>
                            </li>
                            {
                                usuario != null ?
                                    <li className='nav-item'>
                                        <Link to={'/admin'} className="nav-link">Admin</Link>
                                    </li>
                                    : <span></span>
                            }
                        </ul>
                        {
                            usuario != null ? <button className="btn btn-danger" onClick={salir} >Cerrar Sesion</button> : <li className='nav-item'>
                                <Link to={'/login'} className="btn btn-primary">Login</Link>
                            </li>
                        }
                    </div>
                </div>

            </nav >
        </div >
    )
}

export default Menu