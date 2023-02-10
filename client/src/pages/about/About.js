import React from 'react'
import './about.css'
const About = () => {
    return (
        <main class="container">
            <h1 className='display-5 fw-bold'>About Me</h1>
            <p class="col-md-10 fs-5">Myself <strong>Vikas Singh</strong> from Varanasi, Uttar Pradesh. Learning and exploring technical domains at <strong>Acharya Institute, Bangalore (IN)</strong> from the last two years.</p>
            <p class="col-md-8 mb-5 fs-5">The main goal is to learn as much domains, tools and techs I can and I will.</p>
            <hr class="col-3 col-md-2 mb-5" />

            <div class="row g-5">
                <div class="col-md-6">
                    <h2 className='display-6 fw-semibold'>Skills</h2>
                    <p class="fs-5">So, far I traveled this much... still have a long way to go.</p>
                    <ul class="icon-list ps-0">
                        <li class="d-flex align-items-start mb-1 fs-5">AWS Management</li>
                        <li class="d-flex align-items-start mb-1 fs-5">Database (SQL & MongoDB)</li>
                        <li class="d-flex align-items-start mb-1 fs-5">Java</li>
                        <li class="d-flex align-items-start mb-1 fs-5">Python</li>
                        <li class="d-flex align-items-start mb-1 fs-5">Networking (CCNA & CCNP)</li>
                        <li class="d-flex align-items-start mb-1 fs-5">Web Development</li>
                    </ul>
                </div>

                <div class="col-md-6">
                <h2 className='display-6 fw-semibold'>Projects</h2>
                    <p class="fs-5">Check out the projects I had made and the upcoming projects. All are web application projects.</p>
                    <ul class="icon-list ps-0">
                        <li class="d-flex align-items-start mb-1 fs-5"><a class="text-decoration-none" href="https://xanderbilla-static-portfolio.vercel.app/">Single Static Page Using HTML and CSS</a></li>
                        <li class="d-flex align-items-start mb-1 fs-5"><a class="text-decoration-none" href="https://promsnat-aws.s3.ap-south-1.amazonaws.com/Image-Slider+-+JavaScript/index.html">Image Slider Using JavaScript</a></li>
                        <li class="d-flex align-items-start mb-1 fs-5"><a class="text-decoration-none" href="https://xanderbilla-react-portfolio-i.vercel.app/">Portfolio Using React</a></li>
                        <li class="d-flex align-items-start mb-1 fs-5"><a class="text-decoration-none" href="https://xanderbilla-react-bootstrap-web-application.vercel.app/">Basic Web Application Using Bootstrap and React</a></li>
                        <li class="text-muted d-flex align-items-start mb-1 fs-5">Netflix Clone Using React (Coming Soon)</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default About