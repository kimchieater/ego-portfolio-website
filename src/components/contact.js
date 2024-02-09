import './contact.css';
import {useRef} from 'react';
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

                        <label>Name<input type="text" name="user_name" className='name' required></input></label>
                        
                        <label>Email<input type="email" name='user_email' className='email' required></input></label>
                        
                        <label>Your interest <input type="text" name="message" className="interest"></input></label>

                        <label>Additional Information  <textarea name="message" className='info'></textarea></label>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contacts