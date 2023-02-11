import React from 'react'
import { Link } from 'react-router-dom'


import './support.css'
const Support = () => {
    return (
        <main className='container'>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-bold">Support</h1>
                <p className="fs-5 text-muted">Get quick discussions or help in writing programs, developing applications, deploying or building full stack projects etc. at affordable prices.</p>
            </div>


            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Free</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/hr</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Discussion</li>
                                <li>Tips</li>
                                <li>Doubt Session</li>
                                <li>&nbsp;</li>
                            </ul>
                            <Link className="deco" to="/contact">
                            <button type="button" className="w-100 btn btn-lg btn-outline-primary">Submit Your Query</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Basic</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$3<small className="text-muted fw-light">/hr</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Assignment</li>
                                <li>Development Guidance</li>
                                <li>Lecture Delivery</li>
                                <li>Program Writting</li>
                            </ul>
                            <button type="button" className="w-100 btn btn-lg btn-primary disabled">Get started</button>
                            
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-primary">
                        <div className="card-header py-3 text-bg-primary border-primary">
                            <h4 className="my-0 fw-normal">Project</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$5<small className="text-muted fw-light">/hr</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>UI Design</li>
                                <li>Frontend Development</li>
                                <li>Backend Deployment</li>
                                <li>Deployment and Managament</li>
                            </ul>
                            <Link className="deco" to="/contact">
                            <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Support