import React from 'react';
import '../Styles/Work.css';
import Android from '../Assets/android-icon.png';
import WebDep from '../Assets/world-wide-web-icon.png';
import Frontend from '../Assets/ui-ux-icon.png';
import Backend from '../Assets/backend-icon.png';
import FullStact from '../Assets/full-stack-developer-icon.png';
import Freelancing from '../Assets/freelance-icon.png';

function MyWork() {
  return (
    <div className='itis-work'>
        <div className="work-top">
            <p>What i offer</p>
            <h1>Service</h1>
            <p className='inner-content'>I offer full-stack web and mobile app development, including responsive UI/UX, backend APIs, database management, and cloud deployment. And performance optimization.</p>
        </div>
        <div className="grid-contaner">
        <div className="work-content">
            <div className="work-card">
                <div className="work-card-top">
                    <img src={Frontend} alt="" />
                    <h2>Frontend Development</h2>
                </div>
                <div className="work-card-bottom">
                    <p>--Responsive website design (HTML, CSS, JavaScript)</p>
                    <p>--Modern UI/UX using React and Bootstrap</p>
                    <p>--Animations and interactive elements</p>
                    <p>--Performance optimization (Lazy loading, code splitting)</p>
                </div>
            </div>
            <div className="work-card">
                <div className="work-card-top">
                    <img src={Backend} alt="" />
                    <h2>Backend Development</h2>
                </div>
                <div className="work-card-bottom">
                    <p>--RESTful API development (Node.js, Express, Django, Flask)</p>
                    <p>--Database management (MongoDB, MySQL, PostgreSQL)</p>
                    <p>--Authentication & security (JWT, OAuth, SSL)</p>                </div>
            </div>
            <div className="work-card">
                <div className="work-card-top">
                    <img src={FullStact} alt="" />
                    <h2>Full-Stack Web Apps</h2>
                </div>
                <div className="work-card-bottom">
                    <p>--E-commerce platforms (Shopify, Stripe)</p>
                    <p>--Real-time apps (Chat, notifications, WebSockets)</p>
                    <p>--CRUD applications (Admin panels, data management)</p>
                </div>
            </div>
            <div className="work-card">
                <div className="work-card-top">
                    <img src={WebDep} alt="" />
                    <h2>Deployment & Maintenance</h2>
                </div>
                <div className="work-card-bottom">
                    <p>--Cloud hosting (AWS, Azure, Firebase, DigitalOcean)</p>
                    <p>--CI/CD pipelines (GitHub Actions, Docker, Kubernetes)</p>
                    <p>--Performance monitoring & debugging</p>
                    <p>--Website migration & scaling</p>
                </div>
            </div>
            <div className="work-card">
                <div className="work-card-top">
                    <img src={Android} alt="" />
                    <h2>Mobile App Development</h2>
                </div>
                <div className="work-card-bottom">
                    <p>--Cross-platform apps using React Native</p>
                    <p>--API integration & backend services for mobile apps</p>
                    <p>--UI/UX design for mobile interfaces</p>
                </div>
            </div>
            <div className="work-card">
                <div className="work-card-top">
                    <img src={Freelancing} alt="" />
                    <h2>Freelance & Consulting</h2>
                </div>
                <div className="work-card-bottom">
                    <p>--Custom web & app development solutions</p>
                    <p>--Code reviews, debugging, and optimization</p>
                    <p>--Technical consultation for startups & businesses</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MyWork;