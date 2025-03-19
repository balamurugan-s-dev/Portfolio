import React, {useState} from 'react';
import '../Styles/Contact.css';
import ReCAPTCHA from "react-google-recaptcha";

function ContactMe() {

    const [captchaValue, setCaptchaValue] = useState(null);

    const handleCaptchaChange = (value) => {
      console.log("Captcha value:", value);
      setCaptchaValue(value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!captchaValue) {
        alert("Please complete the CAPTCHA");
        return;
      }
      alert("Feedback submitted successfully!");
    };


  return (
    <div className='itis-contact'>
        <p className='contact-title'>Contact with me</p>
        <h1>Get in touch</h1>
        <p className='inner-content'>I'd love to hear from you! If you have any questions, comments or feedback, please use the form below to get in touch with me.</p>
        <form onSubmit={handleSubmit} className='contact-form'>
            <div className="contact-mail">
                <div className='input-box'>
                    <input type="text" placeholder='Enter your name' required/>
                    <input type="email" placeholder='Enter your email' required/>
                </div>
                <div className="chat-box">
                    <textarea name="feedback" id="" placeholder='Write your feedback here.'></textarea>
                </div>
            </div>
            <div className='captcha-container'>
                <ReCAPTCHA theme='var(--capcha)'
                    sitekey="6Le5jfMqAAAAAOzbOkYJ6J1Iop_nVcCrf9oTK1kp"
                    onChange={handleCaptchaChange}
                />
            </div>
            <div className='submit-btn-div'>
                <button type='submit' className='submit-btn' >Submit now<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></button>
            </div>
        </form>
    </div>
  )
}

export default ContactMe
