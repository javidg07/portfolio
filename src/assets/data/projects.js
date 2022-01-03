import { v4 as uuidv4 } from 'uuid';
import bsc from '../images/bsc.png';
import geImg from '../images/ge.jpg';
import renault from '../images/renault.png';
import boeing from '../images/boeing.jpg';
import beacon from '../images/beacon.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'General Electric',
    desc:
      'Product life portal is a consolidation and rebuild of 16 applications which is used for GE PGS lifecycle productivity and reliability .Engineering team is responsible for analyzing and modeling the capital parts of the turbine.',
    img: geImg,
  },
  {
    id: uuidv4(),
    name: 'Renault',
    desc:
      'SIMAP is a global quality tool to check conformity of the vehicle. Scope of the application is getting extended from Assembly to Power train [Engine module].Samples taken by Robot or manually of each characteristic for every interval of time    uploads into tool to generate different types of reports based on the profile and provided input. It allows users to upload part image and assign the characteristics to each part of the vehicle and visualize characteristics assigned in a single view.x Samples taken by Robot or manually of each characteristic for every interval of time  uploads into tool to generate different types of reports based on the profile and provided input. It allows users to upload part image and assign the characteristics to each part of the vehicle and visualize characteristics assigned in a single view.',
    img: renault,
  },
  {
    id: uuidv4(),
    name: 'Boeing',
    desc:
      'The world largest aerospace company and leading manufacturer of commercial jetliners defense, space and security system. Developed portal named cactus for creating training manuals for end users.',
    img: boeing,
  },
  {
    id: uuidv4(),
    name: "Beacon",
    desc:
      'The Georgia Department of Behavioural Health and Developmental Disabilities provides treatment and support services to people with mental health challenges and substance use disorders and assists individuals who live with intellectual and developmental disabilities.',
    img: beacon,
  },
  {
    id: uuidv4(),
    name: 'Blue Shield of California',
    desc:
      'Developed a web application which caters as a dashboard for the operations in the team under various Facets towers. A portal to track, manage, view and modify incidents, reports and also provides an automation for report generation and E-mail notification to business.',
    img: bsc,
  },
];

export default projects;
