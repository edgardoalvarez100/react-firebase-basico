import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loguear = async (event) => {
        event.preventDefault();
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user)

        } catch (error) {
            console.error(error)
        }


    }
    return (
        <section className='m-5'>
            <div className='container '>
                <div className='row justify-content-md-center'>

                    <div className='col-md-4 '>
                        <h1>Login</h1>

                        <form className='form-group' onSubmit={(ev) => loguear(ev)}>
                            <div className='form-group mb-2'>
                                <label htmlFor="email">Email</label>
                                <input type="text" className='form-control ' name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className='form-group mb-3'>
                                <label htmlFor="password">Password</label>
                                <input type="password" className='form-control ' name='password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            <div className="d-grid gap-2">
                                <input type="submit" value="Ingresar" className='btn btn-primary' />
                            </div>

                        </form>
                    </div>

                </div>
            </div >
        </section >
    )
}

export default Login