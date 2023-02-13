import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'
import './login.css'

const Login = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = res.json();
        if (res.status === 400 || !data) {
            console.log("Invalid Credential")
            setShow(true)
        } else {
            dispatch({type: "USER", payload: true})
            console.log("Login Successful")
            history('/')
        }
    }

    return (
        <div className='form-signin w-100 m-auto'>
            <form method='POST'>
                <h1 className="h3 mb-3 text-center fw-normal">Log In</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <small className="text-muted">{show && "Invalid Credential, Please Try Again!"}</small>
                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={loginUser}>Sign in</button>
                <Link type="submit" className="w-100 mt-2 btn btn-lg btn-outline-dark text-decoration-none" to="/SignUp">Not A Member? Register</Link>
            </form>
        </div>
    )
}

export default Login