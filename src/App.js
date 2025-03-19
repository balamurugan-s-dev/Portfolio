import React, {useRef} from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';


import Home from './Pages/Home';
import About from './Pages/AboutMe';
import Work from './Pages/MyWork';
import Service from './Pages/Services';
import Contact from './Pages/ContactMe';

import './Styles/App.css';


const App = () => {
	const home = useRef(null);
	const about = useRef(null);
	const work = useRef(null);
	// const skill = useRef(null);
	const service = useRef(null);
	const contact = useRef(null);

	const scrollToSection = (section) => {
		section.current?.scrollIntoView({ behavior: "smooth" });
	}

  return (
    <div className='main-app'>

		<Header scrolltosection={scrollToSection} homeref={home} aboutref={about} workref={work} serviceref={service} contactref={contact} />
		
		<div ref={home}>
			<Home scrolltosection={scrollToSection} contactref={contact} />
		</div>
		
		<div ref={about}>
			<About />
		</div>

		<div ref={service}>
			<Service />
		</div>

		<div ref={work}>
			<Work />
		</div>
		
		<div ref={contact}>
			<Contact />
		</div>
		
		<Footer />
    </div>
  )
}

export default App;