import React ,{useState,useEffect}from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import {MdSearch} from 'react-icons/md'
import ProjectItem  from '../components/ProjectItem'
import ProjectList from '.././assets/data/projects'
const ProjectStyles = styled.div`
padding: 10rem 0;
.projects_allitem{
   display   :grid ;
   grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
   gap:5rem;
   margin-top:5rem;
}
.project_search{
    width:300px;
    position: relative;
    margin-top:5rem;
}
.project_search input{
    width:100%;
    font-size: 2rem;
    padding: 0.8rem;
    padding-right: 4rem;
    color:var(--black);
    border-radius:6px;
    outline: none;
    border: none;
}
.searchIcon{
  position  : absolute;
  right: 1rem;
  width: 3rem;
}
.searchIcon path{
 color:var(--deep-dark)
}
@media only screen and (max-width:768px){
    .project_search,.project_search input ,.project_search form{
        width:100%
    }
}
`;

export default function Project() {
    const [projectData, setProjectData] = useState(ProjectList);
    const [searchText, setsearchText] = useState('');
    useEffect(() => {
        if(!searchText) return ;
        setProjectData(()=>(
            ProjectList.filter(item=>(
                item.name.toLowerCase().match(searchText.toLowerCase())
            ))
        ))
     
    }, [searchText])
    function handleTextChange(e){
        e.preventDefault();
        setsearchText(e.target.value);
        if(!e.target.value.length > 0){
            setProjectData(ProjectList);
        }
    }
    return (
        <ProjectStyles>
           <div className="container">
               <SectionTitle
              heading="Projects" 
              subHeading="Some of my recent works"
               />
               <div className="project_search">
                   <form action="">
                       <input type="text" 
                       value ={searchText}
                       onChange={handleTextChange}
                       />
                       <MdSearch className="searchIcon" />
                       </form>
               </div>
               <div className="projects_allitem">
                   {projectData.map(({id,img,name,desc})=>(
                        <ProjectItem  key={id} 
                        img={img}
                        title={name}
                        desc={desc}
                        />
                   ))}
               
               </div>
           </div>
        </ProjectStyles>
    )
}
