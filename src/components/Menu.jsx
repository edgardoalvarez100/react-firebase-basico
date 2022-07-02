import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
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
                            <li className='nav-item'>
                                <Link to={'/login'} className="nav-link">Login</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/admin'} className="nav-link">Admin</Link>
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Menu