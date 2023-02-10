import React from 'react'
import './about.css'
const About = () => {
    return (
        <main className="container">
            <h1 className='display-5 fw-bold'>About Me</h1>
            <p className="col-md-10 fs-5">Myself <strong>Vikas Singh</strong> from Varanasi, Uttar Pradesh. Learning and exploring technical domains at <strong>Acharya Institute, Bangalore (IN)</strong> from the last two years.</p>
            <p className="col-md-8 mb-5 fs-5">The main goal is to learn as much domains, tools and techs I can and I will.</p>
            <hr className="col-3 col-md-2 mb-5" />

            <div className="row g-5">
                <div className="col-md-6">
                    <h2 className='display-7 fw-semibold'>Skills</h2>
                    <p>So, far I traveled this much... still have a long way to go.</p>
                    <ul className="icon-list ps-0">
                        <li className="d-flex align-items-start mb-1">AWS Management</li>
                        <li className="d-flex align-items-start mb-1">Database (SQL & MongoDB)</li>
                        <li className="d-flex align-items-start mb-1">Java</li>
                        <li className="d-flex align-items-start mb-1">Python</li>
                        <li className="d-flex align-items-start mb-1">Networking (CCNA & CCNP)</li>
                        <li className="d-flex align-items-start mb-1">Web Development</li>
                    </ul>
                </div>

                <div className="col-md-6">
                <h2 className='display-7 fw-semibold'>Projects</h2>
                    <p>Check out the projects I had made and the upcoming projects. All are web application projects.</p>
                    <ul className="icon-list ps-0">
                        <li className="d-flex align-items-start mb-1"><a className="text-decoration-none" href="https://xanderbilla-static-portfolio.vercel.app/">Single Static Page Using HTML and CSS</a></li>
                        <li className="d-flex align-items-start mb-1"><a className="text-decoration-none" href="https://promsnat-aws.s3.ap-south-1.amazonaws.com/Image-Slider+-+JavaScript/index.html">Image Slider Using JavaScript</a></li>
                        <li className="d-flex align-items-start mb-1"><a className="text-decoration-none" href="https://xanderbilla-react-portfolio-i.vercel.app/">Portfolio Using React</a></li>
                        <li className="d-flex align-items-start mb-1"><a className="text-decoration-none" href="https://xanderbilla-react-bootstrap-web-application.vercel.app/">Basic Web Application Using Bootstrap and React</a></li>
                        <li className="text-muted d-flex align-items-start mb-1">Netflix Clone Using React (Coming Soon)</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default About