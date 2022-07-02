import React from 'react'

const Login = () => {
    return (
        <section className='m-5'>
            <div className='container '>
                <div className='row justify-content-md-center'>

                    <div className='col-md-4 '>
                        <h1>Login</h1>

                        <form action="" className='form-group' >
                            <div className='form-group mb-2'>
                                <label htmlFor="email">Email</label>
                                <input type="text" className='form-control ' name='email' id='email' />
                            </div>
                            <div className='form-group mb-3'>
                                <label htmlFor="password">Password</label>
                                <input type="password" className='form-control ' name='password' id='password' />
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