import React from 'react';
import './home.scss';
import NavBar from '../navbar/navbar';
import Landing from '../landing/landing';
import Projects from '../projects/projects';
import Contact from '../contact/contact';


const Home = () => {
    return ( 
        <div className="home">
            <NavBar />
            <Landing />
            <Projects id='portfolio'/>
            <Contact id='contact'/>
        </div>
     );
}
 
export default Home;