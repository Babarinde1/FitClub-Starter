import React, { useRef } from 'react'
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_jatwx48",
      "template_6veqyse",
      form.current,
      "29Z3-GgZKdtwp4fOm"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span>WITH US?</span>
        </div>
      </div>
      <div className="right-j">
<form ref={form} onSubmit={sendEmail} action="" className="email-container">
    <input type="email" name='user_email' placeholder='Enter your email address' />
<button className='btn btn-join'>Join Now </button>
</form>
      </div>
    </div>
  );
}

export default Join