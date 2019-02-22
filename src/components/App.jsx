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

  return (
    <div>
      <Header/>
      <div>        
        <img style={img} src={vwBack}/>
      </div>
      </hr>
      <div>
       <Project/>
      </div>
      <div>
      
      <Interests/>
     </div>
     <div>
       <Education/>
      </div>
      <div>
       <WorkExperience/>
      </div>
    </div>

  );
}

export default App;
