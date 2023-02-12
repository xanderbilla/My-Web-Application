import React from 'react'
import { Link } from 'react-router-dom'
import './registration.css'

const Registration = () => {
    return (
        <div className='form-register w-100 m-auto'>
            <form>
                <h1 className="h3 mb-3 text-center fw-normal">Register Yourself!</h1>

                <div className="form-floating">
                    <input name="name" type="text" className="form-control" id="name" placeholder="Name" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating">
                    <input name="email" type="email" className="form-control" id="email" placeholder="name@example.com" />
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating">
                    <input name="phone" type="tel" className="form-control" id="phone" placeholder="Phone" />
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className="form-floating">
                    <input name="work" type="text" className="form-control" id="work" placeholder="Work" />
                    <label htmlFor="work">Work</label>
                </div>
                <div className="form-floating">
                    <input name="password" type="text" className="form-control" id="password" placeholder="Password" />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="cpassword" placeholder="cPassword" />
                    <label htmlFor="cpassword">Confirm Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                <Link type="submit" className="w-100 mt-2 btn btn-lg btn-outline-dark text-decoration-none" to="/SignIn">Already Member? Login</Link>
            </form>
        </div>
    )
}

export default Registration