import React, { useRef, useState } from 'react'
import AutoWriter from '../../assets/AutoWriter'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_n7hvji9', 'template_6datr2j', formRef.current, 'zsuN80wIBe811t_nq')
            .then((result) => {
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="container col-xl-10">
            <div className="row align-items-center g-lg-5 py-4">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 mb-3">
                        <AutoWriter />
                    </h1>
                    <p className="col-lg-10 fs-4">Get in touch. Always available for freelancing if the right project comes along me.</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <p className='col-lg-10 fs-4 fw-bold'>What's your story?</p>
                    <form className="p-2 p-md-4 border rounded-3 bg-light" ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input name="user_name" type="text" className="form-control" id="name" placeholder="Name" required={true} />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input name="user_email" type="email" className="form-control" id='email' placeholder="Email" required={true} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input name='user_subject' type="text" className="form-control" id="subject" placeholder="Subject" required={true} />
                            <label htmlFor="subject">Subject</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea name='message' type="text" className="form-control" id="message" placeholder="Message" style={{ height: "100px" }} required={true} />
                            <label htmlFor="message">Message</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                        <hr className="my-4" />
                        <small className="text-muted">{done && "Thank You!!!"}</small>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact