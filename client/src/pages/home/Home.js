import React from 'react'
import { Link } from 'react-router-dom';
import Brand from '../../assets/Brand';
import './home.css';

const Home = () => {
  return (
    <div className="container px-4 py-2 my-5 text-center">
      <Brand height={105} />
      <h1 className="display-5 fw-bold">Welcome!</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Create!, Learn! & Inspire!</p>
        <p className="lead mb-4">Let's learn and create together. Contribute to projects and learn for our bright future. Want to contribute on my projects and work together? If so then...</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link className="deco" to="/contact">
            <button type="button" className="btn btn-outline-dark btn-lg px-4">Let's talk</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home