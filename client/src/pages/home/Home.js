import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Brand from '../../assets/Brand';
import './home.css';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false)
  const userHomePage = async () => {
      try {
          const res = await fetch('/getdata', {
              method: "GET",
              headers: {
                  "Content-type": "application/json"
              }
          });
          const data = await res.json();
        console.log(data);
        setShow(true)
          setUserName(data.name);

          if (!res.status === 200) {
              const error = new Error(res.error);
              throw error;
          }
      } catch (err) {
          console.log(err);
      }
  }

  useEffect(() => {
      userHomePage();
  });
  return (
    <div className="container px-4 py-2 my-5 text-center">
      <Brand height={105} />
      <h1 className="display-5 fw-bold">Welcome! { userName}</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">{show ? "Happy to see you back" : "Create!, Learn! & Inspire!"}</p>
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