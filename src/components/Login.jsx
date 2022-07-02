import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [msgerror, setMsgerror] = useState(null)

    const validarCampos = () => {
        if (!email.trim()) {
            setMsgerror("Campo email vacio");
            return;
        }

        if (!password.trim()) {
            setMsgerror("Campo password vacio");
            return;
        }
    }

    const registrar = async (event) => {
        event.preventDefault();
        validarCampos()

        try {
            createUserWithEmailAndPassword(auth, email, password).then(r => {
                navigate('/admin')
            });

        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-email':
                    setMsgerror("Formato de email invalido");
                    break;
                case 'auth/weak-password':
                    setMsgerror("La password debe tener 6 caracteres minimos");
                    break;
                case 'auth/email-already-in-use':
                    setMsgerror("El correo ya se encuentra registrado");
                    break;
                default:
                    console.error(error)
                    break;
            }
        }
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) navigate("/admin")
        })
    }, [navigate])


    const loguear = () => {
        validarCampos()

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            navigate('/admin')
        }).catch((error) => {
            switch (error.code) {
                case 'auth/wrong-password':
                    setMsgerror("Contraseña incorrecta");
                    break;
                case 'auth/user-not-found':
                    setMsgerror("Email invalido");
                    break;
                default:
                    console.error(error)
                    break;
            }
        });

    }
    return (
        <section className='m-5'>
            <div className='container '>
                <div className='row justify-content-md-center'>


                    <div className='col-md-4 '>
                        <h1>Login</h1>
                        {
                            (msgerror != null) ? <div className="alert alert-danger">{msgerror}</div> : <div> </div>
                        }



                        <form className='form-group' onSubmit={registrar}>
                            <div className='form-group mb-2'>
                                <label htmlFor="email">Email</label>
                                <input type="text" className='form-control ' name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className='form-group mb-3'>
                                <label htmlFor="password">Password</label>
                                <input type="password" className='form-control ' name='password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            <div className="d-grid gap-2">
                                <input type="submit" value="Registrar" className='btn btn-primary' />
                            </div>

                        </form>
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-success" onClick={loguear}>Iniciar Sesión</button>
                        </div>
                    </div>

                </div>
            </div >
        </section >
    )
}

export default Login