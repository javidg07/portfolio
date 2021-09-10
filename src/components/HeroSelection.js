import React from 'react'
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.jpg';
import Button from './Button';
import PText from './PText';
import SocialArrow from '../assets/images/social-media-arrow.svg';
import scrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import ReactTypingEffect from 'react-typing-effect';
import { ImFacebook2,ImLinkedin } from 'react-icons/im';
const HeroStyles = styled.div`
.typical > div{

  font-size: 2rem;
  font-weight: bold;
  color:black;
}

      .hero{
        height:100vh;
        min-height:1000px;
        width:100%;
         display: flex ;
         justify-content: center;
         align-items: center;
         text-align: center;
         position: relative;
      }
      .hero__heading{
       position: relative;
        font-size: 2rem;
        margin-bottom: -4.2rem;
        .half-color {
              position:;
              position:relative;
              font-size:7rem;
              display:inline-block;
              color: var(--dark-bg);
              font-family: 'Montserrat SemiBold';
            }
            .half-color:before{
              content: attr(attribute);
              color:var(--white);
              position:absolute;
              top:0;
              left:0;
              height:50%;
              overflow:hidden;
            }
        span{
          display:flex;
           justify-content: center;
          /* width:100% */
        }
        .hero_name{
           font-size: 7rem;
           font-family: 'Montserrat SemiBold';
           color: var(--white)
        }
      }
      .hero__img{
        max-width: 900px;
        width: 100%;
        height:680px;
        margin:0 auto;
        border:1px solid var(--gray-1)
      } 
      .hero_info{
        margin-top:-11rem
      }

     .social,.social_scroll{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: absolute;
        width:50px;
       
     } 
     .social{
       left:50px ;
       bottom: -72px;
     }
     .social_scroll{
       right:50px;
       bottom: 20px;
     } 
     .social_scroll, .social_indicator{
       width:50px;
       p{
         font-size: 1.6rem;
         transform: translateY(-70px) rotate(90deg);
         letter-spacing: .7rem;
         text-transform: uppercase ;
       }
       img{ 
         max-height:45px;
         width:16px;
         margin:0 auto;
         object-fit: contain;
       }
     }
     .social_scroll{
       img{
         max-height: 70px;
       }
     }
     .social_text{
       ul{
         li{
            margin-bottom:1rem ;
            a{
           display: inline-block;
           font-size: 4rem;
           transform:  rotate(-90deg);
           letter-spacing: 5px;
           margin-bottom: 2rem;
           
         }
         }
        
       }
     }
  
     
     @media only screen and (max-width:1036px){
      .social_scroll,.social_indicator{
        p{
          color:black;
        }
        
       }
     }
     @media only screen and (max-width:768px){
      .hero{
        min-height: 750px;
      }
      .para{
        color: var(--gray-1);
      }
      .hero__heading{
          font-size: 1.4rem;
          margin-bottom:-2rem;
          .hero_name{
            font-size: 4rem;
            position: relative;
            top: .5rem;
            .half-color {
              position:;
              position:relative;
              font-size:4rem;
            }
          }
         
      }
      .hero__img{
        height:300px;
      }
      .hero_info{
        margin-top:3rem;
        color:white;
      }
      .social{
        left:0px;
        bottom:9%;
        width:20px;
        .social_indicator{
            width:28px;
            p{
              font-size: 1.2rem;
              color:var(--gray-1);
            }
            img{
              max-height:22px;
            }
        }
        .social_text{
          ul{
            li{
              a{
                font-size: 1.2rem;
                margin-bottom: 1rem;
              }
            }
          }
        }

      }
      .social_scroll{
        right:0px;
        width:20px;
        gap:1rem;
        p{
          font-size:1.3rem;
          color:var(--gray-1);
        }
      }
      .typical > div{

      font-size: 1.2rem;
      font-weight: bold;
       color: var(--gray-1);
}
     }
  
`
export default function HeroSelection() {
    return (
      <HeroStyles>
          <div className="hero">
          <div className="container">
            <h1  className="hero__heading">
              <span>Hola, This is</span>
              {/* <span className="hero_name">Javid</span> */}
              <span className="hero_name">
             
              <span className="half-color" attribute="J">J</span>
              <span className="half-color" attribute="A">A</span>
              <span className="half-color" attribute="V">V</span>
              <span className="half-color" attribute="I">I</span>
              <span className="half-color" attribute="D">D</span>
              </span>
             
            </h1>
            <div className="hero__img"><img src={HeroImg} alt="" /></div>
         
            <div className="hero_info">
              <PText textColor="black"  font="bold">
                 <ReactTypingEffect
                  text="Senior Consultant || UI developer... "
                  className="typical"
                  speed="80"
                  eraseDelay="5000" />
              </PText>
              <Button btnLink="/projects"  btnText="See my work" outline='yes'/>
            </div>
            <div className="social">
              <div className="social_indicator">
                <p>Follow</p>
                <img src={SocialArrow} alt="" />
              </div>
              <div className="social_text">
                <ul>
                  <li><a  href="https://www.facebook.com/javid.basha.925/" target="_blank" rel="noreferrer" ><ImFacebook2  /></a></li>
                  <li><a className="li"  href="  https://www.linkedin.com/in/javid-basha-9a713277/" target="_blank" rel="noreferrer" ><ImLinkedin  /></a></li>
                </ul>
              </div>
            </div>
          </div>
           <div className="social_scroll">
             <p>Scroll</p>
             <img src={scrollDownArrow} alt="" />
           </div>
        </div>
        </HeroStyles>
    )
}
