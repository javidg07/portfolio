import React,{useState} from 'react'
import styled from 'styled-components';
const FormStyles = styled.form`
width:100%;
.form-group{
    width:100%;
   margin-bottom:2rem;
}
label{
    font-size: 1.8rem;

}
input,textarea{
    width: 100%;
    font-size:2rem ;
    padding:1.2rem;
    outline:none ;
    border: none;
    background-color: var(--deep-dark);
    color: var(--gray-1);
    margin-top:1rem;
    border-radius: 8px;

}
textarea{
    min-height: 200px;
    resize: vertical;
}
button[type='submit']{
      background-color: var(--gray-1);
      color:var(--black);
      font-size: 2rem;
       outline  : none;
       border:none;
       border-radius: 8px;
       cursor:pointer;
       padding:1rem 4rem;
    }

`;  
export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // const [user, setUser] = useState({});

 

     
    return (
       <>
          <FormStyles   name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                  <label htmlFor="name">Your Name
                      <input type="text" id="name" name="name" value={name} onChange={e=>setName(e.target.value) } noValidate/>
                  </label>
              </div>
              <div className="form-group">
                  <label htmlFor="email">Your Email
                      <input type="text" id="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} noValidate/>
                  </label>
              </div>
              <div className="form-group">
                  <label htmlFor="Message">Your Message
                      <textarea type="text" id="message" name="message" value={message} onChange={e=>setMessage(e.target.value)} noValidate/>
                  </label>
              </div>
              <button type='submit' >send</button>
          </FormStyles>
          </>
    )
}
