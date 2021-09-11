import React from 'react'
import styled from 'styled-components'
import FooterCol from './FooterCol'
import PText from './PText'

const FooterStyles = styled.div`
padding-top:10rem;
background-color: var(--deep-dark);
.container{
    display: flex;
    gap: 3rem;
}
.footer_col1{
 flex:2;
}
.footer_col1_title{
    font-size: 3rem;
    margin-bottom: 1rem;
}
.footer_col2,.footer_col3,.footer_col4{
 flex:1;
}
.copyright{
    background-color:var(--dark-bg);
    text-align: left;
    margin-top:5rem;
    padding:1rem 0;
}
@media only screen and (max-width:768px){
    .container{
        flex-direction: column;
        gap:0rem;
        text-align: center;
        & > div{
        margin-top:5rem;
        }
    }
  .footer_col1{
      max-width: 100%;
  }
  .copyright{
      .container{
       div{
          margin-top:0;
       }
      }
  }

}

`;
export default function Footer() {
    return (
        <FooterStyles>
          <div className="container">
              <div className="footer_col1">
                  <h1 className="footer_col1_title">
                      Javid
                  </h1>
                  <PText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe hic, facere nostrum vero accusamus consequatur non nulla eum quod quam, sit corrupti molestias totam incidunt ratione enim libero obcaecati ab.
                      </PText>
              </div>
              <div className="footer_col2">
                 <FooterCol  heading="Important Links"
                links ={[
                    {type:"Links", title:"Home",path:"/"},
                    {type:"Links", title:"About",path:"/about"},
                    {type:"Links", title:"Projects",path:"/projects"},
                    {type:"Links", title:"Contact",path:"/contact"}     
                ]}/>
              </div>
              <div className="footer_col3">
              <FooterCol  heading="Contact Info"
              links={ [
                    { title:"+918056092750",path:"tel:+918056092750"},
                    { title:"javidg07@gmail.com",path:"mailTo:javidg07"},
                  ]}

              />
              </div>
              <div className="footer_col4">
              <FooterCol
              heading="Social Links"
              links={ [
                    { title:"Facebook",path:"https://facebook.com"},
                    { title:"Linkedin",path:"https://Linkedin.com"},  
                    { title:"Instagram",path:"https://instagram.com"},
                  ]}
              />
              </div>
          </div>
        <div className="copyright">
            <div className="container">
                <PText>
                &copy; 2021 | designed by Javid   
                </PText>
            </div>
        </div>
        </FooterStyles>
    )
}
