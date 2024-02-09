import './contact.css';
import Nav from './nav'



const Contacts = () => {
    return(
        <div className="contacts">
            <Nav></Nav>
            <section className='contacts-bg'>
                <div className="contacts-container">

                    <h2>Let's talk</h2>

                    <form name="contact" method="POST" data-netlify="true">

                        <label>Name<input type="text" name="name" className='name' required></input></label>
                        
                        <label>Email<input type="email" name='email' className='email' required></input></label>
                        
                        <label>Your interest <input type="text" name="interest" className="interest"></input></label>

                        <label>Additional Information  <textarea name="info" className='info'></textarea></label>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contacts