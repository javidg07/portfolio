import React from 'react'
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styled from 'styled-components'
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle'

const ContactSectionStyle =styled.div`
padding:10rem 0;
.section_wrapper{
    display: flex;
    gap:5rem;
    margin-top:7rem;
    justify-content: space-between;
    position: relative;
}
.section_wrapper::after{
    content: "";
    position: absolute;
    width:2px;
    height: 50%;
    background-color: var(--gray-1);
    left:50%;
    top:30%;
    transform: translate(-50%,-50%);

}
.left,.right{
    width:100%;
    max-width: 500px;
}
@media only screen and (max-width :768px){
    .section_wrapper{
        flex-direction: column;
    }
    .section_wrapper::after{
          display: none;
    }
    .left,.right{
        width:100%
    }
    .right{
        padding:4rem 2rem 2rem 2rem;
    }
}
`;

export default function ContactSection() {
    return (
        <ContactSectionStyle>
            <div className="container">
                <SectionTitle
                heading="Contact"
                subHeading="Get in touch"
                />
                <div className="section_wrapper">
                    <div className="left">
                        <ContactInfoItem 
                        icon={<MdLocalPhone/>}
                         text="+918056092750"/>
                        <ContactInfoItem
                         icon={<MdEmail/>}
                         text="javidg07@gmail.com"/>
                        <ContactInfoItem
                       
                         text="Chennai,TamilNadu"/>
                        </div>
                    <div className="right">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </ContactSectionStyle>
    )
}
