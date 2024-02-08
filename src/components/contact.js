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
                        <label>Name</label>
                        <input type="text" name="name" className='name' required></input>
                        <label>Email</label>
                        <input type="email" name='email' className='email' required></input>
                        <label>Your interest</label>
                        <input type=""></input>
                        <label>Additional Information</label>
                        <textarea></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contacts