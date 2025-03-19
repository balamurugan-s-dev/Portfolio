import React from 'react'
import '../Styles/Home.css';
import Myphoto from '../Assets/My_photo.jpg';
import Resume from '../Resume/My_Resume.pdf';

function Home({scrolltosection, contactref}) {
  return (
    <div className="animation">
      <div className='itis-home'>
        <div className="my-image">
          <img src={Myphoto} alt="myimage" />
        </div>
        <div className="my-name">
          <p>Hi! there</p>
          <p>I'm Balamurugan S</p>
        </div>
        <div className="fib">
          <p>full-stack web developer and I created</p>
          <p> aresome webpages.</p>
        </div>
        <div className="summary">
          <p>I am a full-stack web developer skilled in building dynamic web apps and pages, </p>
          <p>with experience in front-end and back-end development.</p>
        </div>
        <div className="buttons">
          <button id='button1' onClick={() => scrolltosection(contactref)}><span>Contact me <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></span></button>
          <button id='button2'><a href={Resume}><span>my resume <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--font-color)"><path d="M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Zm0-130 116-150h-76v-280h-80v280h-76l116 150Zm0-150Z"/></svg></span></a></button>
        </div>
      </div>
    </div>
  )
}

export default Home
