import React from 'react'
import Gmail from '../Assets/gmail-logo.svg'
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className='itis-footer'>
        <div className='foot-container'>
            <div className='foot-logo'>
                <h2>bala<span>.</span></h2>
            </div>
            <div className='email-contact'>
                <a href=""><img src={Gmail} alt="" />balabala13570@gmail.com</a>
            </div>
            <hr className='hr-line'/>
            <div className='copy-links'>
                <div>
                    <p>&copy; 2025 Balamurugan S. All the rights reserved.</p>
                </div>
                <div className='links'>
                    <div><a href="https://github.com/balamurugan-s-dev" target='_blank'>GitHub</a></div>
                    <div><a href="https://www.linkedin.com/in/balamurugan-s-b04aa8257/" target='_blank'>Linkedin</a></div>
                    <div><a href="https://x.com/balamuruga13570" target='_blank'>Twitter</a></div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
