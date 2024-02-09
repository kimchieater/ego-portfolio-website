import './contact.css';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Nav from './nav';



const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_6umjf2h', 'template_1ivg25e', form.current, {
        publicKey: 'e8e1OUi6XFp2pzWf3',
    })
        .then(
        () => {
            console.log('SUCCESS!');
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
        );
    };

    return(
        <div className="contacts">
            <Nav></Nav>
            <section className='contacts-bg'>
                <div className="contacts-container">

                    <h2>Let's talk</h2>

                    <form ref={form} onSubmit={sendEmail}>

                        <label>Name</label>
                        <input type="text" name="user_name"></input>
                        
                        <label>Email</label>
                        <input type="email" name='user_email'></input>
                        
                        <label>Your interest</label>
                        <input type="text" name="message"></input>

                        <label>Additional Information  </label>
                        <textarea name="message"></textarea>
                        <input type="submit" value="Send"></input>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contacts