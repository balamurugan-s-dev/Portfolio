import React, {useState} from 'react'
import '../Styles/Header.css';
import Dark from '../Assets/dark-mode.svg';
import Light from '../Assets/light-mode.svg';

function Header({scrolltosection, homeref, aboutref, workref, serviceref, contactref}) {
  


  const[darkmode, setDarkmode] = useState(false);

  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
    document.body.classList.toggle('dark-mode');
    console.log('darkmode', darkmode);
    localStorage.setItem('darkmode', darkmode);
  }

  const currentDarkmode = localStorage.getItem('darkmode');
  if(currentDarkmode === 'true') {
    document.body.classList.add('dark-mode');
  }
  

  return (
    <header className='nav-header'>
        <div className='nav-logo'>
            <h2>bala<span>.</span></h2>
        </div>
        <div className='nav-content'>
            <div onClick={() => scrolltosection(homeref)}><li>Home</li></div>
            <div onClick={() => scrolltosection(aboutref)}><li>About Me</li></div>
            <div onClick={() => scrolltosection(serviceref)}><li>My Work</li></div>
            <div onClick={() => scrolltosection(workref)}><li>Service</li></div>
            <div onClick={() => scrolltosection(contactref)}><li>Contact Me</li></div>
        </div>
        <div className='d-mode' onClick={toggleDarkMode}>
            <img src={darkmode ? Dark : Light} alt="mode" />
        </div>
    </header>
  )
}

export default Header;
