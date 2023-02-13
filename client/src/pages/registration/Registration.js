import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './registration.css'

const Registration = () => {
    const history = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value})            
        console.log(e);
    }

    const postData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        })

        const data = await res.json()
        if (res.status === 422 || !data) {
            console.log("Invalid Registration");
        }
        else {
            console.log("Registration Successful");
        }

        history("/signIn")
    }

    return (
        <div className='form-register w-100 m-auto'>
            <form method='POST'>
                <h1 className="h3 mb-3 text-center fw-normal">Register Yourself!</h1>

                <div className="form-floating">
                    <input name="name" type="text" className="form-control" id="name" placeholder="Name" autoComplete="off" value={user.name} onChange={handleInputs} />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating">
                    <input name="email" type="email" className="form-control" id="email" placeholder="name@example.com" autoComplete="off" value={user.email} onChange={handleInputs} />
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating">
                    <input name="phone" type="tel" className="form-control" id="phone" placeholder="Phone" autoComplete="off" value={user.phone} onChange={handleInputs} />
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className="form-floating">
                    <input name="work" type="text" className="form-control" id="work" placeholder="Work" autoComplete="off" value={user.work} onChange={handleInputs} />
                    <label htmlFor="work">Work</label>
                </div>
                <div className="form-floating">
                    <input name="password" type="text" className="form-control" id="password" placeholder="Password" autoComplete="off" value={user.password} onChange={handleInputs} />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="form-floating">
                    <input name="cpassword" type="password" className="form-control" id="cpassword" placeholder="cPassword" autoComplete="off" value={user.cpassword} onChange={handleInputs} />
                    <label htmlFor="cpassword">Confirm Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={postData}>Register</button>
                <Link type="submit" className="w-100 mt-2 btn btn-lg btn-outline-dark text-decoration-none" to="/SignIn">Already Member? Login</Link>
            </form>
        </div>
    )
}

export default Registration