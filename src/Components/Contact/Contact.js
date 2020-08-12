import React, {useState} from 'react';
import axios from 'axios';

function Contact(props){

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');

    const handleSubmit = () => {
        axios.post('/api/contact', {name, email, message})
        .then( () => console.log(`contact message sent`))
        .catch(() => alert(`message did not send`))
    }

        return (
            <div>
                <form>
                    <label>
                        Name:
                        <input 
                            type='text'
                            value={name}
                            onChange={e => setName(e.target.value)}/>
                    </label>
                    <label>
                        Email:
                        <input 
                            type='text'
                            value={email}
                            onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        Message:
                        <textarea
                            type='text'
                            rows='5'
                            value={message}
                            onChange={e => setMessage(e.target.value)}/>
                    </label>
                    <input 
                        type="submit" 
                        value="Submit"
                        onClick={handleSubmit} />
                </form>
            </div>
        )
}

export default Contact;