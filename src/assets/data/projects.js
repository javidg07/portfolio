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
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: geImg,
  },
  {
    id: uuidv4(),
    name: 'Renault',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: renault,
  },
  {
    id: uuidv4(),
    name: 'Boeing',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: boeing,
  },
  {
    id: uuidv4(),
    name: "Beacon",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: beacon,
  },
  {
    id: uuidv4(),
    name: 'Blue Shield of California',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: bsc,
  },
];

export default projects;
