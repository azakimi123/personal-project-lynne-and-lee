import React, {useState} from 'react';
import axios from 'axios';
import '../../App.scss';

function Contact(props){

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');

    const handleSubmit = () => {
        handleEmail()
        clearForm()
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    const handleEmail = () => {
        axios.post('/api/contact', {name, email, message})
        .then( () => alert(`message has been sent`))
        .catch(err => console.log(err))
    }

        return (
            <div className='contact-main-page'>
                <h2>CONTACT US</h2>
                <div className='contact-container'>
                    <section className='contact-text'>
                        <p>Have a question? Want to collaborate with us? We can’t wait to hear from you!</p>
                    </section>
                    <form>
                        <label className='input'>
                            Name
                            <input 
                                className='contact-name-input'
                                type='text'
                                value={name}
                                onChange={e => setName(e.target.value)}/>
                        </label>
                        <label className='input'>
                            Email
                            <input 
                                className='contact-email-input'
                                type='text'
                                value={email}
                                onChange={e => setEmail(e.target.value)}/>
                        </label>
                        <label className='input'>
                            Message
                            <textarea
                                className='contact-message-input'
                                type='text'
                                rows='5'
                                value={message}
                                onChange={e => setMessage(e.target.value)}/>
                        </label>
                        <input
                            className='contact-send'
                            type="submit" 
                            value="SEND"
                            onClick={handleSubmit} />
                    </form>
                </div>
            </div>
        )
}

export default Contact;