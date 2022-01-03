import React from 'react'
import AboutSecion from '../components/AboutSecion';
import HeroSelection from '../components/HeroSelection';
import ProjectSection from '../components/ProjectSection';
import Animate from 'react-smooth';
// import Particles from 'react-particles-js';
// import particles from '../const/about_particle';
import styled from 'styled-components';
import ContactBanner from '../components/ContactBanner';

const HomeStyles = styled.div`
    .particle{
    position:fixed !important;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index:-1;
} 

`;
 const Home = () => {
     return ( 
        <HomeStyles>
    <Animate to="1" from="0" attributeName="opacity">
    {/* <Particles
          params={particles}
         className="particle" /> */}
           <HeroSelection/>
           <AboutSecion/>
        
         
           <ProjectSection/>
           <ContactBanner/>
           {/* <Footer/> */}
           </Animate>
        </HomeStyles>
      );
 }
  
 export default Home;
