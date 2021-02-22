import React, {useState} from 'react';
import './contact.scss';
import axios from "axios";
import Spinner from '../spinner/spinner';
import Email from "../../images/email.svg";
import Phone from "../../images/phone_mini.svg";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitStatus, setFormSubmitStatus] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let formData = {
            senderName: name,
            senderEmail: email,
            message: message
        }
        try {
            let res = await axios.post('https://website-email-sender.herokuapp.com/', formData);
            if(res.status === 200){
                setFormSubmitStatus('success');
                setName('');
                setEmail('');
                setMessage('');
                setIsLoading(false);
            }

        } catch (error) {
            setFormSubmitStatus('error');
            setIsLoading(false);
        }
    }
    
    return ( 
        <div className="contact">
            <div className="title">
                <h1>Contact</h1>
                <div className="underline" ></div>        
            </div>
            <div className="info">
                <div className="email">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p>avnvbhatta@gmail.com</p>
                </div>
                <div className="phone">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p>515-864-1478</p>
                </div>
            </div>
            <div className="or">-or-</div>
            <form id="form" onSubmit={handleSubmit}>

                <p>Send a quick message</p>
                <input  type="text" name="name" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)}/>
                
                <input id="email" type="email" name="email" placeholder="Email" required value={email}  onChange={(e) => setEmail(e.target.value)}/>
                
                <textarea id="message" type="text" name="message" placeholder="Message" rows="4" cols="50" required value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>
                
                {isLoading ? <Spinner /> : <button id="submitBtn" type="submit">Submit</button>} 
            </form>
            
            {
                formSubmitStatus && <div className={formSubmitStatus}>
                                        {formSubmitStatus === 'success' ? 
                                        <div><div>Thank you for reaching out! </div> <div>I will get back to you shortly</div></div>
                                        : <div><div>Something went wrong.</div><div>Please try again later.</div></div>}
                                        </div>
                                    
            }
            
            

        </div>
     );
}
 
export default Contact;