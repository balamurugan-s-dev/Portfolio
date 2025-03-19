import React from 'react'
import '../Styles/Service.css';

function Services() {
  return (
    <div className='itis-service'>
      <div className="top-service">
        <h2>My Latest work</h2>
        <p>I am a Full-Stack Developer skilled in building dynamic web and mobile applications with React, Node.js, and MongoDB. I specialize in creating responsive UIs, secure APIs, and scalable backend solutions. 🚀</p>
      </div>

      <div className="my-service">
        <div className="service-card">
          <div className="service-card-top">
            <h2>🌐 Web Applications</h2>
          </div>
          <div className="service-card-bottom">
            <p>1️⃣ Portfolio Website (React + Node.js)</p>
            <p>2️⃣ E-commerce Platform (MERN Stack)</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-card-top">
            <h2>📱 Mobile Apps</h2>
          </div>
          <div className="service-card-bottom">
            <p>1️⃣ Task Manager App (React + Node.js)</p>
            <p>2️⃣ Chat Application (React + WebSockets)</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-card-top">
            <h2>⚙️ Advanced Applications</h2>
          </div>
          <div className="service-card-bottom">
            <p>1️⃣ AI-Powered Blog Generator (Next.js + OpenAI API)</p>
            <p>2️⃣ Expense Tracker (MERN Stack)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
