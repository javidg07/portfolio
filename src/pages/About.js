import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import PText from '../components/PText'
import about from '../assets/images/hero1.jpg'
import AboutInfoItem from '../components/AboutInfoItem'
import ContactBanner from '../components/ContactBanner'

import Animate from 'react-smooth/lib/Animate'
// import Particles from 'react-particles-js';
// import particles from '../const/about_particle';
 const AboutStyles = styled.div`
  padding-top: 20rem;
  
  .particle{
    position:fixed !important;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index:-1;
} 
.top-section{
    display:flex;
    align-items:center;
    justify-content: center;
    gap:2rem;
}
.left{
    flex:3
}
.right{
    flex:2
}
.about_sub_heading{
  font-size: 2rem;
  margin-bottom: 2rem;
  span{
      background-color: var(--deep-dark);
      padding:.5rem;
      border-radius: 8px;;
  } 
}
.about_heading{
font-size: 3.6rem;
margin-bottom: 3rem;;
}
.about_info{
    margin-bottom:4rem;
    .para{
        max-width: 100%;
    }
}
.right{
    img{
        border:1px solid var(--gray-1)
    }
}
.about_items{
    margin-top:10rem;
}
.each_item{
    margin-bottom: 10rem;
}
.item_info{
    font-size: 3.6rem;
    text-transform:uppercase ;
    margin-top:10rem;
    
}

@media only screen and (max-width:768px){
    padding:10rem 0 0 0  ;
    .top-section{
     flex-direction: column;
     gap:3rem
    }
    .about_sub_heading{
        font-size: 2rem;

    }
    .about_heading{
        font-size: 1.8rem;
    }

    .item_info{
     font-size: 2.8rem;
     margin-top:5rem;
    }

}
 `
export default function About() {
    return (
        <AboutStyles>
              <Animate to="1" from="0" attributeName="opacity">
          {/* <Particles
          params={particles}
         className="particle" /> */}
           <div className="container">
               <div className="top-section">
                   <div className="left">
                       <p className="about_sub_heading">
                           Hi, am <span>Javid</span>
                       </p>
                       <h2 className="about_heading">
                           UI Developer
                       </h2>
                       <div className="about_info">
                           <PText>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque temporibus necessitatibus repellendus quaerat magnam velit ex consectetur est iste id architecto iusto sint voluptatum sapiente, molestiae deleniti, in accusamus.
                               <br/> <br/>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque adipisci voluptate officiis magni incidunt, ullam non rerum repudiandae possimus reprehenderit ut qui. Debitis nam aliquam obcaecati nostrum maiores dolor sed!
                           </PText>
                       </div>
                       <Button outline="yes" btnText ="Download CV" btnLink="/files/javid_basha.pdf" target="/blank" />
                   </div>
                   <div className="right">
                   <img src={about} alt="" />
               </div>
               </div>
                 <div className="about_items">
            <div className="each_item">
               <h1 className="item_info">Education </h1> 
               <AboutInfoItem title="School" items={['Madras Christian College Hr sec School']}/>
               <AboutInfoItem  title="College"  items={['KCG college of Technology']}/>
               <h1 className="item_info">My Skills </h1> 
               <AboutInfoItem title="FrontEnd" items={['HTML','CSS','JAVASCRIPT','TYPESCRIPT','ANGULAR','REACTJS','TAILWINDCSS','MICROFRONTEND']}/>
             
               <h1 className="item_info">Experience </h1> 
               <AboutInfoItem title="2014-2018" items={['Senior System Engineer - Infosys']}/>
               <AboutInfoItem  title="2018-2021"  items={['Senior Engineer - Renault Nissan']}/>
               <AboutInfoItem  title="2021-present"  items={['Senior Consultant - CapGemini']}/>
            </div>
        </div>
             </div>
             <ContactBanner/>
             {/* <Footer/> */}
             </Animate>
        </AboutStyles>
    )
}
