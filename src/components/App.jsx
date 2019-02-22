import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import Error404 from './Error404';
import Header from './Header';

import WorkExperience from './workExperience/WorkExperience';
import Project from './projects/Project';
import Interests from './interests/Interests';
import Education from './education/Education';
import vwBack from '../assets/VWBack.jpg';


function App(){

  const img = {
    width:'100%',
    height:'700px',
   
  }
  const border ={
    border:'2px solid black'
  }
  const background={
    backgroundColor:'white'
  }

  return (
    <div>
      <Header/>
      <div>        
        <img style={img} src={vwBack}/>
      </div>      
      {/* <div style={border}>
       <Education/>
      </div> */}
      <div style={background}>      
      <Interests/>
     </div>
     <div style ={border}>
     <Project/>
      </div> 
       <div style={background}>
       <WorkExperience/>
      </div>
    </div>

  );
}

export default App;
