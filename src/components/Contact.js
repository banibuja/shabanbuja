import React, { useRef, useState } from "react";
import axios from 'axios';

function Contact() {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        const { name, email, subject, message } = values;

        try {
            await axios.post('https://shabanbuja.onrender.com/sendEmailContactUs', { name, email, subject, message });
            setIsSubmitted(true);
            setValues({ name: '', email: '', subject: '', message: '' }); // Clear form fields
        } catch (error) {
            console.error('Error sending email', error);
        }
    };

    const contactRef = useRef(null);

    return (
        <div className="container-fluid py-5" id="contact" ref={contactRef}>
            <div className="container">
                <div className="position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>Contact</h1>
                    <h1 className="position-absolute text-uppercase text-primary">Contact Me</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-form text-center">
                            {isSubmitted ? (
                                <div className="alert alert-success">
                                    Message sent successfully!
                                </div>
                            ) : null}
                            <form name="sentMessage" id="contactForm" noValidate onSubmit={sendEmail}>
                                <div className="form-row">
                                    <div className="control-group col-sm-6">
                                        <input
                                            type="text"
                                            className="form-control p-4"
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            value={values.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group col-sm-6">
                                        <input
                                            type="email"
                                            className="form-control p-4"
                                            id="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={values.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <input
                                        type="text"
                                        className="form-control p-4"
                                        id="subject"
                                        name="subject"
                                        placeholder="Subject"
                                        value={values.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea
                                        className="form-control py-3 px-4"
                                        rows="5"
                                        id="message"
                                        name="message"
                                        placeholder="Message"
                                        value={values.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
