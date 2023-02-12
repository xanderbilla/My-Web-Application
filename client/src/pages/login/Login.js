import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
    return (
        <div className='form-signin w-100 m-auto'>
            <form>
                <h1 className="h3 mb-3 text-center fw-normal">Log In</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <Link type="submit" className="w-100 mt-2 btn btn-lg btn-outline-dark text-decoration-none" to="/SignIn">Not A Member? Register</Link>
            </form>
        </div>
    )
}

export default Login