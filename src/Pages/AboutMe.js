import React,{useRef} from 'react';
import '../Styles/About.css';
import Figma from '../Assets/figma-icon.svg'
import ChatGPT from '../Assets/chatgpt-icon.svg'
import Node from '../Assets/nodejs-icon.svg'
import Photopia from '../Assets/photopea-icon.svg';
import Git from '../Assets/git-icon-logo.svg'
import Vs from '../Assets/visual-studio-logo.svg'
import Coder from '../Assets/coder-animation.gif';
function AboutMe() {

  const language = useRef(null)
  const education = useRef(null)
  const projects = useRef(null)

  function handleClick(ref) {
    if(ref === language) {
      ref.current.style.display = "block";
      education.current.style.display = "none";
      projects.current.style.display = "none";
    }
    else if(ref === education) {
      ref.current.style.display = "block";
      language.current.style.display = "none";
      projects.current.style.display = "none";
    }
    else if(ref === projects) {
      ref.current.style.display = "block";
      language.current.style.display = "none";
      education.current.style.display = "none";
    }
  }

  return (
    <div className='itis-about'>
      <div className="about-content">
        <div className="about-me">
          <p>Introduction</p>
          <h2>About me</h2>
        </div>
        
        <div className='flex-container'>
          <div className="deep-summary">
            <div className="sum">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passionate Full-Stack Web Developer with experience in building dynamic web apps and pages. Skilled in front-end and back-end development. Experienced in creating responsive, user-friendly designs with modern technologies.</p>
            </div>
            <div className="skills">
                <button className='btn1' onClick={() => handleClick(language)}>Language</button>
                <div className='lang' ref={language}>
                    <button onClick={() => handleClick(language)}>Language</button>
                    <div className='lang-list'>
                        <p>HTML, CSS, JavaScript</p>
                        <p>MongoDB, My SQL</p>
                        <p>React</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>Node.js</p>
                        <p>Express.js</p>
                        <p>python</p>
                    </div>
                </div>
                <button className='btn2' onClick={() => handleClick(education)}>Education</button>
                <div className='edu' ref={education}>
                    <button onClick={() => handleClick(education)}>Education</button>
                    <div className='edu-list'>
                        <p>K Ramakrishnan College of Engineering - Samayapuram.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.Tech(AIML) CGPA : 8.50 2022 - 2026</p>
                        <br />
                        <p>Raghavandra Matriculation Hr. Sec. School - Karatambatti.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Higher Secondary Mark : 458/600   2021 - 2022</p>
                        <br />
                        <p>Gee Vee Vidhyalaya Matriculation School - Pagalavadi.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Secondary Mark : 458/500   2020 - 2021</p>
                    </div>
                </div>
                <button className='btn3' onClick={() => handleClick(projects)}>Projects</button>
                <div className='pro' ref={projects}>
                    <button onClick={() => handleClick(projects)}>Projects</button>
                    <div className='pro-list'>
                      <p><strong>Project 1:</strong> E-commerce Website</p>
                      <p>Built a platform for product listings, secure checkout, and user authentication.</p>

                      <p><strong>Project 2:</strong> CGPA Calculator</p>
                      <p>Developed a web app to calculate and track students' CGPA.</p>

                      <p><strong>Project 3:</strong> Library Management System</p>
                      <p>Created a system for managing books, users, and transactions.</p>

                      <p><strong>Project 4:</strong> Music Player Website</p>
                      <p>Designed a streaming site with admin controls and playlist management.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="code-bench">
                <img src={Coder} alt="coder" />
          </div>
        </div>

        <div className='tools-container'>
            <div className='tools'>
                <p>Tools i use</p>
                <div className='tools-icon'>
                    <div><img src={Vs} alt="" /></div>
                    <div><img src={Figma} alt="" /></div>
                    <div><img src={Node} alt="" /></div>
                    <div><img src={Photopia} alt="" /></div>
                    <div><img src={ChatGPT} alt="" /></div>
                    <div><img src={Git} alt="" /></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
